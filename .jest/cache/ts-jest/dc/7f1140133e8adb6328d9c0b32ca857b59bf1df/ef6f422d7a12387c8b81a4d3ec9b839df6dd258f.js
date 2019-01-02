import * as React from "react";
import { create } from "react-test-renderer";
import { WeekDayHeader } from "./WeekDayHeader";
describe("<WeekDayHeader />", function () {
    it("should render with given props", function () {
        var component = create(<WeekDayHeader />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FrdXJuYWRpL1Byb2plY3RzL3JlYWN0LW5hdGl2ZS1zY2hlZHVsZXIvbGlicmFyeS9DYWxlbmRhck1vbnRoL1dlZWtEYXlIZWFkZXIvV2Vla0RheUhlYWRlci50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBRS9DLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQixFQUFFLENBQUMsZ0NBQWdDLEVBQUU7UUFDakMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUNwQixDQUFDLGFBQWEsQ0FBQyxBQUFELEVBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha3VybmFkaS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtc2NoZWR1bGVyL2xpYnJhcnkvQ2FsZW5kYXJNb250aC9XZWVrRGF5SGVhZGVyL1dlZWtEYXlIZWFkZXIudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCB7IFdlZWtEYXlIZWFkZXIgfSBmcm9tIFwiLi9XZWVrRGF5SGVhZGVyXCJcblxuZGVzY3JpYmUoXCI8V2Vla0RheUhlYWRlciAvPlwiLCAoKSA9PiB7XG4gICAgaXQoXCJzaG91bGQgcmVuZGVyIHdpdGggZ2l2ZW4gcHJvcHNcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjcmVhdGUoXG4gICAgICAgICAgICA8V2Vla0RheUhlYWRlciAvPikudG9KU09OKClcbiAgICAgICAgZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KClcbiAgICB9KVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==