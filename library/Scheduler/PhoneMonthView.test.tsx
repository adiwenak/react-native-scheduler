import { shallow } from "enzyme"
import * as React from "react"
import { create } from "react-test-renderer"
import { categoryActivitiesData } from "../../demoData/data"
import { Scheduler } from "./PhoneMonthView"

describe("<PhoneMonthView />", () => {

  describe("render()", () => {
    it("should render with valid props", () => {
      const rendered = create(
        <Scheduler
          data={categoryActivitiesData}
        />).toJSON()

      expect(rendered).toMatchSnapshot()
    })
  })

  describe("on selected category change", () => {
    const data = [...categoryActivitiesData]
    const component = shallow(
      <Scheduler
        data={data}
      />)

    const instance = component.instance()

    const spySetState = jest.spyOn(instance, "setState")

    it("should update filtered data", () => {
      const categoryPickerProps: any = component.find("CategoryPicker").props()
      categoryPickerProps.onSelectedEvent([0, 1, 2, 3])

      expect(spySetState).toHaveBeenCalled()
      expect(spySetState).toHaveBeenCalledWith(data.slice(0, 4))
    })
  })

  describe("on date change", () => {
    const data = [...categoryActivitiesData]

    const component = shallow(
      <Scheduler
        data={data}
      />)

    const instance = component.instance()

    const spySetState = jest.spyOn(instance, "setState")
    it("should set new state for selected date", () => {
      const calendarMonthProps: any = component.find("CalendarMonth").props()
      const date = new Date()
      calendarMonthProps.onDateSelected(date)

      expect(spySetState).toHaveBeenCalled()
      expect(spySetState).toHaveBeenCalledWith(date)
    })
  })
})
