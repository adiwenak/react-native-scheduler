import { Activity, BaseTimeline } from "../shared"
import { GridViewItem, GroupIdentifierToColour } from "./ScheduleView.model"
import { GroupSchedule, RegroupResult } from "./ScheduleView.model"

function timeSorter(a: BaseTimeline, b: BaseTimeline) {
  return a.startTime.getTime() - b.startTime.getTime()
}

export function groupSchedule(allActivities: Activity[]): RegroupResult {
  const collections: GroupSchedule[] = []
  const sortedActivities = allActivities.sort(timeSorter)

  for (const activity of sortedActivities) {
    if (collections.length === 0) {
      const group = new GroupSchedule(activity)
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
      const group = new GroupSchedule(activity)
      collections.push(group)
    }
  }

  // return regroupGroupSchedule(collections, 0)
  let longestOverlap = 0
  collections.forEach((group) => {
    group.groom()
    if (group.getNumberOfColumn() > longestOverlap) {
      longestOverlap = group.getNumberOfColumn()
    }
  })

  return {longestOverlap, groups: collections}
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

interface Param {
  allGroup: GroupSchedule[],
  gridMaxColumn: number,
  gridStartHour: number,
  groupToColour: GroupIdentifierToColour
}

export function mapToGridViewItem(param: Param): GridViewItem[] {
  const { allGroup, gridMaxColumn, gridStartHour, groupToColour } = param
  const items: GridViewItem[] = []

  allGroup.sort(timeSorter)

  for (const group of allGroup) {

    if (group.getNumberOfColumn() < 5) {
      const allActivities = group.flatLanes
      const columnWidth = Math.round(gridMaxColumn / group.getNumberOfColumn() * 2) / 2
      let widthRemaining = gridMaxColumn
      let counter = 0
      for (const item of allActivities) {
        // console.log(`${item.activity.name} - column span: ${item.columnSpan} - start: ${item.columnStart}`)
        const activity = item.activity
        const y = yPosition(item.activity.startTime, gridStartHour)
        const x = item.columnStart * columnWidth
        const height = itemHeight(item.activity)
        const position = { x, y }
        const widthToBeUse = columnWidth * item.columnSpan

        const dimension = { height, width: widthToBeUse }
        // console.log("position", position)
        // console.log("dimension", dimension)
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
        counter += 1
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
    gridMaxColumn: group.longestOverlap,
    gridStartHour: 7,
    groupToColour: colourMap
  })

  return {
    longestOverlap: group.longestOverlap,
    items
  }
}
