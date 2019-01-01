import moment from "moment"
import { Colours } from "../library/shared/colour"
import { TaskSchedule, User, UserSelection } from "../library/shared/model"

export const user1: UserSelection = {
    id: "1",
    name: "Ben Af",
    colourIndicator: Colours.Cobalt,
    isSelected: true
}

export const user2: UserSelection = {
    id: "2",
    name: "Cardano",
    colourIndicator: Colours.Cardinal,
    isSelected: true
}

export const user3: UserSelection = {
    id: "3",
    name: "Zester",
    colourIndicator: Colours.Zest,
    isSelected: false
}

export const user4: UserSelection = {
    id: "4",
    name: "Green Lantern",
    colourIndicator: Colours.LaPalma,
    isSelected: false
}

const date1 = moment().add(1, "days")
const date2 = moment().add(2, "days")
const date3 = moment().add(3, "days")
const date4 = moment().add(4, "days")
const date5 = moment().add(1, "weeks")
const date6 = moment().add(1, "weeks").subtract(1, "days")

const date10 = moment().add(1, "month")
const date11 = moment().add(1, "month").add(1, "days")
const date12 = moment().add(1, "month").add(2, "days")

export const taskSchedules: TaskSchedule = {
    1: [
        {
            id: "1-1",
            name: "Clean Toilet",
            startTime: date1.toDate(),
            endTime: date1.add(2, "hours").toDate()
        },
        {
            id: "1-2",
            name: "Gardening",
            startTime: date2.add(1, "hours").toDate(),
            endTime: date2.add(3, "hours").toDate()
        },
        {
            id: "1-3",
            name: "Gardening",
            startTime: date6.toDate(),
            endTime: date6.add(4, "hours").toDate()
        }
    ],
    2: [
        {
            id: "2-1",
            name: "Clean Toilet",
            startTime: date1.add(3, "hours").toDate(),
            endTime: date1.add(5, "hours").toDate()
        },
        {
            id: "2-2",
            name: "Gardening",
            startTime: date2.add(2, "hours").toDate(),
            endTime: date2.add(4, "hours").toDate()
        }
    ],
    3: [
        {
            id: "3-1",
            name: "Clean Toilet",
            startTime: date3.add(1, "hours").toDate(),
            endTime: date3.add(5, "hours").toDate()
        },
        {
            id: "3-2",
            name: "Gardening",
            startTime: date4.add(2, "hours").toDate(),
            endTime: date4.add(4, "hours").toDate()
        }
    ],
    4: [
        {
            id: "4-1",
            name: "BBQ",
            startTime: date1.add(4, "hours").toDate(),
            endTime: date1.add(6, "hours").toDate()
        },
        {
            id: "4-2",
            name: "Clean Toilet",
            startTime: date5.add(1, "hours").toDate(),
            endTime: date5.add(5, "hours").toDate()
        },
        {
            id: "4-3",
            name: "Gardening",
            startTime: date6.toDate(),
            endTime: date6.add(4, "hours").toDate()
        }
    ]
}

export const allUser = [user1, user2, user3, user4]
