import { shallow } from "enzyme"
import "jest"
import { default as React } from "react"
import "react-native"
import { FlatList } from "react-native"
import { create } from "react-test-renderer"
import { Month } from "../../../shared/model"
import { MonthSelectionPicker } from "./MonthSelectionPicker"

describe("<MonthSelectionPicker />", () => {
  let onMonthChangeFromPicker: any
  let onYearChangeFromPicker: any
  let comp: any

  beforeEach(() => {
    onMonthChangeFromPicker = jest.fn()
    onYearChangeFromPicker = jest.fn()

    comp = shallow(
      <MonthSelectionPicker
        onMonthChangeFromPicker={onMonthChangeFromPicker}
        onYearChangeFromPicker={onYearChangeFromPicker}
        currentMonth={Month.January}
        currentYear={2019}
        startYear={2010}
        endYear={2021}
      />)
  })

  describe("render()", () => {
    it("should render with proper props", () => {
      const component = create(
        <MonthSelectionPicker
          onMonthChangeFromPicker={jest.fn()}
          onYearChangeFromPicker={jest.fn()}
          currentMonth={Month.January}
          currentYear={2019}
          startYear={2010}
          endYear={2021}
        />)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })

  it("should call onMonthChangeFromPicker when pressed - Feb", () => {
    const touchable = comp.find({ accessibilityLabel: "Feb" }).props()

    touchable.onPress()
    expect(onMonthChangeFromPicker).toBeCalledTimes(1)
    expect(onMonthChangeFromPicker).toBeCalledWith(Month.February)
  })

  it("should call onYearChangeFromPicker when pressed - 2018", () => {
    const touchable = comp.find({ accessibilityLabel: "month-year-btn" }).props()
    expect(comp.instance().state).toEqual({ showYearView: false })
    touchable.onPress()
    expect(comp.instance().state).toEqual({ showYearView: true })
  })

  it("should call onYearChnageFromPicker when renderYearListItem is pressed", () => {
    // update component to render Year picker
    comp.find({accessibilityLabel: "month-year-btn"}).props().onPress()
    comp.update()

    // render the item
    const YearItem = comp.find(FlatList).props().renderItem
    const yearItemComp = shallow(<YearItem item={2019} />)

    // invoke the item
    const onPress = yearItemComp.find({accessibilityLabel: "year-2019"}).props().onPress
    onPress()

    expect(onYearChangeFromPicker).toBeCalledTimes(1)
    expect(onYearChangeFromPicker).toBeCalledWith(2019)
  })

  it("keyExtractor", () => {
    const keyExtractor = comp.instance().renderYearList().props.keyExtractor
    expect(keyExtractor("1", 1)).toEqual("1")
  })
})
