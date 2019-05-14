import * as React from "react"
import { View } from "react-native"
import { categoryActivitiesData } from "./demoData/data"
import { Scheduler } from "./library"
import "./library/extensions/date.extensions"

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 30, marginBottom: 20}}>
        <Scheduler data={categoryActivitiesData} />
      </View>
    )
  }
}
