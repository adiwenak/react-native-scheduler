import { StyleSheet, ViewStyle } from "react-native"

interface Style {
    touchableContainer: ViewStyle
}

export default StyleSheet.create<Style>({
    touchableContainer: {
        flexDirection: "column"
    }
})
