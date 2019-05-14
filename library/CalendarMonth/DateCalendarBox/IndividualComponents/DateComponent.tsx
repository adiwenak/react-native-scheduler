import * as React from "react"
import { Text, View } from "react-native"
import { DateNumber } from "../../../shared/model"
import styles from "./DateComponent.style"

interface DateComponentProps {
  date?: DateNumber
  isSelected: boolean
  isWeekend: boolean
  dateFontSize: number
  dateComponentHeight: number
}

const getDateTitle = (props: DateComponentProps) => {
  const dateTitle = props.date ? `${props.date}` : ""
  let dateStyle = props.isWeekend ? styles.textStyleWeekend : styles.textStyleWeekday
  if (props.isSelected) {
    dateStyle = styles.titleSelected
  }
  return (
    <Text style={[styles.title, dateStyle, { fontSize: props.dateFontSize }]}>
      {dateTitle}
    </Text>
  )
}

const getSelectedDateTitle = (props: DateComponentProps) => {
  const circleSize = props.dateComponentHeight / 1.2
  const borderRadiusSize = circleSize / 2

  return (
    <View style={[
      styles.selectedColor,
      { height: circleSize, width: circleSize, borderRadius: borderRadiusSize }
    ]}>
      <View style={styles.circleView}>
        {getDateTitle(props)}
      </View>
    </View>
  )
}

export const DateComponent = (props: DateComponentProps) => {
  return (
    <View style={styles.topOuterView}>
      {props.isSelected ? getSelectedDateTitle(props) : getDateTitle(props)}
    </View>
  )
}
