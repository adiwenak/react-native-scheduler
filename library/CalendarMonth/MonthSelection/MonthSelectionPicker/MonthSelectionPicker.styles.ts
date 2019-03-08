import { StyleSheet, TextStyle, ViewStyle } from "react-native"

import { darkGrey, midGrey } from "../../../shared/colour"

interface Style {
  columnContainer: ViewStyle
  monthTitle: ViewStyle
  monthTitleText: TextStyle
  rowContainer: ViewStyle
  individualContainer: ViewStyle
  monthFont: TextStyle
  outerView: ViewStyle
}

export const styles = StyleSheet.create<Style>({
  columnContainer: {
      borderWidth: 1,
      borderColor: midGrey,
      backgroundColor: "white",
      flexDirection: "column",
      width: "60%",
      position: "absolute",
      top: 40,
      left: "20%",
      borderRadius: 5
  },
  monthTitle: {
      height: 40,
      alignSelf: "center",
      justifyContent: "center"
  },
  monthTitleText: {
      fontSize: 16,
      color: darkGrey
  },
  rowContainer: {
      flexDirection: "row"
  },
  individualContainer: {
      margin: "1.5%",
      backgroundColor: "white",
      height: 60,
      width: "22%",
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
      borderWidth: 1,
      borderColor: "lightgrey"
    }
})
