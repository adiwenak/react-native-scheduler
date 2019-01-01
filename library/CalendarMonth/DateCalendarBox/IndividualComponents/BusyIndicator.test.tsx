import * as React from "react"
import { create } from "react-test-renderer"
import { userCollections } from "../../__stubsData/data"
import { BusyIndicator } from "./BusyIndicator"

describe("<BusyIndicator />", () => {
    it("should render with given props", () => {
        const component = create(
            <BusyIndicator
                whosBusy={userCollections}
                height={10}
            />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
