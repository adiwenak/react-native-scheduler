import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerInner: ViewStyle
    containerTimeline: ViewStyle
    containerScheduleBackground: ViewStyle
    containerSchedule: ViewStyle
    time: TextStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    containerInner: {
        flexDirection: "row"
    },
    containerTimeline: {
        width: 70,
        backgroundColor: "whitesmoke",
        borderRightWidth: 0.5,
        borderRightColor: "gray"
    },
    containerScheduleBackground: {
        flex: 1,
    },
    containerSchedule: {
        position: "absolute",
        left: 70
    },
    time: {
        fontSize: 12,
        textAlign: "right",
        paddingRight: 10,
        paddingTop: 5
    }
})
