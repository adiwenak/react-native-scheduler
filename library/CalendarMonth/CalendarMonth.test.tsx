import * as React from "react"
import { create } from "react-test-renderer"
import { taskAndUserCollections } from "./__stubsData/data"
import { CalendarMonth } from "./CalendarMonth"

describe("<CalendarMonth />", () => {
    it("should render with given props", () => {
        const component = create(
            <CalendarMonth
                data={taskAndUserCollections}
            />
        ).toJSON()

        expect(component).toMatchSnapshot()
    })
})
