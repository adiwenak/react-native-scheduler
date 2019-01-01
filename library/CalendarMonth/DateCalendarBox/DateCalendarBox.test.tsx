import { shallow } from "enzyme"
import * as React from "react"
import { create } from "react-test-renderer"
import { userCollections } from "../__stubsData/data"
import { DateCalendarBox } from "./DateCalendarBox"

describe("<DateCalendarBox />", () => {
    const onPressHandlerMock = jest.fn()

    it("should render with given props", () => {
        const component = create(
            <DateCalendarBox
                date={1}
                isSelected={true}
                isWeekend={false}
                whosBusy={userCollections}
                dateBoxOnPressHandler={onPressHandlerMock}
                boxWidth={50}
                dateFontSize={16}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })

    it("should call onPressHandler when component is pressed", () => {

        const component = shallow(
            <DateCalendarBox
                date={1}
                isSelected={true}
                isWeekend={false}
                whosBusy={userCollections}
                dateBoxOnPressHandler={onPressHandlerMock}
                boxWidth={50}
                dateFontSize={16}
            />
        )

        component.props().onPress()
        expect(onPressHandlerMock.mock.calls.length).toBe(1)
    })
})
