import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { darkGrey, midGrey } from "../../../shared/colour"

interface Style {
  monthTitle: ViewStyle
  monthTitleText: TextStyle
  containerBox: ViewStyle
  individualContainer: ViewStyle
  monthFont: TextStyle
  outerView: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    monthTitle: {
        height: 40,
        alignSelf: "center",
        justifyContent: "center"
    },
    monthTitleText: {
        fontSize: 16,
        color: darkGrey
    },
    containerBox: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    individualContainer: {
        margin: 2,
        backgroundColor: "white",
        height: 60,
        width: 45,
        borderRadius: 5,
        justifyContent: "center"
    },
    monthFont: {
        fontSize: 14,
        textAlign: "center",
        color: darkGrey
    },
    outerView: {
        flexDirection: "column",
        width: 200,
        height: 240,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "lightgrey"
    }
})
