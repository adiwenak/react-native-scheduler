import moment from "moment"
import * as React from "react"
import { Component } from "react"
import { Image, Text, TouchableHighlight, View } from "react-native"
import { Month } from "../../shared/model"
import { styles } from "./MonthSelection.styles"

enum MonthAsString {
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
}

export interface MonthSelectionState {
    currentMonth: Month
    currentYear: number
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
            currentYear: props.currentYear || moment().year()
        }
    }

    render() {
        const title = `${this.allMonths[this.state.currentMonth]} ${this.state.currentYear}`
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.handlePreviousButtonPress}
                    accessibilityLabel={"button-month-prev"}
                    style={[styles.containerButton, styles.containerButtonLeft]}
                >
                    <Image
                        source={require("./asset/arrow-back.png")} resizeMode={"center"}
                        style={styles.button}
                    />
                </TouchableHighlight>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.handleNextButtonPress}
                    accessibilityLabel={"button-month-next"}
                    style={[styles.containerButton, styles.containerButtonRight]}
                >
                    <Image
                        source={require("./asset/arrow-forward.png")} resizeMode={"center"}
                        style={styles.button}
                    />
                </TouchableHighlight>
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
