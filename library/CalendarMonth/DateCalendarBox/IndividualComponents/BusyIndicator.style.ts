import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    bottomOuterView: ViewStyle
}

export default StyleSheet.create<Style>({
    bottomOuterView: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    }
})
