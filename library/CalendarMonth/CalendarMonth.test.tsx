import mockdate from "mockdate"
import * as React from "react"
import { create } from "react-test-renderer"
import { categoryActivities } from "./__stubsData/data"
import { CalendarMonth } from "./CalendarMonth"

describe("<CalendarMonth />", () => {

  it("should render with given props", () => {
    const today = new Date(2019, 5, 15, 10, 0, 0, 0)
    mockdate.set(today)
    const component = create(
      <CalendarMonth
        data={categoryActivities}
        onDateSelected={jest.fn()}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
    mockdate.reset()
  })
})
