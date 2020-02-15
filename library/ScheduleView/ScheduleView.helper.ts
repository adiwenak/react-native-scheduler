import { Activity, ActivityId, BaseTimeline } from "../shared"
import { CategoryColour, GridViewItem, MapperParam, MapperResult } from "./ScheduleView.model"

interface GroupParam {
  allGroup: GroupActivity[],
  gridMaxColumn: number,
  gridStartHour: number,
  categoryColour: CategoryColour
}

interface GroupResult {
  groups: GroupActivity[]
  groupsMaxColumns: number
}

interface LaneItem {
  activity: Activity
  columnSpan: number
  columnStart: number
}

function timeSorter(a: BaseTimeline, b: BaseTimeline) {
  return a.startTime.getTime() - b.startTime.getTime()
}

function yPosition(startTime: Date, gridStartHours: number): number {
  const toHour = startTime.getTimeInMinutes() / 60
  if (toHour > gridStartHours) {
    return toHour - gridStartHours
  } else {
    return 0
  }
}

function activityHeight(schedule: Activity): number {
  const duration = (schedule.endTime.getTimeInMinutes() - schedule.startTime.getTimeInMinutes()) / 60
  return duration
}

function isActivityWithinActivity(activity1: BaseTimeline, activity2: BaseTimeline): boolean {
  if (activity1.startTime >= activity2.startTime && activity1.startTime < activity2.endTime) {
    return true
  } else if (activity1.endTime >= activity2.startTime && activity1.startTime < activity2.endTime) {
    return true
  } else {
    return false
  }
}

export class GroupActivity implements BaseTimeline {
  public startTime: Date
  public endTime: Date
  private lanes?: LaneItem[][]
  private flatLanes: LaneItem[]

  constructor(schedule: Activity) {
    this.startTime = schedule.startTime
    this.endTime = schedule.endTime
    this.flatLanes = []
    this.addActivity(schedule)
  }

  public isActivityWithinTheGroup = (activity: BaseTimeline): boolean => {
    return isActivityWithinActivity(activity, this)
  }

  public getNumberOfColumn = (): number => {
    if (this.lanes) {
      return this.lanes.length
    } else {
      return 0
    }
  }

  public getAllLaneItems = (): LaneItem[] => {
    return this.flatLanes
  }

  public groom = () => {
    if (!this.lanes) {
      return
    }

    const map: Map<ActivityId, LaneItem> = new Map()

    this.lanes.forEach((val: LaneItem[]) => {
      val.forEach((item) => {
        const existing = map.get(item.activity.id)
        if (existing) {
          existing.columnSpan = existing.columnSpan + 1
        } else {
          item.columnSpan = item.columnSpan + 1
          map.set(item.activity.id, item)
        }
      })
    })

    this.flatLanes = Array.from(map.values()).sort((a, b) => {
      return a.activity.startTime.getTime() - b.activity.startTime.getTime()
    })
  }

  public addActivity = (schedule: Activity): boolean => {
    if (!this.isActivityWithinTheGroup(schedule)) {
      return false
    }

    if (!this.lanes) {
      const laneItems = [
        {
          activity: schedule,
          columnStart: 0,
          columnSpan: 0
        }
      ]

      this.lanes = [laneItems]
      return true
    }

    let added = false
    this.lanes.forEach((val: LaneItem[], index: number, array: LaneItem[][]) => {
      const lastItem = val[val.length - 1]
      if (!isActivityWithinActivity(schedule, lastItem.activity)) {
        val.push({
          activity: schedule,
          columnStart: index,
          columnSpan: 0
        })
        added = true
      }
    })

    if (!added) {
      const laneItems = [
        {
          activity: schedule,
          columnStart: this.lanes.length,
          columnSpan: 0
        }
      ]

      this.lanes.push(laneItems)
    }

    if (schedule.startTime < this.startTime) {
      this.startTime = schedule.startTime
    }

    if (schedule.endTime > this.endTime) {
      this.endTime = schedule.endTime
    }

    return true
  }
}

export function groupSchedule(allActivities: Activity[]): GroupResult {
  const collections: GroupActivity[] = []
  const sortedActivities = allActivities.sort(timeSorter)

  for (const activity of sortedActivities) {
    if (collections.length === 0) {
      const group = new GroupActivity(activity)
      collections.push(group)
      continue
    }

    const lastGroup: GroupActivity = collections.lastObject()
    if (lastGroup.isActivityWithinTheGroup(activity)) {
      lastGroup.addActivity(activity)
    } else {
      const group = new GroupActivity(activity)
      collections.push(group)
    }
  }

  let longestOverlap = 0
  collections.forEach((group) => {
    group.groom()
    if (group.getNumberOfColumn() > longestOverlap) {
      longestOverlap = group.getNumberOfColumn()
    }
  })

  return { groupsMaxColumns: longestOverlap, groups: collections }
}

export function mapToGridViewItem(param: GroupParam): GridViewItem[] {
  const { allGroup, gridMaxColumn, gridStartHour, categoryColour: groupToColour } = param
  const items: GridViewItem[] = []

  for (const group of allGroup) {
    const allActivities = group.getAllLaneItems()
    const normalisedColumnWidth = Math.round(gridMaxColumn / group.getNumberOfColumn() * 2) / 2
    for (const item of allActivities) {
      const activity = item.activity
      const y = yPosition(item.activity.startTime, gridStartHour)
      const x = item.columnStart * normalisedColumnWidth
      const height = activityHeight(item.activity)
      const position = { x, y }
      const widthToBeUse = normalisedColumnWidth * item.columnSpan
      const dimension = { height, width: widthToBeUse }
      const gridItem: GridViewItem = {
        position,
        dimension,
        id: activity.id,
        name: activity.name,
        category: activity.category,
        backgroundColor: groupToColour[activity.category],
        startTime: activity.startTime,
        endTime: activity.endTime
      }

      items.push(gridItem)
    }
  }

  return items
}

export function activityToGridViewItem(param: MapperParam): MapperResult {
  const group = groupSchedule(param.activities)
  const items = mapToGridViewItem({
    allGroup: group.groups,
    gridMaxColumn: group.groupsMaxColumns,
    gridStartHour: 7,
    categoryColour: param.categoryColour
  })

  return {
    maxColumn: group.groupsMaxColumns,
    items
  }
}
