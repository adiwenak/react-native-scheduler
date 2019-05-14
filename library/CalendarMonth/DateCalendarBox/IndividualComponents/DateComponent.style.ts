import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colours } from "../../../shared"

interface Style {
    topOuterView: ViewStyle
    selectedColor: ViewStyle
    circleView: ViewStyle
    title: TextStyle
    textStyleWeekday: TextStyle
    textStyleWeekend: TextStyle
    titleSelected: TextStyle
}

export default StyleSheet.create({
    topOuterView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedColor: {
        backgroundColor: Colours.Zest
    },
    circleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "400",
        fontSize: 14
    },
    textStyleWeekday: {
        color: "#323A48"
    },
    textStyleWeekend: {
        color: "#768398"
    },
    titleSelected: {
        color: "white"
    }
})
