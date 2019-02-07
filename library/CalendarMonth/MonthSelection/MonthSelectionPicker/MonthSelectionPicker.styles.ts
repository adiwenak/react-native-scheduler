import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
  columnContainer: ViewStyle
  monthTitle: ViewStyle
  monthTitleText: TextStyle
  rowContainer: ViewStyle
  individualContainer: ViewStyle
  monthFont: TextStyle
}

export const styles = StyleSheet.create<Style>({
  columnContainer: {
      borderWidth: 1,
      borderColor: "rgb(125,125,125)",
      backgroundColor: "rgb(255,255,255)",
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
      fontSize: 16
  },
  rowContainer: {
      flexDirection: "row"
  },
  individualContainer: {
      margin: "1.5%",
      backgroundColor: "rgb(180,180,180)",
      height: 60,
      width: "22%",
      borderRadius: 5,
      justifyContent: "center"
  },
  monthFont: {
      fontSize: 14,
      textAlign: "center"
  }
})
