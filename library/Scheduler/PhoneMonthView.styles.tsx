import { StyleSheet, ViewStyle } from "react-native"
import { Colours } from "../shared"

interface Styles {
    container: ViewStyle
    userSelectionContainer: ViewStyle
    calendarMonthContainer: ViewStyle
    dayScheduleContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        marginTop: 10
    },
    userSelectionContainer: {
        marginBottom: 10
    },
    calendarMonthContainer: {
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colours.Grey300
    },
    dayScheduleContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colours.Grey300
    },
})
