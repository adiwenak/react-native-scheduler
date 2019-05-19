import { shallow } from "enzyme"
import "jest"
import { default as React } from "react"
import "react-native"
import { create } from "react-test-renderer"
import { Month } from "../../shared/model"
import { MonthSelection } from "./MonthSelection"

describe("<MonthSelection />", () => {
  it("should render with given props", () => {
    const component = create(
      <MonthSelection currentYear={2017} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it("should change current month or current year when previous button press", () => {
    const onChange = jest.fn()
    const component = shallow(
      <MonthSelection currentYear={2017} currentMonth={Month.February} onMonthChange={onChange} />)
    const button = component.find({ accessibilityLabel: "button-month-prev" }).props()
    button.onPress()
    expect(onChange.mock.calls.length).toBe(1)
    expect(component.state("currentMonth")).toBe(Month.January)
  })

  it("should render with given props and show month picker", () => {
    const component = shallow(<MonthSelection currentYear={2017} />)
    component.setState({ showMonthPicker: true })
    expect(component.find("MonthSelectionPicker")).toBeTruthy()
  })

  it("should call setState when currentMonth prop changes", () => {
    const setState = jest.fn()
    const component = shallow(<MonthSelection currentMonth={Month.January} />)
    component.instance().setState = setState
    component.setProps({ currentMonth: Month.February })
    expect(setState).toBeCalledTimes(1)
    expect(setState).toBeCalledWith({ currentMonth: Month.February })
  })

  it("should call setState with showMonthPicker when touchable is pressed", () => {
    const setState = jest.fn()
    const component = shallow(<MonthSelection currentMonth={Month.January} />)
    component.instance().setState = setState
    component.find({ accessibilityLabel: "date-display" }).props().onPress()
    expect(setState).toBeCalledTimes(1)
    expect(setState).toBeCalledWith({ showMonthPicker: true })
  })

  it("should change current month or current year when previous button press", () => {
    const onChange = jest.fn()
    const component = shallow(
      <MonthSelection currentYear={2017} currentMonth={Month.February} onMonthChange={onChange} />)
    const button = component.find({ accessibilityLabel: "button-month-prev" }).props()
    button.onPress()
    expect(onChange.mock.calls.length).toBe(1)
    expect(component.state("currentMonth")).toBe(Month.January)

    button.onPress()
    expect(onChange.mock.calls.length).toBe(2)
    expect(component.state("currentMonth")).toBe(Month.December)
    expect(component.state("currentYear")).toBe(2016)
  })

  it("should change current month or current year when next button press", () => {
    const onChange = jest.fn()
    const component = shallow(
      <MonthSelection currentYear={2017} currentMonth={Month.November} onMonthChange={onChange} />)
    const button = component.find({ accessibilityLabel: "button-month-next" }).props()

    button.onPress()
    expect(onChange.mock.calls.length).toBe(1)
    expect(component.state("currentMonth")).toBe(Month.December)

    button.onPress()
    expect(onChange.mock.calls.length).toBe(2)
    expect(component.state("currentMonth")).toBe(Month.January)
    expect(component.state("currentYear")).toBe(2018)
  })
})
