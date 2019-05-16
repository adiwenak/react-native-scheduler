import * as React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "./ButtonToggle.styles"

interface Props {
  selected: boolean
  title: string
  selectedColour: string
  onPress: () => void
}

interface State {
  selected: boolean
}

export class ButtonToggle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selected: props.selected
    }
  }

  public render() {
    const buttonStyle = this.props.selected ?
      [styles.buttonNormal, { backgroundColor: this.props.selectedColour }] : [styles.buttonNormal]
    const titleStyle = this.props.selected ?
      [styles.titleNormal, styles.titleSelected] : [styles.titleNormal]

    return (
      <TouchableOpacity
        testID={"Button-Toggle"}
        style={buttonStyle}
        onPress={this.buttonPress}>
        <Text
          style={titleStyle}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }

  private buttonPress = () => {
    this.setState({ selected: !this.state.selected })
    this.props.onPress()
  }
}
