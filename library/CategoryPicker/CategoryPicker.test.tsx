import { shallow } from "enzyme"
import * as React from "react"
import { cat1, cat2, userSelectionCollection } from "./__stubsData/data"
import { CategoryPicker } from "./CategoryPicker"

describe("<UserSelect />", () => {
  it("should render with default selected user", () => {
    const userdata1 = {
      ...cat1,
      isSelected: true
    }

    const userdata2 = {
      ...cat2,
      isSelected: true
    }

    const userSelections = [userdata1, userdata2]

    const component = shallow(<CategoryPicker
      data={userSelections}
      onSelectedEvent={jest.fn()}
    />).instance() as CategoryPicker

    expect(component.state.selectedCategory[0]).toBeTruthy()
    expect(component.state.selectedCategory[1]).toBeTruthy()

  })

  describe("selectUser()", () => {
    const userSelections = [...userSelectionCollection]
    const props = {
      data: userSelections,
      onSelectedEvent: jest.fn()
    }

    it("should add user to component state", () => {
      const idx = 0
      const component = shallow(<CategoryPicker {...props} />).instance() as CategoryPicker
      component.selectCategory(idx)
      expect(component.state.selectedCategory[idx]).toBeTruthy()
    })

    it("should remove user from component state when already selected", () => {
      const idx = 0
      const component = shallow(<CategoryPicker {...props} />).instance() as CategoryPicker

      component.selectCategory(idx)

      expect(component.state.selectedCategory[idx]).toBeTruthy()

      component.selectCategory(idx)

      expect(component.state.selectedCategory[idx]).toBeFalsy()
    })
  })
})
