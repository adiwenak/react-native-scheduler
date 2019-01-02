import { shallow } from "enzyme";
import "jest";
import { default as React } from "react";
import "react-native";
import { create } from "react-test-renderer";
import { Month } from "../../shared/model";
import { MonthSelection } from "./MonthSelection";
describe("<MonthSelection />", function () {
    it("should render with given props", function () {
        var component = create(<MonthSelection currentYear={2017}/>).toJSON();
        expect(component).toMatchSnapshot();
    });
    it("should change current month or current year when previous button press", function () {
        var onChange = jest.fn();
        var component = shallow(<MonthSelection currentYear={2017} currentMonth={Month.February} onMonthChange={onChange}/>);
        var button = component.find({ accessibilityLabel: "button-month-prev" }).props();
        button.onPress();
        expect(onChange.mock.calls.length).toBe(1);
        expect(component.state("currentMonth")).toBe(Month.January);
        button.onPress();
        expect(onChange.mock.calls.length).toBe(2);
        expect(component.state("currentMonth")).toBe(Month.December);
        expect(component.state("currentYear")).toBe(2016);
    });
    it("should change current month or current year when next button press", function () {
        var onChange = jest.fn();
        var component = shallow(<MonthSelection currentYear={2017} currentMonth={Month.November} onMonthChange={onChange}/>);
        var button = component.dive().find({ accessibilityLabel: "button-month-next" }).props();
        button.onPress();
        expect(onChange.mock.calls.length).toBe(1);
        expect(component.state("currentMonth")).toBe(Month.December);
        button.onPress();
        expect(onChange.mock.calls.length).toBe(2);
        expect(component.state("currentMonth")).toBe(Month.January);
        expect(component.state("currentYear")).toBe(2018);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FrdXJuYWRpL1Byb2plY3RzL3JlYWN0LW5hdGl2ZS1zY2hlZHVsZXIvbGlicmFyeS9DYWxlbmRhck1vbnRoL01vbnRoU2VsZWN0aW9uL01vbnRoU2VsZWN0aW9uLnRlc3QudHN4IiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFDaEMsT0FBTyxNQUFNLENBQUE7QUFDYixPQUFPLEVBQUUsT0FBTyxJQUFJLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUN4QyxPQUFPLGNBQWMsQ0FBQTtBQUNyQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUVqRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFDM0IsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ2pDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FDcEIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3RUFBd0UsRUFBRTtRQUN6RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDMUIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUNyQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEYsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTNELE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM1RCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvRUFBb0UsRUFBRTtRQUNyRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDMUIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUNyQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFFekYsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTVELE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha3VybmFkaS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtc2NoZWR1bGVyL2xpYnJhcnkvQ2FsZW5kYXJNb250aC9Nb250aFNlbGVjdGlvbi9Nb250aFNlbGVjdGlvbi50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGFsbG93IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgXCJqZXN0XCJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFwicmVhY3QtbmF0aXZlXCJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCB7IE1vbnRoIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbFwiXG5pbXBvcnQgeyBNb250aFNlbGVjdGlvbiB9IGZyb20gXCIuL01vbnRoU2VsZWN0aW9uXCJcblxuZGVzY3JpYmUoXCI8TW9udGhTZWxlY3Rpb24gLz5cIiwgKCkgPT4ge1xuICAgIGl0KFwic2hvdWxkIHJlbmRlciB3aXRoIGdpdmVuIHByb3BzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY3JlYXRlKFxuICAgICAgICAgICAgPE1vbnRoU2VsZWN0aW9uIGN1cnJlbnRZZWFyPXsyMDE3fS8+KS50b0pTT04oKVxuICAgICAgICBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKVxuICAgIH0pXG5cbiAgICBpdChcInNob3VsZCBjaGFuZ2UgY3VycmVudCBtb250aCBvciBjdXJyZW50IHllYXIgd2hlbiBwcmV2aW91cyBidXR0b24gcHJlc3NcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBzaGFsbG93KFxuICAgICAgICAgICAgPE1vbnRoU2VsZWN0aW9uIGN1cnJlbnRZZWFyPXsyMDE3fSBjdXJyZW50TW9udGg9e01vbnRoLkZlYnJ1YXJ5fSBvbk1vbnRoQ2hhbmdlPXtvbkNoYW5nZX0vPilcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY29tcG9uZW50LmZpbmQoeyBhY2Nlc3NpYmlsaXR5TGFiZWw6IFwiYnV0dG9uLW1vbnRoLXByZXZcIiB9KS5wcm9wcygpXG4gICAgICAgIGJ1dHRvbi5vblByZXNzKClcbiAgICAgICAgZXhwZWN0KG9uQ2hhbmdlLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDEpXG4gICAgICAgIGV4cGVjdChjb21wb25lbnQuc3RhdGUoXCJjdXJyZW50TW9udGhcIikpLnRvQmUoTW9udGguSmFudWFyeSlcblxuICAgICAgICBidXR0b24ub25QcmVzcygpXG4gICAgICAgIGV4cGVjdChvbkNoYW5nZS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgyKVxuICAgICAgICBleHBlY3QoY29tcG9uZW50LnN0YXRlKFwiY3VycmVudE1vbnRoXCIpKS50b0JlKE1vbnRoLkRlY2VtYmVyKVxuICAgICAgICBleHBlY3QoY29tcG9uZW50LnN0YXRlKFwiY3VycmVudFllYXJcIikpLnRvQmUoMjAxNilcbiAgICB9KVxuXG4gICAgaXQoXCJzaG91bGQgY2hhbmdlIGN1cnJlbnQgbW9udGggb3IgY3VycmVudCB5ZWFyIHdoZW4gbmV4dCBidXR0b24gcHJlc3NcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBzaGFsbG93KFxuICAgICAgICAgICAgPE1vbnRoU2VsZWN0aW9uIGN1cnJlbnRZZWFyPXsyMDE3fSBjdXJyZW50TW9udGg9e01vbnRoLk5vdmVtYmVyfSBvbk1vbnRoQ2hhbmdlPXtvbkNoYW5nZX0vPilcbiAgICAgICAgY29uc3QgYnV0dG9uID0gY29tcG9uZW50LmRpdmUoKS5maW5kKHsgYWNjZXNzaWJpbGl0eUxhYmVsOiBcImJ1dHRvbi1tb250aC1uZXh0XCIgfSkucHJvcHMoKVxuXG4gICAgICAgIGJ1dHRvbi5vblByZXNzKClcbiAgICAgICAgZXhwZWN0KG9uQ2hhbmdlLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDEpXG4gICAgICAgIGV4cGVjdChjb21wb25lbnQuc3RhdGUoXCJjdXJyZW50TW9udGhcIikpLnRvQmUoTW9udGguRGVjZW1iZXIpXG5cbiAgICAgICAgYnV0dG9uLm9uUHJlc3MoKVxuICAgICAgICBleHBlY3Qob25DaGFuZ2UubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMilcbiAgICAgICAgZXhwZWN0KGNvbXBvbmVudC5zdGF0ZShcImN1cnJlbnRNb250aFwiKSkudG9CZShNb250aC5KYW51YXJ5KVxuICAgICAgICBleHBlY3QoY29tcG9uZW50LnN0YXRlKFwiY3VycmVudFllYXJcIikpLnRvQmUoMjAxOClcbiAgICB9KVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==