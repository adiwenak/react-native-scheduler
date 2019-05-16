import moment from "moment"
import { Activity } from "../../shared"
import { Colours } from "../../shared/colour"

const date1 = moment().add(1, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

export const dataGroup1: Activity[] = [
  {
    id: "A1-2",
    category: "A1",
    startTime: date1.set({ hour: 13, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 15, minute: 0 }).toDate(),
    name: "Test A1-2"
  },
  {
    id: "A2-1",
    category: "A2",
    startTime: date1.set({ hour: 13, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 15, minute: 30 }).toDate(),
    name: "Test A2-1"
  },
  {
    id: "A1-1",
    category: "A1",
    startTime: date1.set({ hour: 11, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 14, minute: 30 }).toDate(),
    name: "Test A1-1"
  },
  {
    id: "A2-2",
    category: "A2",
    startTime: date1.set({ hour: 14, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 16, minute: 30 }).toDate(),
    name: "Test A2-2"
  }
]

export const dataGroup2: Activity[] = [
  {
    id: "B1-2",
    category: "B1",
    startTime: date1.set({ hour: 10, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B1-2"
  },
  {
    id: "B2-1",
    category: "B2",
    startTime: date1.set({ hour: 9, minute: 0 }).toDate(),
    endTime: date1.set({ hour: 11, minute: 0 }).toDate(),
    name: "Test B2-1"
  },
  {
    id: "B1-1",
    category: "B1",
    startTime: date1.set({ hour: 8, minute: 30 }).toDate(),
    endTime: date1.set({ hour: 10, minute: 30 }).toDate(),
    name: "Test B1-1"
  }
]

export const dataGroup3: Activity[] = [
  {
    id: "C1-1",
    category: "C1",
    startTime: date1.set({ hour: 11, minute: 10 }).toDate(),
    endTime: date1.set({ hour: 12, minute: 30 }).toDate(),
    name: "Test C1-1"
  },
  {
    id: "C1-2",
    category: "C1",
    startTime: date1.set({ hour: 12, minute: 20 }).toDate(),
    endTime: date1.set({ hour: 13, minute: 15 }).toDate(),
    name: "Test C1-2"
  }
]

export const dataGroup4: Activity[] = [
  {
    id: "D1-1",
    category: "D1",
    startTime: date1.set({ hour: 13, minute: 40 }).toDate(),
    endTime: date1.set({ hour: 15, minute: 0 }).toDate(),
    name: "Test D1-1"
  },
  {
    id: "D2-1",
    category: "D2",
    startTime: date1.set({ hour: 11, minute: 50 }).toDate(),
    endTime: date1.set({ hour: 14, minute: 40 }).toDate(),
    name: "Test D2"
  }
]

export const dataGroup5: Activity[] = [
  {
    id: "E1-1",
    category: "E1",
    startTime: date1.set({ hour: 15, minute: 10 }).toDate(),
    endTime: date1.set({ hour: 18, minute: 20 }).toDate(),
    name: "Test E1-1"
  },
  {
    id: "E2-1",
    category: "E2",
    startTime: date1.set({ hour: 16, minute: 35 }).toDate(),
    endTime: date1.set({ hour: 17, minute: 5 }).toDate(),
    name: "Test E2-1"
  },
  {
    id: "E2-2",
    category: "E2",
    startTime: date1.set({ hour: 14, minute: 45 }).toDate(),
    endTime: date1.set({ hour: 16, minute: 25 }).toDate(),
    name: "Test E2-2"
  }
]

export const groupBackgroundColourMap = {
  A1: Colours.Indigo,
  A2: Colours.LightBlue,
  B1: Colours.Purple,
  B2: Colours.DeepPurple,
  C1: Colours.Teal,
  C2: Colours.Lime,
  D1: Colours.Yellow,
  D2: Colours.Orange,
  E1: Colours.Cardinal,
  E2: Colours.Pink
}
