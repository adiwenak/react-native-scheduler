import { shallow } from "enzyme"
import React from "react"

import { MonthSelectionPicker } from "./MonthSelectionPicker"

describe("MonthSelectionPicker.tsx", () => {
  describe("<MonthSelectionPicker />", () => {
    it("should render with proper props", () => {

      const onPressHandler = jest.fn()
      const onMonthChangeFromPicker = jest.fn()

      const comp = shallow(
        <MonthSelectionPicker
          onPressHandler={onPressHandler}
          onMonthChangeFromPicker={onMonthChangeFromPicker}
        />
      )

      expect(comp).toMatchSnapshot()
    })
  })
})
