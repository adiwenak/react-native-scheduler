import * as React from "react"
import { Text, View } from "react-native"
import styles from "./WeekDayHeader.styles"

export const WeekDayHeader = () => {
    const weekDays: string[] = ["S", "M", "T", "W", "T", "F", "S"]

    const weekDayHandler = (day: string, index: number) => (
        <Text key={index} style={styles.textStyle}>
            {day}
        </Text>
    )

    return (
        <View style={styles.outerViewContainer}>
            {weekDays.map(weekDayHandler)}
        </View>
    )
}
