import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colours } from "../shared/colour"

interface Style {
    container: ViewStyle
    containerInner: ViewStyle
    containerTimeline: ViewStyle
    containerScheduleBackground: ViewStyle
    containerSchedule: ViewStyle
    time: TextStyle,
    scheduleBox: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    containerInner: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 50
    },
    containerTimeline: {
        marginTop: -13,
        borderRightWidth: 0.5,
        borderRightColor: Colours.Grey300
    },
    containerScheduleBackground: {
        flex: 1,
    },
    containerSchedule: {
        position: "absolute"
    },
    time: {
        fontSize: 12,
        textAlign: "right",
        color: Colours.Grey800,
        paddingRight: 10,
        paddingTop: 5
    },
    scheduleBox: {
        marginTop: 1,
        marginLeft: 1,
        borderRadius: 5,
    }
})
