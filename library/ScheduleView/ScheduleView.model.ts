import { Activity, BaseTimeline } from "../shared"

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

export class GroupSchedule implements BaseTimeline {
  public allItems: Activity[]
  public startTime: Date
  public endTime: Date

  constructor(schedule: Activity) {
    this.allItems = [schedule]
    this.startTime = schedule.startTime
    this.endTime = schedule.endTime
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

  public addSchedule = (schedule: Activity): boolean => {
    if (!this.isScheduleWithinTheGroup(schedule)) {
      return false
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
