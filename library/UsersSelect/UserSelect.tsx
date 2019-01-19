
import * as React from "react"
import { Button, ScrollView, View } from "react-native"
import { UserSelection } from "../shared/model"
import { styles } from "./UserSelect.style"

interface ComponentProps {
  data: UserSelection[]
  onSelectedEvent: (selectedUser: UserSelection[]) => void
}

interface SelectedUser {
  [key: number]: UserSelection
}

interface ComponentState {
  selectedUser: SelectedUser
}

export class UserSelect extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    if (props.data) {
      const selectedUser: SelectedUser = {}
      props.data.forEach((value: UserSelection, idx: number) => {
        if (value.isSelected) {
          selectedUser[idx] = props.data[idx]
        }
      })

      this.state = {
        selectedUser
      }
    } else {
      this.state = {
        selectedUser: {}
      }
    }
  }

  renderButtons() {
    if (this.props.data) {
      const newSelectedUser = { ...this.state.selectedUser }
      return this.props.data!.map((x: UserSelection, idx: number) => {
        return <View style={[styles.backgroundMidle]} key={`${idx}`}>
          <View style={{ backgroundColor: newSelectedUser[idx] ? x.colourIndicator : "white" }}>
            <Button
              color={newSelectedUser[idx] ? "white" : "black"}
              title={x.name}
              onPress={() => {
                this.selectUser(x, idx)
              }} />
          </View>
        </View>
      })
    }

    return null
  }

  selectUser = (user: UserSelection, idx: number) => {
    const newSelectedUser = { ...this.state.selectedUser }
    if (newSelectedUser[idx]) {
      delete newSelectedUser[idx]
    } else {
      newSelectedUser[idx] = user
    }

    this.setState({ selectedUser: newSelectedUser })
    const allValues = Object.keys(newSelectedUser).map((key: any) => newSelectedUser[key])
    this.props.onSelectedEvent(allValues)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.alightViewWithPadings}>
          {this.renderButtons()}
        </View>
      </ScrollView>
    )
  }
}
