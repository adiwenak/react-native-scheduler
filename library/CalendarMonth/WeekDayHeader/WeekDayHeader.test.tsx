import * as React from "react"
import { create } from "react-test-renderer"
import { WeekDayHeader } from "./WeekDayHeader"

describe("<WeekDayHeader />", () => {
    it("should render with given props", () => {
        const component = create(
            <WeekDayHeader />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
