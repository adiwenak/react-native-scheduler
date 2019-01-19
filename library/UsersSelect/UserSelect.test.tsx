import { userSelectionCollection, user1, user2 } from "../__stubsData/users"
import { UserSelect } from "./UserSelect"
import { shallow } from "enzyme"
import { create } from "react-test-renderer"
import * as React from "react"

describe("<UserSelect />", () => {
  it("should render with default selected user", () => {
    const userdata1 = {
      ...user1,
      isSelected: true
    }

    const userdata2 = {
      ...user2,
      isSelected: true
    }

    const userSelections = [userdata1, userdata2]

    const component = shallow(<UserSelect
      data={userSelections}
      onSelectedEvent={jest.fn()}
    />).instance() as UserSelect

    expect(component.state.selectedUser[0]).toBeTruthy()
    expect(component.state.selectedUser[1]).toBeTruthy()

  })

  describe("selectUser()", () => {
    const userSelections = [...userSelectionCollection]
    const props = {
      data: userSelections,
      onSelectedEvent: jest.fn()
    }

    it("should add user to component state", () => {
      const idx = 0
      const user = userSelections[idx]
      const component = shallow(<UserSelect {...props} />).instance() as UserSelect
      component.selectUser(user, idx)
      expect(component.state.selectedUser[idx]).toBeTruthy()
    })

    it("should remove user from component state when already selected", () => {
      const idx = 0
      const user = userSelections[idx]
      const component = shallow(<UserSelect {...props} />).instance() as UserSelect

      component.selectUser(user, idx)

      expect(component.state.selectedUser[idx]).toBeTruthy()

      component.selectUser(user, idx)

      expect(component.state.selectedUser[idx]).toBeFalsy()
    })
  })
})
