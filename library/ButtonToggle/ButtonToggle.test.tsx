import { shallow } from "enzyme"
import * as React from "react"
import { create } from "react-test-renderer"
import { ButtonToggle } from "./ButtonToggle"

describe("<ScheduleView />", () => {
  const props = {
    selected: true,
    title: "button1",
    selectedColour: "blue",
    onPress: jest.fn()
  }

  describe("render()", () => {

    it("should render with selected state", () => {
      const component = create(
        <ButtonToggle
          {...props}
        />
      ).toJSON()

      expect(component).toMatchSnapshot()
    })

    it("should render with unselected state", () => {
      const unselected = { ...props, selected: false }
      const component = create(
        <ButtonToggle
          {...unselected}
        />
      ).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe("buttonPress()", () => {
    it("should invoke setState and onPress props", () => {
      const onPress = jest.fn()

      const component = shallow(
        <ButtonToggle {...props} onPress={onPress} />)
      const instance = component.instance()
      const setState = jest.spyOn(instance, "setState")
      const touchable: any = component.find("TouchableOpacity").first().props()
      touchable.onPress()
      expect(onPress).toHaveBeenCalled()
      expect(setState).toHaveBeenCalled()
    })
  })
})
