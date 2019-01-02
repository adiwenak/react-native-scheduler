import * as React from "react"
import { Component } from "react"
import { TouchableOpacity } from "react-native"
import { DateNumber, User } from "../../shared/model"
import styles from "./DateCalendarBox.style"
import { BusyIndicator, DateComponent } from "./IndividualComponents"

interface ComponentProps {
  date?: DateNumber
  isSelected: boolean
  isWeekend: boolean
  boxWidth: number
  dateFontSize: number
  whosBusy: User[]
  dateBoxOnPressHandler: (date: DateNumber) => void
}

export class DateCalendarBox extends Component<ComponentProps> {
  public handleOnPress = () => {
    if (this.props.date) {
      this.props.dateBoxOnPressHandler(this.props.date)
    }
  }

  public render() {
    const dateComponentHeight = this.props.boxWidth * 0.6
    const busyIndicatorHeight = this.props.boxWidth * 0.2
    return (
      <TouchableOpacity
        style={[
          styles.touchableContainer,
          { height: this.props.boxWidth * 0.8, width: this.props.boxWidth }]}
        onPress={this.handleOnPress}
      >
        <DateComponent
          date={this.props.date}
          isWeekend={this.props.isWeekend}
          isSelected={this.props.isSelected}
          dateFontSize={this.props.dateFontSize}
          dateComponentHeight={dateComponentHeight}
        />
        <BusyIndicator whosBusy={this.props.whosBusy} height={busyIndicatorHeight} />
      </TouchableOpacity>
    )
  }
}
