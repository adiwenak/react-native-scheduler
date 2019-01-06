import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Scheduler } from "react-native-scheduler"
import { CalendarMonth } from "react-native-scheduler-calendar/CalendarMonth"
import { allUser, taskSchedules } from "./demoData/data"

enum Language {
  english = "English",
  norway = "Norway"
}

export default class App extends React.Component {
  render() {
    return (
      <Scheduler
        users={allUser}
        tasks={taskSchedules}
      />
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
