import { Activity, ActivityId, BaseTimeline } from "../shared"

export interface RegroupResult {
  groups: GroupSchedule[]
  longestOverlap: number
}

export interface GridViewItem extends Activity {
  position: {
    x: number
    y: number
  }
  dimension: {
    height: number
    width: number
  }
  backgroundColor: string
}

export interface GroupIdentifierToColour {
  [key: string]: string
}

interface LaneItem {
  activity: Activity
  columnSpan: number
  columnStart: number
}

function activityIsWithinActivity(activity1: Activity, activity2: Activity): boolean {
  if (activity1.startTime >= activity2.startTime && activity1.startTime < activity2.endTime) {
    return true
  } else if (activity1.endTime >= activity2.startTime && activity1.startTime < activity2.endTime) {
    return true
  } else {
    return false
  }
}

export class GroupSchedule implements BaseTimeline {
  public allItems: Activity[]
  public startTime: Date
  public endTime: Date
  public lanes?: LaneItem[][]
  public flatLanes: LaneItem[]

  constructor(schedule: Activity) {
    this.allItems = []
    this.startTime = schedule.startTime
    this.endTime = schedule.endTime
    this.flatLanes = []
    this.addActivity(schedule)
  }

  public isScheduleWithinTheGroup = (schedule: BaseTimeline): boolean => {
    if (schedule.startTime >= this.startTime && schedule.startTime <= this.endTime) {
      return true
    } else if (schedule.endTime >= this.startTime && schedule.startTime <= this.endTime) {
      return true
    } else {
      return false
    }
  }

  public getNumberOfColumn = (): number => {
    if (this.lanes) {
      return this.lanes.length
    } else {
      return 0
    }
  }

  public addGroup = (group: GroupSchedule): boolean => {
    if (!this.isScheduleWithinTheGroup(group)) {
      return false
    }

    this.allItems = [...this.allItems, ...group.allItems]

    if (group.startTime < this.startTime) {
      this.startTime = group.startTime
    }

    if (group.endTime > this.endTime) {
      this.endTime = group.endTime
    }

    return true
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

    this.flatLanes = Array.from(map.values())
  }

  public addActivity = (schedule: Activity): boolean => {
    if (!this.isScheduleWithinTheGroup(schedule)) {
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
      val.forEach((item) => {
        if (!activityIsWithinActivity(schedule, item.activity)) {
          val.push({
            activity: schedule,
            columnStart: index,
            columnSpan: 0
          })
          added = true
        }
      })
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

    this.allItems.push(schedule)

    if (schedule.startTime < this.startTime) {
      this.startTime = schedule.startTime
    }

    if (schedule.endTime > this.endTime) {
      this.endTime = schedule.endTime
    }

    return true
  }
}
