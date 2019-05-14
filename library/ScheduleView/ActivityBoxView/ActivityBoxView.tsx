import * as React from "react"
import { Text, View, ViewStyle } from "react-native"
import { styles } from "./ActivityBoxView.styles"

interface Props {
  style: ViewStyle
  title: string
  group?: string
}

export const ActivityBoxView = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.groupHeading}>{props.group}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}
