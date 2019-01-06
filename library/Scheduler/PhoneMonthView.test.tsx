import * as React from "react"
import { create } from "react-test-renderer"
import { taskSchedules, user1, user2, user3, user4 } from "../CalendarMonth/__stubsData/data"
import { Scheduler } from "./PhoneMonthView"

describe("<PhoneMonthView />", () => {
    it("should render with valid props", () => {
        const users = [user1, user2, user3, user4]
        const comp = create(
        <Scheduler
            users={users}
            tasks={taskSchedules}
        />)
    })
})
