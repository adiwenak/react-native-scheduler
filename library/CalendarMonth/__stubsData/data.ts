import moment from "moment"
import { Colours } from "../../shared/colour"
import { Activity, Category, CategoryActivities, CategorySelection } from "../../shared/model"
import { CategoryActivity } from "../CalendarMonth"

export const cat1: CategorySelection = {
  id: "1",
  name: "Ben Af",
  colour: Colours.Cobalt,
  isSelected: false
}

export const cat2: CategorySelection = {
  id: "2",
  name: "Cardano",
  colour: Colours.Cardinal,
  isSelected: false
}

export const cat3: CategorySelection = {
  id: "3",
  name: "Zester",
  colour: Colours.Zest,
  isSelected: false
}

export const cat4: CategorySelection = {
  id: "4",
  name: "Green Lantern",
  colour: Colours.LaPalma,
  isSelected: false
}

export const categoryCollections: Category[] = [cat1, cat2, cat3, cat4]

const date1 = moment().add(1, "days")
const date2 = moment().add(2, "days")
const date3 = moment().add(3, "days")
const date4 = moment().add(4, "days")
const date5 = moment().add(1, "weeks")
const date6 = moment().add(1, "weeks").subtract(1, "days")

export const allActivities: Activity[] = [
  {
    id: "1-1",
    category: "1",
    name: "Clean Toilet",
    startTime: date1.toDate(),
    endTime: date1.add(2, "hours").toDate()
  },
  {
    id: "1-2",
    category: "1",
    name: "Gardening",
    startTime: date2.add(1, "hours").toDate(),
    endTime: date2.add(3, "hours").toDate()
  },
  {
    id: "1-3",
    category: "1",
    name: "Gardening",
    startTime: date6.toDate(),
    endTime: date6.add(4, "hours").toDate()
  },
  {
    id: "2-1",
    category: "2",
    name: "Clean Toilet",
    startTime: date1.add(3, "hours").toDate(),
    endTime: date1.add(5, "hours").toDate()
  },
  {
    id: "2-2",
    category: "2",
    name: "Gardening",
    startTime: date2.add(2, "hours").toDate(),
    endTime: date2.add(4, "hours").toDate()
  },
  {
    id: "3-1",
    name: "Clean Toilet",
    category: "3",
    startTime: date3.add(1, "hours").toDate(),
    endTime: date3.add(5, "hours").toDate()
  },
  {
    id: "3-2",
    category: "3",
    name: "Gardening",
    startTime: date4.add(2, "hours").toDate(),
    endTime: date4.add(4, "hours").toDate()
  },
  {
    id: "4-1",
    category: "4",
    name: "BBQ",
    startTime: date1.add(4, "hours").toDate(),
    endTime: date1.add(6, "hours").toDate()
  },
  {
    id: "4-2",
    category: "4",
    name: "Clean Toilet",
    startTime: date5.add(1, "hours").toDate(),
    endTime: date5.add(5, "hours").toDate()
  },
  {
    id: "4-3",
    category: "4",
    name: "Gardening",
    startTime: date6.toDate(),
    endTime: date6.add(4, "hours").toDate()
  }
]

const map: CategoryActivities = {}

for (const activity of allActivities) {
  if (!map[activity.category]) {
    map[activity.category] = []
  }

  map[activity.category].push(activity)
}

const categoryActivities: CategoryActivity[] = []

Object.keys(map).forEach((categoryId: string) => {
  const category = categoryCollections.find((cat) => cat.id === categoryId)
  if (!category) {
    return
  }

  categoryActivities.push({
    category,
    tasks: map[categoryId]
  })
})

export { categoryActivities }
