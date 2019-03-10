import { shallow } from "enzyme"
import { default as React } from "react"

import "jest"
import "react-native"
import { create } from "react-test-renderer"

import { Month } from "../../../shared/model"
import { MonthSelectionPicker } from "./MonthSelectionPicker"

describe("MonthSelectionPicker.tsx", () => {
  describe("<MonthSelectionPicker />", () => {

    it("should render with proper props", () => {
      const onMonthChangeFromPicker = jest.fn()
      const onYearChangeFromPicker = jest.fn()

      const comp = create(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          onYearChangeFromPicker={onYearChangeFromPicker}
          currentMonth={Month.January}
          currentYear={2019}
          />).toJSON()

      expect(comp).toMatchSnapshot()
    })

    it("should call onMonthChangeFromPicker when pressed - Feb", () => {
      const onMonthChangeFromPicker = jest.fn()
      const onYearChangeFromPicker = jest.fn()

      const comp = shallow(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          onYearChangeFromPicker={onYearChangeFromPicker}
          currentMonth={Month.January}
          currentYear={2019}
        />
      )
      const touchable = comp.find({ accessibilityLabel: "Feb" }).props()

      touchable.onPress()
      expect(onMonthChangeFromPicker).toBeCalledTimes(1)
      expect(onMonthChangeFromPicker).toBeCalledWith(Month.February)
    })

    it("should call onYearChangeFromPicker when pressed - 2018", () => {
      const onMonthChangeFromPicker = jest.fn()
      const onYearChangeFromPicker = jest.fn()

      const comp = shallow(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          onYearChangeFromPicker={onYearChangeFromPicker}
          currentMonth={Month.January}
          currentYear={2019}
        />
      )
      const touchable = comp.find({ accessibilityLabel: "month-year-btn" }).props()
      expect(comp.instance().state).toEqual({ showYearView: false })
      touchable.onPress()
      expect(comp.instance().state).toEqual({ showYearView: true })

      const touchableYear = comp.find({ accessibilityLabel: "2018" }).props()
      touchableYear.onPress()
      expect(onYearChangeFromPicker).toBeCalledTimes(1)
      expect(onYearChangeFromPicker).toBeCalledWith(2018)

      expect(comp).toMatchSnapshot()
    })
  })
})
