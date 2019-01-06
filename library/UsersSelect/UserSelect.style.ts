import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
  container: ViewStyle
  backgroundMidle: ViewStyle
  textAlightCenter: TextStyle
  buttonUser: TextStyle
  alightViewWithPadings: ViewStyle
}

export const styles = StyleSheet.create<Style>({
  container: {
  },
  backgroundMidle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 1
  },
  textAlightCenter: {
    textAlign: "center",
    margin: 8,
  },
  buttonUser: {
    textAlign: "center",
    color: "white",
  },
  alightViewWithPadings: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    height: 40
  }
})
