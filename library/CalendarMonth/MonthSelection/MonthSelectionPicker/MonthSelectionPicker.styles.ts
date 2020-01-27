import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"

import { Colours } from "../../../shared/colour"

interface Style {
  titleContainer: ViewStyle
  titleButton: ViewStyle
  titleText: TextStyle
  containerBox: ViewStyle
  individualContainer: ViewStyle
  monthFont: TextStyle
  outerView: ViewStyle
}

export const styles = StyleSheet.create<Style>({
  titleContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: Colours.Grey300,
    height: 40
  },
  titleButton: {
    height: 40,
    alignSelf: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 16,
    color: Colours.LightBlue,
  },
  containerBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colours.Grey50
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
    color: Colours.Grey800
  },
  outerView: {
    flexDirection: "column",
    width: 200,
    height: 240,
    backgroundColor: Colours.Grey50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colours.Grey300
  }
})
