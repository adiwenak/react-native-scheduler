import * as React from "react"
import { create } from "react-test-renderer"
import { dataGroup1, dataGroup2, dataGroup3, groupBackgroundColourMap } from "./__stubsData/data"
import { ScheduleView } from "./ScheduleView"

const allActivity = [...dataGroup1, ...dataGroup2, ...dataGroup3]

describe("<ScheduleView />", () => {
  it("should render with given props", () => {
    const component = create(
      <ScheduleView
        data={allActivity}
        rowHeight={70}
        startTime={7}
        endTime={23}
        colourMap={groupBackgroundColourMap}
      />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })
})
