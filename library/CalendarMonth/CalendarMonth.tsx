import moment from "moment"
import * as React from "react"
import { LayoutChangeEvent, View } from "react-native"
import { DateNumber, Month, Task, User } from "../shared/model"
import { styles } from "./CalendarMonth.styles"
import { DateCalendarBox } from "./DateCalendarBox"
import { MonthSelection } from "./MonthSelection"
import { WeekDayHeader } from "./WeekDayHeader"

export interface TaskAndUser {
    user: User,
    tasks: Task[]
}

interface CalendarMonthProps {
    data?: TaskAndUser[]
}

interface CalendarMonthState {
    dateBoxWidth: number,
    selectedDate?: DateNumber,
    currentMonth: Month,
    currentYear: number,
}

interface BoxToDateNumberMap {
    [key: number]: DateObject
}

interface ScheduleToUserMap {
    [key: number]: User[]
}

interface DateObject {
    dateNumber: DateNumber
    isWeekend: boolean
    usersBusy: User[]
    isSelected: boolean
}

const nBoxToDateMapper = (year: number, month: number,
                          scheduleToUserMap: ScheduleToUserMap,
                          selectedDate?: DateNumber): BoxToDateNumberMap => {
    const date = new Date(year, month, 1)
    const result: BoxToDateNumberMap = {}
    let startDayOfTheMonth = date.getDay()
    while (date.getMonth() === month) {
        const currentDay = date.getDay()
        const ms = date.getTime()
        let usersBusy: User[] = []
        let isWeekend = false
        const isSelected = date.getDate() === selectedDate
        if (currentDay === 0 || currentDay === 6) {
            isWeekend = true
        }

        if (scheduleToUserMap[ms]) {
            usersBusy = scheduleToUserMap[ms]
        }

        result[startDayOfTheMonth] = {
            dateNumber: date.getDate() as DateNumber,
            isWeekend,
            usersBusy,
            isSelected
        }

        startDayOfTheMonth += 1
        date.setDate(date.getDate() + 1)
    }
    return result
}

const flattenTaskSchedule = (data: TaskAndUser[]): ScheduleToUserMap => {
    const mapped: ScheduleToUserMap = {}
    data.forEach((value: TaskAndUser) => {
        value.tasks.forEach((task: Task) => {
            const dateOnly = new Date(task.startTime.getFullYear(), task.startTime.getMonth(), task.startTime.getDate())
            const ms = dateOnly.getTime()
            let arrayUser: User[] = []
            if (!mapped[ms]) {
                arrayUser = []
            } else {
                arrayUser = [...mapped[ms]]
            }

            arrayUser.push(value.user)
            mapped[ms] = arrayUser
        })
    })

    return mapped
}

export class CalendarMonth extends React.Component<CalendarMonthProps, CalendarMonthState> {
    private boxes = 35
    constructor(props: CalendarMonthProps) {
        super(props)
        const today = moment()
        this.state = {
            dateBoxWidth: 0,
            currentMonth: today.month(),
            currentYear: today.year()
        }
    }

    generateBoxes(data: ScheduleToUserMap) {
        const all = nBoxToDateMapper(this.state.currentYear, this.state.currentMonth,
            data, this.state.selectedDate)
        let n = 0
        const els = []
        while (n < this.boxes) {
            const obj = all[n]
            let el
            if (obj) {
                el = (
                    <DateCalendarBox
                        key={`date-${n}`}
                        date={obj.dateNumber}
                        boxWidth={this.state.dateBoxWidth}
                        dateFontSize={13}
                        isSelected={obj.isSelected}
                        isWeekend={obj.isWeekend}
                        whosBusy={obj.usersBusy}
                        dateBoxOnPressHandler={this.onDatePress}
                        />
                )
            } else {
                el = (
                    <DateCalendarBox
                        key={`date-${n}`}
                        boxWidth={this.state.dateBoxWidth}
                        dateFontSize={12}
                        isSelected={false}
                        isWeekend={false}
                        whosBusy={[]}
                        dateBoxOnPressHandler={this.onDatePress}
                        />
                )
            }
            els.push(el)
            n += 1
        }

        return els
    }

    containerOnLayout = (event: LayoutChangeEvent) => {
        const dateBoxWidth = event.nativeEvent.layout.width / 7.01
        this.setState({dateBoxWidth})
    }

    public render(): JSX.Element {
        let indicator: ScheduleToUserMap = {}
        if (this.props.data) {
            indicator = flattenTaskSchedule(this.props.data)
        }
        const boxes = this.generateBoxes(indicator)

        return (
            <View style={styles.container}>
                <View style={styles.containerMonthSelection}>
                    <MonthSelection
                        onMonthChange={this.onMonthChange}
                        currentMonth={this.state.currentMonth}
                        currentYear={this.state.currentYear}
                    />
                </View>
                <View style={styles.containerWeekday}>
                    <WeekDayHeader />
                </View>
                <View
                    onLayout={this.containerOnLayout}
                    style={styles.containerDates}>
                    {
                        boxes.map((value) => {
                            return value
                        })
                    }
                </View >
            </View>

        )
    }

    private onMonthChange = (month: Month, year: number) => {
        this.setState({
            currentMonth: month,
            currentYear: year,
            selectedDate: undefined
        })
    }

    private onDatePress = (date: DateNumber) => {
        this.setState({
            selectedDate: date
        })
    }
}
