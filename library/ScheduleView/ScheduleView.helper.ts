import { Activity, BaseTimeline } from "../shared"
import { GridViewItem, GroupIdentifierToColour } from "./ScheduleView.model"
import { GroupActivity } from "./ScheduleView.model"

interface Param {
  allGroup: GroupActivity[],
  gridMaxColumn: number,
  gridStartHour: number,
  groupToColour: GroupIdentifierToColour
}

interface GroupResult {
  groups: GroupActivity[]
  groupsMaxColumns: number
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

function itemHeight(schedule: Activity): number {
  const duration = (schedule.endTime.getTimeInMinutes() - schedule.startTime.getTimeInMinutes()) / 60
  return duration
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

    let isAdded = false
    for (const group of collections) {
      if (group.isScheduleWithinTheGroup(activity)) {
        group.addActivity(activity)
        isAdded = true
        break
      }
    }

    if (!isAdded) {
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

  return {groupsMaxColumns: longestOverlap, groups: collections}
}

export function mapToGridViewItem(param: Param): GridViewItem[] {
  const { allGroup, gridMaxColumn, gridStartHour, groupToColour } = param
  const items: GridViewItem[] = []

  for (const group of allGroup) {
    console.log("max column", group.getNumberOfColumn())
    if (group.getNumberOfColumn() < 5) {
      const allActivities = group.getAllLaneItems()
      const columnWidth = Math.round(gridMaxColumn / group.getNumberOfColumn() * 2) / 2
      let widthRemaining = gridMaxColumn
      for (const item of allActivities) {
        console.log(`${item.activity.name} - column span: ${item.columnSpan} - start: ${item.columnStart}`)
        const activity = item.activity
        const y = yPosition(item.activity.startTime, gridStartHour)
        const x = item.columnStart * columnWidth
        const height = itemHeight(item.activity)
        const position = { x, y }
        const widthToBeUse = columnWidth * item.columnSpan

        const dimension = { height, width: widthToBeUse }
        console.log("position", position)
        console.log("dimension", dimension)
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
        widthRemaining = widthRemaining - columnWidth
      }
    } else {
      //
    }
  }

  return items
}

interface Result {
  longestOverlap: number
  items: GridViewItem[]
}

export function activityToGridViewItem(activities: Activity[], colourMap: GroupIdentifierToColour): Result {
  const group = groupSchedule(activities)
  const items = mapToGridViewItem({
    allGroup: group.groups,
    gridMaxColumn: group.groupsMaxColumns,
    gridStartHour: 7,
    groupToColour: colourMap
  })

  return {
    longestOverlap: group.groupsMaxColumns,
    items
  }
}
