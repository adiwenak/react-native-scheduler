import moment from "moment"
import * as React from "react"
import { View } from "react-native"
import { CalendarMonth } from "../CalendarMonth"
import { CategoryPicker } from "../CategoryPicker"
import { CategoryColour, ScheduleView } from "../ScheduleView"
import { Activity, CategoryActivity, CategorySelection } from "../shared"
import { styles } from "./PhoneMonthView.styles"

interface Props {
  data: CategoryActivity[]
}

interface State {
  filteredData: CategoryActivity[]
  allCategories: CategorySelection[]
  selectedDate?: Date
}

export class Scheduler extends React.PureComponent<Props, State> {

  private static defaultActivities: Activity[] = []

  private colourMap: CategoryColour = {}

  constructor(props: Props) {
    super(props)
    const res = this.generateStateData(props.data)
    this.state = {
      ...res
    }

    for (const obj of props.data) {
      this.colourMap[obj.category.id] = obj.category.colour
    }
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.userSelectionContainer}>
          <CategoryPicker
            data={this.state.allCategories}
            onSelectedEvent={this.onCategorySelectionChange}
          />
        </View>
        <View style={styles.calendarMonthContainer}>
          <CalendarMonth
            data={this.state.filteredData}
            onDateSelected={this.onDateSelected}
          />
        </View>
        <View style={styles.dayScheduleContainer}>
          <ScheduleView
            rowHeight={80}
            startTime={7}
            endTime={23}
            data={this.filterScheduledData()}
            colourMap={this.colourMap}
          />
        </View>
      </View>
    )
  }

  private generateStateData = (data: CategoryActivity[]) => {
    const filteredData: CategoryActivity[] = []
    const allCategories: CategorySelection[] = []
    for (const obj of data) {
      this.colourMap[obj.category.id] = obj.category.colour
      if (obj.category.isSelected) {
        filteredData.push(obj)
      }
      allCategories.push(obj.category)
    }

    return { filteredData, allCategories }
  }

  private filterScheduledData = (): Activity[] => {
    if (!this.state.selectedDate) {
      return Scheduler.defaultActivities
    }

    let allActivities: Activity[] = []
    for (const obj of this.state.filteredData) {
      allActivities = [...allActivities, ...obj.tasks]
    }

    const today = moment(this.state.selectedDate)
    const fromDate = today.set({hour: 0, minute: 0, second: 0, millisecond: 0}).toDate().getTime()
    const toDate = today.set({hour: 23, minute: 59, second: 59, millisecond: 0}).toDate().getTime()

    return allActivities.filter(
      (val) => val.startTime.getTime() > fromDate && val.startTime.getTime() <= toDate)
  }

  private onDateSelected = (date: Date) => {
    this.setState({selectedDate: date})
  }

  private onCategorySelectionChange = (selectedCategoriesIndex: number[]) => {
    const filteredData: CategoryActivity[] = []
    for (const idx of selectedCategoriesIndex) {
      filteredData.push(this.props.data[idx])
    }

    this.setState({ filteredData })
  }
}
