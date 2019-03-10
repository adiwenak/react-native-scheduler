import moment from "moment"
import * as React from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

import { oceanBlue } from "../../../shared/colour"
import { Month } from "../../../shared/model"
import { styles } from "./MonthSelectionPicker.styles"

interface ComponentState {
    showYearView: boolean
}

interface ComponentProps {
    onMonthChangeFromPicker: (month: Month) => void
    onYearChangeFromPicker: (year: number) => void
    currentMonth: Month
    currentYear: number
}

export class MonthSelectionPicker extends React.Component<ComponentProps, ComponentState> {

    private monthsRenderRows = [
        [
            { month: "Jan", monthNum: Month.January },
            { month: "Feb", monthNum: Month.February },
            { month: "Mar", monthNum: Month.March },
            { month: "Apr", monthNum: Month.April }
        ], [
            { month: "May", monthNum: Month.May },
            { month: "Jun", monthNum: Month.June },
            { month: "Jul", monthNum: Month.July },
            { month: "Aug", monthNum: Month.August }
        ], [
            { month: "Sep", monthNum: Month.September },
            { month: "Oct", monthNum: Month.October },
            { month: "Nov", monthNum: Month.November },
            { month: "Dec", monthNum: Month.December }
        ]
    ]

    private yearList: number[] = []
    private yearListChunked: any[] = []
    private firstYearToRender = 1900
    private lastYearToRender = moment().year() + 2

    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            showYearView: false
        }

        for (let i = this.firstYearToRender; i <= this.lastYearToRender; i++) {
            this.yearList.push(i)
        }

        for (let i = this.yearList.length, j = 4; i > 0; i -= j) {
            if (i - j > 0) {
                this.yearListChunked.push(this.yearList.slice(i - j, i).reverse())
            } else {
                this.yearListChunked.push(this.yearList.slice(0, i).reverse())
            }
        }
    }

    public renderYearList = () => {
        const years = this.yearListChunked.map((array: any[]) =>
            <View
                key={this.yearListChunked.indexOf(array)}
                style={{flexDirection: "row"}}
            >
                {array.map((year: number) => (
                    <TouchableOpacity
                        key={year}
                        accessibilityLabel={year.toString()}
                        style={[styles.individualContainer,
                            this.props.currentYear === year ?
                            { backgroundColor: oceanBlue } : null ]}
                        onPress={() => {
                            this.props.onYearChangeFromPicker(year)
                        }}
                    >
                        <Text
                            style={[styles.monthFont, this.props.currentYear === year ? { color: "white" } : null]}
                        >
                            {year}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )

        return (
            <ScrollView>
                {years}
            </ScrollView>
        )
    }

    public renderMonthList = () =>
        this.monthsRenderRows.map((array: any[]) => (
            <View key={this.monthsRenderRows.indexOf(array)} style={styles.rowContainer}>
                {array.map((monthObj: any) => (
                    <TouchableOpacity
                        key={monthObj.month}
                        accessibilityLabel={monthObj.month}
                        style={[styles.individualContainer,
                            this.props.currentMonth === monthObj.monthNum ?
                            { backgroundColor: oceanBlue } : null ]}
                        onPress={() => {
                            this.props.onMonthChangeFromPicker(monthObj.monthNum)
                        }}
                    >
                        <Text style={[styles.monthFont, this.props.currentMonth === monthObj.monthNum ?
                        { color: "white" } : null]}>
                            {monthObj.month}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        ))

    public render(): JSX.Element {
        return (
            <View style={styles.outerView}>
                <TouchableOpacity
                    style={styles.monthTitle}
                    accessibilityLabel={"month-year-btn"}
                    onPress={() => this.setState({ showYearView: !this.state.showYearView })}
                >
                    <Text style={styles.monthTitleText}>{this.state.showYearView ? "Year" : "Month"}</Text>
                </TouchableOpacity>
                {this.state.showYearView ? this.renderYearList() : this.renderMonthList()}
            </View>
        )
    }
}
