import { shallow } from "enzyme"
import * as React from "react"
import { ScrollView } from "react-native"
import { create } from "react-test-renderer"
import { dataGroup1, dataGroup2, dataGroup3, dataGroup4, dataGroup5, groupBackgroundColourMap } from "./__stubsData/data"
import { ScheduleView } from "./ScheduleView"
import { activityToGridViewItem } from "./ScheduleView.helper"

describe("<ScheduleView />", () => {

  const allActivity = [...dataGroup1, ...dataGroup2, ...dataGroup3]
  const props = {
    data: allActivity,
    rowHeight: 70,
    startTime: 7,
    endTime: 23,
    colourMap: groupBackgroundColourMap
  }

  describe("render()", () => {
    it("should render with given props", () => {

      const component = create(
        <ScheduleView
          data={[...dataGroup1]}
          rowHeight={70}
          startTime={7}
          endTime={23}
          colourMap={groupBackgroundColourMap}
        />
      ).toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe("componentDidUpdate()", () => {
    const newActivity = [...dataGroup4, ...dataGroup5]

    const prevProps = {
      ...props,
      data: newActivity
    }

    const component = shallow(
      <ScheduleView
        {...props}
      />
    )

    const scrollView: any = component.find(ScrollView).props()
    const containerWidth = 300
    scrollView.onLayout({ nativeEvent: { layout: { width: containerWidth } } })
    const instance: any = component.instance()
    const {
      items: activityItems,
      longestOverlap: numberOfColumn } = activityToGridViewItem(allActivity, groupBackgroundColourMap)

    const dateBoxWidth = (containerWidth - 60) / numberOfColumn
    const spySetState = jest.spyOn(instance, "setState")
    instance.componentDidUpdate(prevProps, {})

    it("should call setState", () => {
      expect(spySetState).toHaveBeenCalled()
      expect(spySetState).toHaveBeenCalledWith({activityItems, numberOfColumn, dateBoxWidth})
    })
  })
})
