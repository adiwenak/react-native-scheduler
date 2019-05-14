import * as React from "react"
import { create } from "react-test-renderer"
import { categoryCollections } from "../../__stubsData/data"
import { BusyIndicator } from "./BusyIndicator"

describe("<BusyIndicator />", () => {
  it("should render with given props", () => {
    const component = create(
      <BusyIndicator
        whosBusy={categoryCollections}
        height={10}
      />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
