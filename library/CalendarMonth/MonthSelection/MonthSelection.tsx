import moment from "moment"
import * as React from "react"
import { Component } from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { Month } from "../../shared/model"
import { styles } from "./MonthSelection.styles"
import { MonthSelectionPicker } from "./MonthSelectionPicker"

export enum MonthAsString {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

export interface MonthSelectionProps {
    onMonthChange?: (month: Month, year: number) => void
    currentYear?: number
    currentMonth?: Month
    onMonthTitleTouch?: () => void
}

export interface MonthSelectionState {
    currentMonth: Month
    currentYear: number
    showMonthPicker: boolean
}

export class MonthSelection extends Component<MonthSelectionProps, MonthSelectionState> {
    private allMonths: MonthAsString[] = [MonthAsString.January, MonthAsString.February,
        MonthAsString.March, MonthAsString.April, MonthAsString.May,
        MonthAsString.June, MonthAsString.July, MonthAsString.August,
        MonthAsString.September, MonthAsString.October, MonthAsString.November, MonthAsString.December]

    constructor(props: MonthSelectionProps) {
        super(props)
        this.state = {
            currentMonth: props.currentMonth || Month.January,
            currentYear: props.currentYear || moment().year(),
            showMonthPicker: false
        }
    }

    public componentDidUpdate(prevProps: any) {
        const { currentMonth } = this.props
        const { currentMonth: prevMonth } = prevProps

        if ( this.props.currentMonth !== undefined && currentMonth !== prevMonth ) {
            this.setState({ currentMonth: this.props.currentMonth })
        }
    }

    render() {
        const title = `${this.allMonths[this.state.currentMonth]} ${this.state.currentYear}`
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.handlePreviousButtonPress}
                    accessibilityLabel={"button-month-prev"}
                    style={[styles.containerButton, styles.containerButtonLeft]}
                >
                    <Image
                        source={require("./asset/arrow-back.png")} resizeMode={"center"}
                        style={styles.button}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    accessibilityLabel={"date-display"}
                    style={styles.containerTitle}
                    onPress={() => this.setState({ showMonthPicker: !this.state.showMonthPicker })}
                >
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleNextButtonPress}
                    accessibilityLabel={"button-month-next"}
                    style={[styles.containerButton, styles.containerButtonRight]}
                >
                    <Image
                        source={require("./asset/arrow-forward.png")} resizeMode={"center"}
                        style={styles.button}
                    />
                </TouchableOpacity>
                {this.state.showMonthPicker ? (
                    <View style={[styles.monthSelectionPicker, { left: Dimensions.get("window").width / 2 - 100 }]}>
                        <MonthSelectionPicker
                            onMonthChangeFromPicker={
                                (month: Month) => {
                                    this.setState({ currentMonth: month }),
                                    this.onMonthChange(month, this.state.currentYear)
                                }
                            }
                            onYearChangeFromPicker={
                                (year: number) => {
                                    this.setState({ currentYear: year }),
                                    this.onMonthChange(this.state.currentMonth, year)
                                }
                            }
                            currentMonth={this.state.currentMonth}
                            currentYear={this.state.currentYear}
                            startYear={1900}
                        />
                    </View>) : null
                }
            </View >
        )
    }

    private onMonthChange = (month: Month, year: number) => {
        if (this.props.onMonthChange) {
            this.props.onMonthChange(month, year)
        }
    }

    private handlePreviousButtonPress = () => {
        let { currentMonth, currentYear } = this.state
        if (currentMonth > 0) {
            currentMonth -= 1
        } else {
            currentYear -= 1
            currentMonth = Month.December
        }

        this.setState({
            currentMonth,
            currentYear
        })

        this.onMonthChange(currentMonth, currentYear)
    }

    private handleNextButtonPress = () => {
        let { currentMonth, currentYear } = this.state
        if (currentMonth < this.allMonths.length - 1) {
            currentMonth += 1
        } else {
            currentYear += 1
            currentMonth = Month.January
        }

        this.setState({
            currentMonth,
            currentYear
        })

        this.onMonthChange(currentMonth, currentYear)
    }
}
