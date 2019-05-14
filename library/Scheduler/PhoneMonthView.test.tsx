import * as React from "react"
import { create } from "react-test-renderer"
import { categoryActivitiesData } from "../../demoData/data"
import { Scheduler } from "./PhoneMonthView"

describe("<PhoneMonthView />", () => {
  it("should render with valid props", () => {
    const comp = create(
      <Scheduler
        data={categoryActivitiesData}
      />).toJSON()

    expect(comp).toMatchSnapshot()
  })
})
