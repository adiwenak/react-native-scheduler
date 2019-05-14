import { shallow } from "enzyme"
import * as React from "react"
import { create } from "react-test-renderer"
import { Month } from "../shared/model"
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
    it("should call setState when onMonthChange is called", () => {
        const setState = jest.fn()
        const component = shallow(
            <CalendarMonth
                data={taskAndUserCollections}
            />
        )
        component.instance().setState = setState
        const onMonthChange = (component.find("MonthSelection").props() as any).onMonthChange
        onMonthChange(Month.January, 2019)
        expect(setState).toBeCalledTimes(1)
        expect(setState).toBeCalledWith({currentMonth: Month.January, currentYear: 2019, selectedDate: undefined})
    })
})
