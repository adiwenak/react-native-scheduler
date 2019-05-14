import { Activity, BaseTimeline } from "../shared"
import { GridViewItem, GroupIdentifierToColour } from "./ScheduleView.model"
import { GroupSchedule, RegroupResult } from "./ScheduleView.model"

function timeSorter(a: BaseTimeline, b: BaseTimeline) {
  return a.startTime.getTime() - b.startTime.getTime()
}

function regroupGroupSchedule(groupSchedule: GroupSchedule[], longestOverlap: number): RegroupResult {
  groupSchedule.sort(timeSorter)

  let groupinHappen = false
  const newGroup: GroupSchedule[] = []
  let longest = longestOverlap
  while (groupSchedule.length > 0) {
    const obj = groupSchedule.shift()
    if (obj) {
      if (obj.allItems.length > longest) {
        longest = obj.allItems.length
      }

      let idx = 0
      for (const toCompare of groupSchedule) {
        if (obj.isScheduleWithinTheGroup(toCompare)) {
          obj.addGroup(toCompare)
          groupinHappen = true
          groupSchedule.splice(idx, 1)
        }

        idx += 1
      }

      newGroup.push(obj)
    }

  }
  if (!groupinHappen) {
    return { groups: newGroup, longestOverlap: longest }
  } else {
    return regroupGroupSchedule(newGroup, longest)
  }
}

export function groupSchedule(allSchedule: Activity[]): RegroupResult {
  const collections: GroupSchedule[] = []

  for (const schedule of allSchedule) {
    if (collections.length === 0) {
      const group = new GroupSchedule(schedule)
      collections.push(group)
      continue
    }

    let isAdded = false
    for (const group of collections) {
      if (group.isScheduleWithinTheGroup(schedule)) {
        group.addSchedule(schedule)
        isAdded = true
        break
      }
    }

    if (!isAdded) {
      const group = new GroupSchedule(schedule)
      collections.push(group)
    }
  }

  return regroupGroupSchedule(collections, 0)
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

export function mapGroupScheduleToGridViewItem(param: Param): GridViewItem[] {
  const { allGroup, gridMaxColumn, gridStartHour, groupToColour } = param
  const items: GridViewItem[] = []

  allGroup.sort(timeSorter)

  for (const group of allGroup) {
    const sorted = group.allItems.sort(timeSorter)

    if (sorted.length < 5) {
      const width = Math.round(gridMaxColumn / sorted.length * 2) / 2
      let xPosition = 0
      let widthRemaining = gridMaxColumn
      let lastCounter = 0
      for (const item of sorted) {
        const y = yPosition(item.startTime, gridStartHour)
        const x = xPosition
        const height = itemHeight(item)
        const position = { x, y }
        let widthToBeUse = width
        if (lastCounter === (sorted.length - 1)) {
          widthToBeUse = widthRemaining
        }
        const dimension = { height, width: widthToBeUse }
        const gridItem: GridViewItem = {
          position,
          dimension,
          id: item.id,
          name: item.name,
          category: item.category,
          backgroundColor: groupToColour[item.category],
          startTime: item.startTime,
          endTime: item.endTime
        }

        items.push(gridItem)
        xPosition += width
        lastCounter += 1
        widthRemaining = widthRemaining - width
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

  const items = mapGroupScheduleToGridViewItem({
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
