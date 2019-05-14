
import * as React from "react"
import { ScrollView, View } from "react-native"
import { ButtonToggle } from "../ButtonToggle"
import { Category, CategorySelection } from "../shared"
import { styles } from "./CategoryPicker.style"

interface ComponentProps {
  data: CategorySelection[]
  onSelectedEvent: (selectedCategoriesIndex: number[]) => void
}

interface SelectedCategory {
  [key: number]: Category
}

interface ComponentState {
  selectedCategory: SelectedCategory
}

export class CategoryPicker extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props)
    if (props.data) {
      const selectedCategory: SelectedCategory = {}
      props.data.forEach((value: CategorySelection, idx: number) => {
        if (value.isSelected) {
          selectedCategory[idx] = props.data[idx]
        }
      })

      this.state = {
        selectedCategory
      }
    } else {
      this.state = {
        selectedCategory: {}
      }
    }
  }

  renderButtons() {
    if (this.props.data) {
      const newSelectedUser = { ...this.state.selectedCategory }
      return this.props.data.map((x: CategorySelection, idx: number) => {
        const selected = newSelectedUser[idx] != null || newSelectedUser[idx] !== undefined
        return <ButtonToggle
            key={`${idx}`}
            title={x.name}
            selectedColour={x.colour}
            selected={selected}
            onPress={() => {
              this.selectCategory(idx)
            }}
          />
      })
    }

    return null
  }

  selectCategory = (idx: number) => {
    const newSelectedCategory = { ...this.state.selectedCategory }
    if (newSelectedCategory[idx]) {
      delete newSelectedCategory[idx]
    } else {
      newSelectedCategory[idx] = this.props.data[idx]
    }

    this.setState({ selectedCategory: newSelectedCategory })
    const allSelected = Object.keys(newSelectedCategory).map((key: string) => parseInt(key))
    this.props.onSelectedEvent(allSelected)
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.alightViewWithPadings}>
          {this.renderButtons()}
        </View>
      </ScrollView>
    )
  }
}
