import * as React from "react"
import {LayoutChangeEvent, ScrollView, Text, View, ViewStyle} from "react-native"
import {styles} from "./GridView.styles"

interface GridViewProps {
  numberOfRows: number
  numberOfColumn: number
  rowHeight: number
  data: GridViewItem[]
  startTime?: number
  endTime?: number
  interval?: ScheduleInterval
}

enum ScheduleInterval {
  fifteen = 15,
  thirty = 30,
  sixty = 60
}

interface GridViewState {
  dateBoxWidth: number
}

export interface GridViewItem {
  info?: {
    title: string
  },
  backgroundColor: string
  startTime: number
  endTime: number
  widthPoint: number
  positionX: number
  position: {
    x: number
    y: number
  }
  dimension: {
    heightPoint: number
    widthPoint: number
  }
}

export class GridView extends React.Component <GridViewProps, GridViewState> {
  constructor(props: GridViewProps) {
    super(props)
    this.state = {
      dateBoxWidth: 0
    }
  }

  render() {
    return (
      <ScrollView
        style={[styles.container]}
        onLayout={this.containerOnLayout}
        showsVerticalScrollIndicator={true}
      >
      <View style={[styles.containerInner, {height: this.props.numberOfRows * this.props.rowHeight}]}>
        <View style={styles.containerTimeline}>
          {this.renderTime()}
        </View>
        <View style={styles.containerScheduleBackground}>
          {this.renderLines()}
        </View>
        <View style={styles.containerSchedule}>
          {
            this.props.data.map(this.mapItemToBox)
          }
        </View>
      </View>
      </ScrollView>
    )
  }

  private renderTime = () => {
    const startTime = this.props.startTime || 7
    const endTime = this.props.endTime || 20
    const height = this.props.rowHeight
    const allElements = []
    const style: ViewStyle = {
      height,
      width: 70,
      borderBottomWidth: 0.5,
      borderBottomColor: "gray"
    }
    for (let i = startTime; i < endTime; i++) {
      const viewBox = (
        <View style={style}>
          <Text style={styles.time}>{`${i}:00`}</Text>
        </View>
      )

      allElements.push(viewBox)
    }

    return (
      <React.Fragment >
        {allElements}
      </React.Fragment >
    )
  }

  private renderLines = () => {
    const startTime = this.props.startTime || 7
    const endTime = this.props.endTime || 20
    const height = this.props.rowHeight
    const count = endTime - startTime
    const allElements = []
    const style: ViewStyle = {
      height,
      borderBottomWidth: 0.5,
      borderBottomColor: "gray"
    }
    for (let i = 0; i < count; i++) {
      const viewBox = (
        <View style={style}>
        </View>
      )

      allElements.push(viewBox)
    }

    return (
      <React.Fragment >
        {allElements}
      </React.Fragment >
    )
  }

  private containerOnLayout = (event: LayoutChangeEvent) => {
    const dateBoxWidth = event.nativeEvent.layout.width / this.props.numberOfColumn
    this.setState({dateBoxWidth})
  }

  private mapItemToBox = (item: GridViewItem, idx: number) => {
    const style: ViewStyle = {
      position: "absolute",
      height: item.dimension.heightPoint * this.props.rowHeight,
      width: item.dimension.widthPoint * this.state.dateBoxWidth,
      top: item.position.y * this.props.rowHeight,
      left: item.position.x * this.state.dateBoxWidth,
      backgroundColor: item.backgroundColor
    }
    return (
      <View key={`view-${idx}`} style={style} />
    )
  }

  private mapItemToScheduleBox = (item: GridViewItem, idx: number) => {
    const startTime = this.props.startTime || 7
    const top = startTime - item.startTime
    const left = item.positionX
    const height = (item.endTime - item.startTime) - this.props.rowHeight
    const width = item.widthPoint

    const style: ViewStyle = {
      position: "absolute",
      backgroundColor: item.backgroundColor,
      height,
      width,
      top,
      left
    }

    return (
      <View key={`view-${idx}`} style={style} />
    )
  }
}
