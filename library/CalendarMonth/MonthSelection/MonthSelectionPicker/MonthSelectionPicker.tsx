import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { oceanBlue } from "../../../shared/colour"
import { Month } from "../../../shared/model"
import { styles } from "./MonthSelectionPicker.styles"

interface ComponentProps {
    onMonthChangeFromPicker: (month: Month) => void
    dismissMonthSelectionPicker: () => void
    currentMonth: Month
}

export class MonthSelectionPicker extends React.Component<ComponentProps> {
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

    public render(): JSX.Element {
        return (
            <View style={styles.outerView}>
                <View style={styles.monthTitle}>
                    <Text style={styles.monthTitleText}>Month</Text>
                </View>
                { this.monthsRenderRows.map((array: any[]) => (
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
                                    this.props.dismissMonthSelectionPicker()
                                }}
                            >
                                <Text style={[styles.monthFont, this.props.currentMonth === monthObj.monthNum ?
                                { color: "white" } : null]}>
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
