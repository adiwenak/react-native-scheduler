import moment from "moment"
import * as React from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"

import { oceanBlue } from "../../../shared/colour"
import { Month } from "../../../shared/model"
import { styles } from "./MonthSelectionPicker.styles"

interface MonthElement {
    month: string
    monthNum: Month
}

interface ComponentState {
    showYearView: boolean
}

interface ComponentProps {
    onMonthChangeFromPicker: (month: Month) => void
    onYearChangeFromPicker: (year: number) => void
    currentMonth: Month
    currentYear: number
    startYear: number
    endYear: number
}

export class MonthSelectionPicker extends React.Component<ComponentProps, ComponentState> {

    private monthElements: MonthElement[] = [
        { month: "Jan", monthNum: Month.January },
        { month: "Feb", monthNum: Month.February },
        { month: "Mar", monthNum: Month.March },
        { month: "Apr", monthNum: Month.April },
        { month: "May", monthNum: Month.May },
        { month: "Jun", monthNum: Month.June },
        { month: "Jul", monthNum: Month.July },
        { month: "Aug", monthNum: Month.August },
        { month: "Sep", monthNum: Month.September },
        { month: "Oct", monthNum: Month.October },
        { month: "Nov", monthNum: Month.November },
        { month: "Dec", monthNum: Month.December }
    ]

    private yearList: number[] = []

    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            showYearView: false
        }

        for (let i = this.props.endYear; i >= this.props.startYear; i--) {
            this.yearList.push(i)
        }
    }

    public renderYearList = () => {
        return (
            <FlatList
                data={this.yearList}
                keyExtractor={(_, index) => `${index}`}
                renderItem={this.renderYearListItem}
                numColumns={4}
                extraData={this.props.currentYear}
            />
        )
    }

    public renderYearListItem = ({item}: any) => (
        <TouchableOpacity
            accessibilityLabel={item.toString()}
            style={[styles.individualContainer,
                this.props.currentYear === item ?
                { backgroundColor: oceanBlue } : null ]}
            onPress={() => {
                this.props.onYearChangeFromPicker(item)
            }}
        >
            <Text
                style={[styles.monthFont, this.props.currentYear === item ? { color: "white" } : null]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    )

    public renderMonthList = () => {
        return (
            <View style={styles.containerBox}>
                {this.monthElements.map((monthObj: MonthElement) => (
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
        )
    }

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
