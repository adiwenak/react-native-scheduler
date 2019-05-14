import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Colours } from "../shared"

interface Style {
  buttonSelected: ViewStyle
  buttonNormal: ViewStyle
  titleNormal: TextStyle
  titleSelected: TextStyle
}

export const styles = StyleSheet.create<Style>({
  buttonNormal: {
    borderRadius: 5,
    backgroundColor: Colours.Grey200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2
  },
  buttonSelected: {

  },
  titleNormal: {
    fontSize: 12,
    color: Colours.BlueGrey700,
    marginHorizontal: 7,
    marginVertical: 5
  },
  titleSelected: {
    color: Colours.Grey50
  }
})
