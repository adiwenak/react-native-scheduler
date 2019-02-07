import moment from "moment"
import * as React from "react"
import { create } from "react-test-renderer"
import { taskAndUserCollections } from "./__stubsData/data"
import { CalendarMonth } from "./CalendarMonth"

describe("<CalendarMonth />", () => {

    let dateNowSpy: any

    beforeAll(() => {
        dateNowSpy = jest.spyOn(Date, "now").mockImplementation(() => 1546581861496)
    })

    afterAll(() => {
        dateNowSpy.mockRestore()
    })

    it("should render with given props", () => {

        const component = create(
            <CalendarMonth
                data={taskAndUserCollections}
            />
        ).toJSON()

        expect(component).toMatchSnapshot()
    })
})
