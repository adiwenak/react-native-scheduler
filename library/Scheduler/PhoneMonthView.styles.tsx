import { StyleSheet, ViewStyle } from "react-native"

interface Styles {
    container: ViewStyle
    userSelectionContainer: ViewStyle
    calendarMonthContainer: ViewStyle
    dayScheduleContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        marginTop: 20
    },
    userSelectionContainer: {
        marginBottom: 10
    },
    calendarMonthContainer: {
        flex: 1,
        marginBottom: 20
    },
    dayScheduleContainer: {
        flex: 1
    },
})
