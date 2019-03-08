import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerWeekday: ViewStyle
    containerDates: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: "column",
    },
    containerWeekday: {
        height: 35
    },
    containerDates: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
