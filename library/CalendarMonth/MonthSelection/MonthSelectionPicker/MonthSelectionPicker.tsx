import * as React from "react"
import { Component } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { Month } from "../../../shared/model"
import { styles } from "./MonthSelectionPicker.styles"

interface Props {
    onPressHandler: () => void
    onMonthChangeFromPicker: (month: Month) => void
}

interface State {
    selected: string
}

export class MonthSelectionPicker extends Component<Props, State> {

    public constructor(props: Props) {
        super(props)
        this.state = {
            selected: ""
        }
    }

    public render() {

        const monthsRenderRows = [
            [
                { month: "Jan", monthNum: Month.January },
                { month: "Feb", monthNum: Month.February },
                { month: "Mar", monthNum: Month.March },
                { month: "Apr", monthNum: Month.April },
            ], [
                { month: "May", monthNum: Month.May },
                { month: "Jun", monthNum: Month.June },
                { month: "Jul", monthNum: Month.July },
                { month: "Aug", monthNum: Month.August },
            ], [
                { month: "Sep", monthNum: Month.September },
                { month: "Oct", monthNum: Month.October },
                { month: "Nov", monthNum: Month.November },
                { month: "Dec", monthNum: Month.December },
            ]
        ]

        return (
            <View style={styles.columnContainer}>
            <View style={styles.monthTitle}>
                <Text style={styles.monthTitleText}>Month</Text>
            </View>
                { monthsRenderRows.map((array: any[]) => (
                    <View key={monthsRenderRows.indexOf(array)} style={styles.rowContainer}>
                        {array.map((monthObj: any) => (
                            <TouchableOpacity
                                key={monthObj.month}
                                style={[styles.individualContainer]}
                                onPress={
                                    () => {
                                        this.setState({ selected: monthObj.month})
                                        this.props.onPressHandler()
                                        this.props.onMonthChangeFromPicker(monthObj.monthNum)
                                    }
                                }
                            >
                                <Text style={styles.monthFont}>
                                    {monthObj.month}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        )
    }
}
