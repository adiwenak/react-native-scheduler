import moment from "moment"
import { Colours } from "../library/shared/colour"
import { Activity, CategoryActivities, CategoryActivity, CategorySelection } from "../library/shared/model"

const date1 = moment().add(1, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const date2 = moment().add(2, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const date3 = moment().add(3, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const date4 = moment().add(4, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextWeek1 = moment().add(1, "weeks").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextWeek2 = moment().add(1, "weeks").add(3, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextWeek21 = moment().add(2, "weeks").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextWeek22 = moment().add(2, "weeks").add(5, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextMonth1 = moment().add(1, "month").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
const nextMonth2 = moment().add(1, "month").add(3, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

const A1 = "A1"
const A2 = "A2"
const B1 = "B1"
const B2 = "B2"
const C1 = "C1"
const C2 = "C2"

export const categoryA1: CategorySelection = {
  id: A1,
  name: "Category A1",
  colour: Colours.Indigo,
  isSelected: true
}

export const categoryA2: CategorySelection = {
  id: A2,
  name: "Category A2",
  colour: Colours.LightBlue,
  isSelected: true
}

export const categoryB1: CategorySelection = {
  id: B1,
  name: "Category B1",
  colour: Colours.Purple,
  isSelected: true
}

export const categoryB2: CategorySelection = {
  id: B2,
  name: "Category B2",
  colour: Colours.DeepPurple,
  isSelected: true
}

export const categoryC1: CategorySelection = {
  id: C1,
  name: "Category C1",
  colour: Colours.Teal,
  isSelected: false
}

export const categoryC2: CategorySelection = {
  id: C2,
  name: "Category C2",
  colour: Colours.Lime,
  isSelected: false
}

export const dataGroupThisWeek: Activity[] = [
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: date1.set({ hour: 7, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 9, minute: 30 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: date1.set({ hour: 9, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B1-2"
  },
  {
    id: `${B2}-${Math.floor(Math.random() * 10000)}`,
    category: B2,
    startTime: date1.set({ hour: 9, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B2-1"
  },
  {
    id: `A1-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: date1.set({ hour: 11, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 14, minute: 30 }).toDate(),
    name: "Test A1-1"
  },
  {
    id: `A1-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: date1.set({ hour: 13, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 15, minute: 0 }).toDate(),
    name: "Test A1-2"
  },
  {
    id: `A2-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: date1.set({ hour: 13, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 15, minute: 30 }).toDate(),
    name: "Test A2-1"
  },
  {
    id: `A2-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: date1.set({ hour: 14, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 16, minute: 30 }).toDate(),
    name: "Test A2-2"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: date1.set({ hour: 17, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 20, minute: 30 }).toDate(),
    name: "Test C1-1"
  },
  {
    id: `${C2}-${Math.floor(Math.random() * 10000)}`,
    category: C2,
    startTime: date1.set({ hour: 17, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 18, minute: 0 }).toDate(),
    name: "Test C2-1"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: date1.set({ hour: 20, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 22, minute: 0 }).toDate(),
    name: "Test C1-2"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: date3.set({ hour: 7, minute: 10 }).toDate(),
    endTime: date3.set({ hour: 13, minute: 0 }).toDate(),
    name: "Test C1-3"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: date3.set({ hour: 10, minute: 30 }).toDate(),
    endTime: date3.set({ hour: 12, minute: 30 }).toDate(),
    name: "Test B1-3"
  },
  {
    id: `${C2}-${Math.floor(Math.random() * 10000)}`,
    category: C2,
    startTime: date3.set({ hour: 14, minute: 0 }).toDate(),
    endTime: date3.set({ hour: 17, minute: 0 }).toDate(),
    name: "Test C2-2"
  },
  {
    id: `${B2}-${Math.floor(Math.random() * 10000)}`,
    category: B2,
    startTime: date4.set({ hour: 10, minute: 45 }).toDate(),
    endTime: date4.set({ hour: 12, minute: 15 }).toDate(),
    name: "Test B2-3"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: date4.set({ hour: 14, minute: 30 }).toDate(),
    endTime: date4.set({ hour: 16, minute: 10 }).toDate(),
    name: "Test A2-3"
  },
  {
    id: `${B2}-${Math.floor(Math.random() * 10000)}`,
    category: B2,
    startTime: date4.set({ hour: 9, minute: 0 }).toDate(),
    endTime: date4.set({ hour: 17, minute: 0 }).toDate(),
    name: "Test B2-4"
  },
  //
  {
    id: `${A1}-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: date2.set({ hour: 8, minute: 0 }).toDate(),
    endTime: date2.set({ hour: 10, minute: 0 }).toDate(),
    name: "Test A1-1"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: date2.set({ hour: 9, minute: 0 }).toDate(),
    endTime: date2.set({ hour: 11, minute: 15 }).toDate(),
    name: "Test A2-1"
  },
  {
    id: `${B2}-${Math.floor(Math.random() * 10000)}`,
    category: B2,
    startTime: date2.set({ hour: 9, minute: 30 }).toDate(),
    endTime: date2.set({ hour: 13, minute: 30 }).toDate(),
    name: "Test B2-1"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: date2.set({ hour: 11, minute: 30 }).toDate(),
    endTime: date2.set({ hour: 15, minute: 0 }).toDate(),
    name: "Test C1-1"
  },
  //
  {
    id: `${C2}-${Math.floor(Math.random() * 10000)}`,
    category: C2,
    startTime: date2.set({ hour: 16, minute: 0 }).toDate(),
    endTime: date2.set({ hour: 17, minute: 0 }).toDate(),
    name: "Test C2-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: date2.set({ hour: 16, minute: 30 }).toDate(),
    endTime: date2.set({ hour: 20, minute: 30 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${A1}-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: date2.set({ hour: 17, minute: 0 }).toDate(),
    endTime: date2.set({ hour: 19, minute: 30 }).toDate(),
    name: "Test A1-2"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: date2.set({ hour: 19, minute: 30 }).toDate(),
    endTime: date2.set({ hour: 20, minute: 30 }).toDate(),
    name: "Test A2-2"
  }
]

export const dataGroupNextWeek: Activity[] = [
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: nextWeek1.set({ hour: 13, minute: 30 }).toDate(),
    endTime: nextWeek1.set({ hour: 15, minute: 30 }).toDate(),
    name: "Test A2-1"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: nextWeek1.set({ hour: 14, minute: 0 }).toDate(),
    endTime: nextWeek1.set({ hour: 16, minute: 30 }).toDate(),
    name: "Test A2-2"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextWeek1.set({ hour: 17, minute: 0 }).toDate(),
    endTime: nextWeek1.set({ hour: 20, minute: 30 }).toDate(),
    name: "Test C1-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: nextWeek2.set({ hour: 17, minute: 0 }).toDate(),
    endTime: nextWeek2.set({ hour: 18, minute: 0 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextWeek2.set({ hour: 20, minute: 0 }).toDate(),
    endTime: nextWeek2.set({ hour: 22, minute: 0 }).toDate(),
    name: "Test C1-2"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: nextWeek2.set({ hour: 14, minute: 30 }).toDate(),
    endTime: nextWeek2.set({ hour: 16, minute: 10 }).toDate(),
    name: "Test A2-3"
  },
  {
    id: `${A1}-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: nextWeek2.set({ hour: 9, minute: 0 }).toDate(),
    endTime: nextWeek2.set({ hour: 17, minute: 0 }).toDate(),
    name: "Test A1-4"
  }
]

export const dataGroupNext2Week: Activity[] = [
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: nextWeek21.set({ hour: 7, minute: 30 }).toDate(),
    endTime: nextWeek21.set({ hour: 9, minute: 30 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: nextWeek21.set({ hour: 9, minute: 30 }).toDate(),
    endTime: nextWeek21.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B1-2"
  },
  {
    id: `${B2}-${Math.floor(Math.random() * 10000)}`,
    category: B2,
    startTime: nextWeek21.set({ hour: 9, minute: 0 }).toDate(),
    endTime: nextWeek21.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B2-1"
  },
  {
    id: `A1-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: nextWeek22.set({ hour: 11, minute: 30 }).toDate(),
    endTime: nextWeek22.set({ hour: 14, minute: 30 }).toDate(),
    name: "Test A1-1"
  },
  {
    id: `A1-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: nextWeek22.set({ hour: 13, minute: 0 }).toDate(),
    endTime: nextWeek22.set({ hour: 15, minute: 0 }).toDate(),
    name: "Test A1-2"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextWeek22.set({ hour: 7, minute: 30 }).toDate(),
    endTime: nextWeek22.set({ hour: 10, minute: 30 }).toDate(),
    name: "Test C1-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: nextWeek22.set({ hour: 17, minute: 0 }).toDate(),
    endTime: nextWeek22.set({ hour: 19, minute: 0 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextWeek22.set({ hour: 18, minute: 15 }).toDate(),
    endTime: nextWeek22.set({ hour: 20, minute: 0 }).toDate(),
    name: "Test C1-2"
  },
]

export const dataGroupNextMonth: Activity[] = [
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: nextMonth1.set({ hour: 13, minute: 30 }).toDate(),
    endTime: nextMonth1.set({ hour: 15, minute: 30 }).toDate(),
    name: "Test A2-1"
  },
  {
    id: `${A2}-${Math.floor(Math.random() * 10000)}`,
    category: A2,
    startTime: nextMonth1.set({ hour: 14, minute: 0 }).toDate(),
    endTime: nextMonth1.set({ hour: 16, minute: 30 }).toDate(),
    name: "Test A2-2"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextMonth1.set({ hour: 17, minute: 0 }).toDate(),
    endTime: nextMonth1.set({ hour: 20, minute: 30 }).toDate(),
    name: "Test C1-1"
  },
  {
    id: `${B1}-${Math.floor(Math.random() * 10000)}`,
    category: B1,
    startTime: nextMonth2.set({ hour: 17, minute: 0 }).toDate(),
    endTime: nextMonth2.set({ hour: 18, minute: 0 }).toDate(),
    name: "Test B1-1"
  },
  {
    id: `${C1}-${Math.floor(Math.random() * 10000)}`,
    category: C1,
    startTime: nextMonth2.set({ hour: 20, minute: 0 }).toDate(),
    endTime: nextMonth2.set({ hour: 22, minute: 0 }).toDate(),
    name: "Test C1-2"
  },
  {
    id: `${A1}-${Math.floor(Math.random() * 10000)}`,
    category: A1,
    startTime: nextMonth2.set({ hour: 14, minute: 30 }).toDate(),
    endTime: nextMonth2.set({ hour: 16, minute: 10 }).toDate(),
    name: "Test A1-3"
  },
  {
    id: `${C2}-${Math.floor(Math.random() * 10000)}`,
    category: C2,
    startTime: nextMonth2.set({ hour: 9, minute: 0 }).toDate(),
    endTime: nextMonth2.set({ hour: 17, minute: 0 }).toDate(),
    name: "Test C2-4"
  }
]

export const allActivities = [...dataGroupThisWeek, ...dataGroupNextWeek, ...dataGroupNext2Week, ...dataGroupNextMonth]
export const allCategory = [categoryA1, categoryA2, categoryB1, categoryB2, categoryC1, categoryC2]

const map: CategoryActivities = {}

for (const activity of allActivities) {
  if (!map[activity.category]) {
    map[activity.category] = []
  }

  map[activity.category].push(activity)
}

const categoryActivities: CategoryActivity[] = []

Object.keys(map).forEach((categoryId: string) => {
  const category = allCategory.find((cat) => cat.id === categoryId)
  if (!category) {
    return
  }

  categoryActivities.push({
    category,
    tasks: map[categoryId]
  })
})

export const categoryActivitiesData = categoryActivities
