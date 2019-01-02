import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { CalendarMonth } from "react-native-scheduler-calendar/CalendarMonth"

enum Language {
  english = "English",
  norway = "Norway"
}

export default class App extends React.Component {
  render() {
    const stringBuilder = `${Language.english}
    Hellooooooooooooooooooooooooooooooooo`
    return (
      <View style={styles.container}>
        <Text>{stringBuilder}</Text>
        <CalendarMonth data={[]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
