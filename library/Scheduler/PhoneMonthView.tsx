import * as React from "react"
import { View } from "react-native"
import { CalendarMonth, TaskAndUser } from "../CalendarMonth"
import { TaskSchedule, UserSelection } from "../shared/model"
import { UserSelect } from "../UsersSelect"
import { styles } from "./PhoneMonthView.styles"

interface PhoneMonthViewProps {
  users: UserSelection[]
  tasks: TaskSchedule
}

interface PhoneMonthViewState {
  taskAndUsers: TaskAndUser[]
}

export class Scheduler extends React.Component<PhoneMonthViewProps, PhoneMonthViewState> {

  constructor(props: PhoneMonthViewProps) {
    super(props)
    const taskAndUsers = this.createTaskAndUser(props.users, props.tasks)
    this.state = {
      taskAndUsers
    }
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.userSelectionContainer}>
          <UserSelect
            data={this.props.users}
            onSelectedEvent={this.onUserChange}
          />
        </View>
        <View style={styles.calendarMonthContainer}>
          <CalendarMonth data={this.state.taskAndUsers} />
        </View>
        <View style={styles.dayScheduleContainer}>
        </View>
      </View>
    )
  }

  private createTaskAndUser = (users: UserSelection[], taskSchedule: TaskSchedule) => {

    const collections: TaskAndUser[] = []

    users.forEach((user: UserSelection) => {
      if (user.isSelected) {
        const tasks = taskSchedule[user.id]
        if (tasks) {
          collections.push({
            user,
            tasks
          })
        }
      }
    })

    return collections
  }

  private onUserChange = (selectedUsers: UserSelection[]) => {
    this.setState({ taskAndUsers: this.createTaskAndUser(selectedUsers, this.props.tasks) })
  }
}
