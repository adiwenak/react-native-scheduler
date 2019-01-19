import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Scheduler } from "./library"
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