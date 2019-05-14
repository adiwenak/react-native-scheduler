import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerMonthSelection: ViewStyle
    containerWeekday: ViewStyle
    containerDates: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: "column",
    },
    containerMonthSelection: {
        height: 40,
        marginBottom: 10
    },
    containerWeekday: {
        height: 35
    },
    containerDates: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
