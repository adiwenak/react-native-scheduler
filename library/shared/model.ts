export enum Month {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export type TimeInMinutes = number
export type CategoryId = string
export type ActivityId = string

// tslint:disable-next-line:max-line-length
export type DateNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

export interface BaseTimeline {
  startTime: Date
  endTime: Date
}

export interface Category {
  id: CategoryId
  name: string
  colour: string
}

export interface CategorySelection extends Category {
  isSelected: boolean
}

export interface Activity extends BaseTimeline {
  id: ActivityId
  category: CategoryId
  name: string
}

// CategoryId map to activities
export interface CategoryActivities {
  [key: string]: Activity[]
}

export interface CategoryActivity {
  category: CategorySelection
  tasks: Activity[]
}
