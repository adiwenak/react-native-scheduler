import { shallow } from "enzyme"
import { default as React } from "react"

import "jest"
import "react-native"

import { Month } from "../../../shared/model"
import { MonthSelectionPicker } from "./MonthSelectionPicker"

describe("MonthSelectionPicker.tsx", () => {
  describe("<MonthSelectionPicker />", () => {
    let onMonthChangeFromPicker: any
    let onYearChangeFromPicker: any
    let comp: any

    beforeEach(() => {
      onMonthChangeFromPicker = jest.fn()
      onYearChangeFromPicker = jest.fn()

      comp = shallow(
        <MonthSelectionPicker
          onMonthChangeFromPicker={onMonthChangeFromPicker}
          onYearChangeFromPicker={onYearChangeFromPicker}
          currentMonth={Month.January}
          currentYear={2019}
          startYear={2010}
          endYear={2021}
          />)
    })
    it("should render with proper props", () => {
      expect(comp).toMatchSnapshot()
    })
    it("should call onMonthChangeFromPicker when pressed - Feb", () => {
      const touchable = comp.find({ accessibilityLabel: "Feb" }).props()

      touchable.onPress()
      expect(onMonthChangeFromPicker).toBeCalledTimes(1)
      expect(onMonthChangeFromPicker).toBeCalledWith(Month.February)
    })
    it("should call onYearChangeFromPicker when pressed - 2018", () => {
      const touchable = comp.find({ accessibilityLabel: "month-year-btn" }).props()
      expect(comp.instance().state).toEqual({ showYearView: false })
      touchable.onPress()
      expect(comp.instance().state).toEqual({ showYearView: true })
    })
    it("should call onYearChnageFromPicker when renderYearListItem is pressed", () => {
      const button = comp.instance().renderYearListItem({ item: 2019 }).props.onPress
      button()
      expect(onYearChangeFromPicker).toBeCalledTimes(1)
      expect(onYearChangeFromPicker).toBeCalledWith(2019)
    })
    it("keyExtractor", () => {
      const keyExtractor = comp.instance().renderYearList().props.keyExtractor
      expect(keyExtractor("1", 1)).toEqual("1")
    })
  })
})
