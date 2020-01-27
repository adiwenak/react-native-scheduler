import * as React from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"

import { Colours } from "../../../shared/colour"
import { Month } from "../../../shared/model"
import { styles } from "./MonthSelectionPicker.styles"

interface MonthElement {
  month: string
  monthNum: Month
}

interface ComponentState {
  showYearView: boolean
}

interface ComponentProps {
  onMonthChangeFromPicker: (month: Month) => void
  onYearChangeFromPicker: (year: number) => void
  currentMonth: Month
  currentYear: number
  startYear: number
  endYear: number
}

export class MonthSelectionPicker extends React.Component<ComponentProps, ComponentState> {

  private static monthElements: MonthElement[] = [
    { month: "Jan", monthNum: Month.January },
    { month: "Feb", monthNum: Month.February },
    { month: "Mar", monthNum: Month.March },
    { month: "Apr", monthNum: Month.April },
    { month: "May", monthNum: Month.May },
    { month: "Jun", monthNum: Month.June },
    { month: "Jul", monthNum: Month.July },
    { month: "Aug", monthNum: Month.August },
    { month: "Sep", monthNum: Month.September },
    { month: "Oct", monthNum: Month.October },
    { month: "Nov", monthNum: Month.November },
    { month: "Dec", monthNum: Month.December }
  ]

  private yearList: number[] = []

  constructor(props: ComponentProps) {
    super(props)
    this.state = {
      showYearView: false
    }

    for (let i = this.props.endYear; i >= this.props.startYear; i--) {
      this.yearList.push(i)
    }
  }

  public render(): JSX.Element {
    return (
      <View style={styles.outerView}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.titleButton}
            accessibilityLabel={"month-year-btn"}
            onPress={() => this.setState({ showYearView: !this.state.showYearView })}
          >
            <Text style={styles.titleText}>{this.state.showYearView ? "Year" : "Month"}</Text>
          </TouchableOpacity>
        </View>
        {this.state.showYearView ? this.renderYearList() : this.renderMonthList()}
      </View>
    )
  }

  private onYearSelected = (item: number) => {
    this.setState({ showYearView: !this.state.showYearView })
    this.props.onYearChangeFromPicker(item)
  }

  private renderYearList = () => {
    return (
      <FlatList
        data={this.yearList}
        keyExtractor={(_, index) => `${index}`}
        renderItem={this.renderYearListItem}
        numColumns={4}
        extraData={this.props.currentYear}
      />
    )
  }

  private renderYearListItem = ({ item }: { item: number }) => (
    <View style={styles.containerBox}>
      <TouchableOpacity
        accessibilityLabel={`year-${item.toString()}`}
        style={[styles.individualContainer,
        this.props.currentYear === item ?
          { backgroundColor: Colours.OceanBlue } : null]}
        onPress={() => this.onYearSelected(item)}
      >
        <Text
          style={[styles.monthFont, this.props.currentYear === item ? { color: "white" } : null]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  )

  private renderMonthList = () => {
    return (
      <View style={styles.containerBox}>
        {MonthSelectionPicker.monthElements.map((monthObj: MonthElement) => (
          <TouchableOpacity
            key={monthObj.month}
            accessibilityLabel={monthObj.month}
            style={[styles.individualContainer,
            this.props.currentMonth === monthObj.monthNum ?
              { backgroundColor: Colours.OceanBlue } : null]}
            onPress={() => {
              this.props.onMonthChangeFromPicker(monthObj.monthNum)
            }}
          >
            <Text style={[styles.monthFont, this.props.currentMonth === monthObj.monthNum ?
              { color: "white" } : null]}>
              {monthObj.month}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}
