import * as React from "react"
import { LayoutChangeEvent, ScrollView, Text, View, ViewStyle } from "react-native"
import { Activity } from "../shared"
import { Colours } from "../shared/colour"
import { ActivityBoxView } from "./ActivityBoxView"
import { activityToGridViewItem } from "./ScheduleView.helper"
import { GridViewItem, GroupIdentifierToColour } from "./ScheduleView.model"
import { styles } from "./ScheduleView.styles"

enum ScheduleInterval {
  fifteen = 15,
  thirty = 30,
  sixty = 60
}

interface Props {
  rowHeight: number
  data: Activity[]
  colourMap: GroupIdentifierToColour
  startTime: number
  endTime: number
  interval?: ScheduleInterval
}

interface State {
  dateBoxWidth: number
  activityItems: GridViewItem[]
  numberOfColumn: number
}

export class ScheduleView extends React.PureComponent<Props, State> {
  private timeLineWidth = 60
  private scheduleContainerWidth = 0

  constructor(props: Props) {
    super(props)

    let activityItems: GridViewItem[] = []
    let numberOfColumn = 0

    if (props.data && props.data.length > 0) {
      const result = activityToGridViewItem(props.data, props.colourMap)
      numberOfColumn = result.longestOverlap
      activityItems = result.items
    }

    this.state = {
      dateBoxWidth: 0,
      activityItems,
      numberOfColumn
    }

  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.data !== prevProps.data) {
      const {
        items: activityItems,
        longestOverlap: numberOfColumn } = activityToGridViewItem(this.props.data, this.props.colourMap)
      const dateBoxWidth = this.scheduleContainerWidth / numberOfColumn
      this.setState({activityItems, numberOfColumn, dateBoxWidth})
    }
  }

  render() {
    const numberOfRows = this.props.endTime - this.props.startTime + 1
    return (
      <ScrollView
        style={[styles.container]}
        onLayout={this.containerOnLayout}
        showsVerticalScrollIndicator={true}
      >
        <View style={[styles.containerInner, { height: numberOfRows * this.props.rowHeight }]}>
          <View style={[styles.containerTimeline, { width: this.timeLineWidth }]}>
            {this.renderTime()}
          </View>
          <View style={styles.containerScheduleBackground}>
            {this.renderLines()}
          </View>
          <View style={[styles.containerSchedule, { left: this.timeLineWidth }]}>
            {
              this.state.activityItems.map(this.mapItemToBox)
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
      width: this.timeLineWidth,
      marginRight: 15
    }
    for (let i = startTime; i <= endTime; i++) {
      const viewBox = (
        <View key={`time-${i}`} style={style}>
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
      marginLeft: -7,
      borderColor: Colours.Grey300
    }

    const firstBoxStyle: ViewStyle = {
      ...style,
      borderTopWidth: 0.5
    }

    let firstBox = true
    for (let i = 0; i < count; i++) {
      const viewBox = (
        <View key={`line-${i}`} style={firstBox ? firstBoxStyle : style} />
      )

      allElements.push(viewBox)
      firstBox = false
    }

    return (
      <React.Fragment >
        {allElements}
      </React.Fragment >
    )
  }

  private recalculateDateBoxWidth = () => {
    const dateBoxWidth = this.scheduleContainerWidth / this.state.numberOfColumn
    this.setState({ dateBoxWidth })
  }

  private containerOnLayout = (event: LayoutChangeEvent) => {
    this.scheduleContainerWidth = event.nativeEvent.layout.width - this.timeLineWidth
    this.recalculateDateBoxWidth()
  }

  private mapItemToBox = (item: GridViewItem, idx: number) => {
    const style: ViewStyle = {
      position: "absolute",
      height: (item.dimension.height * this.props.rowHeight) - 3,
      width: (item.dimension.width * this.state.dateBoxWidth) - 1,
      top: item.position.y * this.props.rowHeight,
      left: item.position.x * this.state.dateBoxWidth,
      backgroundColor: item.backgroundColor
    }
    return (
      <ActivityBoxView
        key={`view-${idx}`}
        style={style}
        group={item.category}
        title={item.name}
      />
    )
  }
}
