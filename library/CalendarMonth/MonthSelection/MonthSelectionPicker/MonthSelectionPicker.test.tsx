import { shallow } from "enzyme"
import { default as React } from "react"

import "jest"
import "react-native"
import { create } from "react-test-renderer"

import { Month } from "../../../shared/model"
import { MonthSelectionPicker } from "./MonthSelectionPicker"

import { MonthSelection } from "../MonthSelection"

describe("MonthSelectionPicker.tsx", () => {
  describe("<MonthSelectionPicker />", () => {

    it("should render with proper props", () => {
      const dismissMonthSelectionPicker = jest.fn()
      const onMonthChangeFromPicker = jest.fn()

      const comp = create(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          dismissMonthSelectionPicker={dismissMonthSelectionPicker}
          currentMonth={Month.January}
        />).toJSON()

      expect(comp).toMatchSnapshot()
    })

    it("should call dismissMonthSelectionPicker and onMonthChangeFromPicker when pressed - Feb", () => {
      const dismissMonthSelectionPicker = jest.fn()
      const onMonthChangeFromPicker = jest.fn()

      const comp = shallow(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          dismissMonthSelectionPicker={dismissMonthSelectionPicker}
          currentMonth={Month.January}
        />
      )
      const touchable = comp.find({ accessibilityLabel: "Feb" }).props()

      touchable.onPress()
      expect(dismissMonthSelectionPicker).toBeCalledTimes(1)
      expect(onMonthChangeFromPicker).toBeCalledTimes(1)
      expect(onMonthChangeFromPicker).toBeCalledWith(Month.February)
    })
  })
})
