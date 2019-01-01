import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    outerViewContainer: ViewStyle
    textStyle: TextStyle
}

export default StyleSheet.create<Style>({
    outerViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyle: {
        fontSize: 12,
        flex: 1,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
})
