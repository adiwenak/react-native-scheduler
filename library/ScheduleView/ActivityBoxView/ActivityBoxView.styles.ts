import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colours } from "../../shared/colour"

interface Style {
    container: ViewStyle
    groupHeading: TextStyle
    title: TextStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        padding: 7,
        marginTop: 1,
        marginLeft: 1,
        borderRadius: 5
    },
    groupHeading: {
        fontSize: 11,
        fontWeight: "500",
        color: Colours.Grey50,
        marginBottom: 5
    },
    title: {
        fontSize: 10,
        color: Colours.Grey50
    }
})
