import * as React from "react"
import { create } from "react-test-renderer"
import { categoryActivities } from "./__stubsData/data"
import { CalendarMonth } from "./CalendarMonth"

describe("<CalendarMonth />", () => {

  it("should render with given props", () => {
    const component = create(
      <CalendarMonth
        data={categoryActivities}
        onDateSelected={jest.fn()}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
