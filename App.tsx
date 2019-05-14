import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { allUser, taskSchedules } from "./demoData/data"
import { Scheduler } from "./library"

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