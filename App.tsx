import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { allUser, taskSchedules } from "./demoData/data"
import { Scheduler } from "./library"
import { GridView, GridViewItem } from "./library/GridView/GridView"

enum Language {
  english = "English",
  norway = "Norway"
}

const gridItems: GridViewItem[] = [
  {
    backgroundColor: "red",
    position: {
      x: 0,
      y: 1
    },
    dimension: {
      heightPoint: 1,
      widthPoint: 1
    }
  },
  {
    backgroundColor: "blue",
    position: {
      x: 3,
      y: 1
    },
    dimension: {
      heightPoint: 1,
      widthPoint: 2
    }
  },
  {
    backgroundColor: "yellow",
    position: {
      x: 2,
      y: 3
    },
    dimension: {
      heightPoint: 2,
      widthPoint: 2
    }
  },
  {
    backgroundColor: "yellow",
    position: {
      x: 1,
      y: 20
    },
    dimension: {
      heightPoint: 2,
      widthPoint: 2
    }
  },
  {
    backgroundColor: "blue",
    position: {
      x: 2,
      y: 8
    },
    dimension: {
      heightPoint: 1,
      widthPoint: 2
    }
  }
]
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <GridView
          numberOfRows={80}
          numberOfColumn={5}
          rowHeight={80}
          data={gridItems}
        />
      </View>
      // <Scheduler
      //   users={allUser}
      //   tasks={taskSchedules}
      // />
    )
  }
}
