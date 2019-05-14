import { Colours } from "../shared"
import { dataGroup1, dataGroup2, dataGroup3, dataGroup4, dataGroup5 } from "./__stubsData/data"
import { groupBackgroundColourMap } from "./__stubsData/data"
import { groupSchedule, mapGroupScheduleToGridViewItem } from "./ScheduleView.helper"

describe("groupSchedule()", () => {
  describe("when schedule overlap", () => {
    it("should group the schedule and return 1 result", () => {
      const all = [...dataGroup1, ...dataGroup2]
      const result = groupSchedule(all)
      const firstGroup = result.groups[0]
      const secondGroup = result.groups[1]

      expect(result.groups.length).toEqual(2)
      expect(result.longestOverlap).toEqual(4)

      expect(firstGroup.allItems.length).toEqual(3)
      expect(firstGroup.startTime.getTimeInMinutes()).toEqual(510)
      expect(firstGroup.endTime.getTimeInMinutes()).toEqual(660)

      expect(secondGroup.allItems.length).toEqual(4)
      expect(secondGroup.startTime.getTimeInMinutes()).toEqual(690)
      expect(secondGroup.endTime.getTimeInMinutes()).toEqual(990)
    })
  })

  describe("when 2 group of schedule overlap", () => {
    it("should combine the overlap group", () => {
      const all = [...dataGroup2, ...dataGroup3, ...dataGroup4]

      const result = groupSchedule(all)
      const firstGroup = result.groups[0]
      const secondGroup = result.groups[1]

      expect(result.groups.length).toEqual(2)
      expect(result.longestOverlap).toEqual(4)

      expect(firstGroup.allItems.length).toEqual(3)
      expect(firstGroup.startTime.getTimeInMinutes()).toEqual(510)
      expect(firstGroup.endTime.getTimeInMinutes()).toEqual(660)

      expect(secondGroup.allItems.length).toEqual(4)
      expect(secondGroup.startTime.getTimeInMinutes()).toEqual(670)
      expect(secondGroup.endTime.getTimeInMinutes()).toEqual(900)
    })
  })

  describe("when 3 group of schedule overlap", () => {
    it("should combine the overlap group", () => {
      const all = [...dataGroup3, ...dataGroup4, ...dataGroup5]
      const result = groupSchedule(all)
      const firstGroup = result.groups[0]

      expect(result.groups.length).toEqual(1)
      expect(result.longestOverlap).toEqual(7)

      expect(firstGroup.allItems.length).toEqual(7)
      expect(firstGroup.startTime.getTimeInMinutes()).toEqual(670)
      expect(firstGroup.endTime.getTimeInMinutes()).toEqual(1100)
    })
  })
})

describe("mapGroupScheduleToGridViewItem()", () => {
  describe("when the items in all group less than 5", () => {

    const allGroups = groupSchedule([...dataGroup1, ...dataGroup2])
    it("should return GridViewItem", () => {
      const result = mapGroupScheduleToGridViewItem({
        allGroup: allGroups.groups,
        gridMaxColumn: allGroups.longestOverlap,
        gridStartHour: 7,
        groupToColour: groupBackgroundColourMap
      })

      expect(result.length).toEqual(7)
      expect(result[0].position.y).toEqual(1.5)
      expect(result[0].position.x).toEqual(0)
      expect(result[0].dimension.width).toEqual(1.5)
      expect(result[0].dimension.height).toEqual(2)
      expect(result[0].name).toEqual("Test B1-1")
      expect(result[0].category).toEqual("B1")
      expect(result[0].backgroundColor).toEqual(Colours.Purple)

      expect(result[1].position.y).toEqual(2)
      expect(result[1].position.x).toEqual(1.5)
      expect(result[1].dimension.width).toEqual(1.5)
      expect(result[1].dimension.height).toEqual(2)
      expect(result[1].name).toEqual("Test B2-1")
      expect(result[1].category).toEqual("B2")
      expect(result[1].backgroundColor).toEqual(Colours.DeepPurple)

      expect(result[2].position.y).toEqual(3)
      expect(result[2].position.x).toEqual(3)
      expect(result[2].dimension.width).toEqual(1)
      expect(result[2].dimension.height).toEqual(1)
      expect(result[2].name).toEqual("Test B1-2")
      expect(result[2].category).toEqual("B1")
      expect(result[2].backgroundColor).toEqual(Colours.Purple)

      expect(result[3].position.y).toEqual(4.5)
      expect(result[3].position.x).toEqual(0)
      expect(result[3].dimension.width).toEqual(1)
      expect(result[3].dimension.height).toEqual(3)
      expect(result[3].name).toEqual("Test A1-1")
      expect(result[3].category).toEqual("A1")
      expect(result[3].backgroundColor).toEqual(Colours.Indigo)

      expect(result[4].position.y).toEqual(6)
      expect(result[4].position.x).toEqual(1)
      expect(result[4].dimension.width).toEqual(1)
      expect(result[4].dimension.height).toEqual(2)
      expect(result[4].name).toEqual("Test A1-2")
      expect(result[4].category).toEqual("A1")
      expect(result[4].backgroundColor).toEqual(Colours.Indigo)

      expect(result[5].position.y).toEqual(6.5)
      expect(result[5].position.x).toEqual(2)
      expect(result[5].dimension.width).toEqual(1)
      expect(result[5].dimension.height).toEqual(2)
      expect(result[5].name).toEqual("Test A2-1")
      expect(result[5].category).toEqual("A2")
      expect(result[5].backgroundColor).toEqual(Colours.LightBlue)

      expect(result[6].position.y).toEqual(7)
      expect(result[6].position.x).toEqual(3)
      expect(result[6].dimension.width).toEqual(1)
      expect(result[6].dimension.height).toEqual(2.5)
      expect(result[6].name).toEqual("Test A2-2")
      expect(result[6].category).toEqual("A2")
      expect(result[6].backgroundColor).toEqual(Colours.LightBlue)
    })
  })
})
