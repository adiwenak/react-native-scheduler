import { shallow } from "enzyme";
import "jest";
import React from "react";
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
        var button = component.dive().find({ accessibilityLabel: "button-month-prev" }).props();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FrdXJuYWRpL1Byb2plY3RzL3JlYWN0LW5hdGl2ZS1zY2hlZHVsZXIvbGlicmFyeS9DYWxlbmRhck1vbnRoL01vbnRoU2VsZWN0aW9uL01vbnRoU2VsZWN0aW9uLnRlc3QudHN4IiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUE7QUFDaEMsT0FBTyxNQUFNLENBQUE7QUFDYixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxjQUFjLENBQUE7QUFDckIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFakQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNqQyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQ3BCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNsRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUU7UUFDekUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQzFCLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FDckIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoRyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3pGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUzRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0VBQW9FLEVBQUU7UUFDckUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQzFCLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FDckIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoRyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRXpGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUU1RCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvYWt1cm5hZGkvUHJvamVjdHMvcmVhY3QtbmF0aXZlLXNjaGVkdWxlci9saWJyYXJ5L0NhbGVuZGFyTW9udGgvTW9udGhTZWxlY3Rpb24vTW9udGhTZWxlY3Rpb24udGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFwiamVzdFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBcInJlYWN0LW5hdGl2ZVwiXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgeyBNb250aCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbW9kZWxcIlxuaW1wb3J0IHsgTW9udGhTZWxlY3Rpb24gfSBmcm9tIFwiLi9Nb250aFNlbGVjdGlvblwiXG5cbmRlc2NyaWJlKFwiPE1vbnRoU2VsZWN0aW9uIC8+XCIsICgpID0+IHtcbiAgICBpdChcInNob3VsZCByZW5kZXIgd2l0aCBnaXZlbiBwcm9wc1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZShcbiAgICAgICAgICAgIDxNb250aFNlbGVjdGlvbiBjdXJyZW50WWVhcj17MjAxN30vPikudG9KU09OKClcbiAgICAgICAgZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KClcbiAgICB9KVxuXG4gICAgaXQoXCJzaG91bGQgY2hhbmdlIGN1cnJlbnQgbW9udGggb3IgY3VycmVudCB5ZWFyIHdoZW4gcHJldmlvdXMgYnV0dG9uIHByZXNzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gc2hhbGxvdyhcbiAgICAgICAgICAgIDxNb250aFNlbGVjdGlvbiBjdXJyZW50WWVhcj17MjAxN30gY3VycmVudE1vbnRoPXtNb250aC5GZWJydWFyeX0gb25Nb250aENoYW5nZT17b25DaGFuZ2V9Lz4pXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNvbXBvbmVudC5kaXZlKCkuZmluZCh7IGFjY2Vzc2liaWxpdHlMYWJlbDogXCJidXR0b24tbW9udGgtcHJldlwiIH0pLnByb3BzKClcbiAgICAgICAgYnV0dG9uLm9uUHJlc3MoKVxuICAgICAgICBleHBlY3Qob25DaGFuZ2UubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSlcbiAgICAgICAgZXhwZWN0KGNvbXBvbmVudC5zdGF0ZShcImN1cnJlbnRNb250aFwiKSkudG9CZShNb250aC5KYW51YXJ5KVxuXG4gICAgICAgIGJ1dHRvbi5vblByZXNzKClcbiAgICAgICAgZXhwZWN0KG9uQ2hhbmdlLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlKDIpXG4gICAgICAgIGV4cGVjdChjb21wb25lbnQuc3RhdGUoXCJjdXJyZW50TW9udGhcIikpLnRvQmUoTW9udGguRGVjZW1iZXIpXG4gICAgICAgIGV4cGVjdChjb21wb25lbnQuc3RhdGUoXCJjdXJyZW50WWVhclwiKSkudG9CZSgyMDE2KVxuICAgIH0pXG5cbiAgICBpdChcInNob3VsZCBjaGFuZ2UgY3VycmVudCBtb250aCBvciBjdXJyZW50IHllYXIgd2hlbiBuZXh0IGJ1dHRvbiBwcmVzc1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHNoYWxsb3coXG4gICAgICAgICAgICA8TW9udGhTZWxlY3Rpb24gY3VycmVudFllYXI9ezIwMTd9IGN1cnJlbnRNb250aD17TW9udGguTm92ZW1iZXJ9IG9uTW9udGhDaGFuZ2U9e29uQ2hhbmdlfS8+KVxuICAgICAgICBjb25zdCBidXR0b24gPSBjb21wb25lbnQuZGl2ZSgpLmZpbmQoeyBhY2Nlc3NpYmlsaXR5TGFiZWw6IFwiYnV0dG9uLW1vbnRoLW5leHRcIiB9KS5wcm9wcygpXG5cbiAgICAgICAgYnV0dG9uLm9uUHJlc3MoKVxuICAgICAgICBleHBlY3Qob25DaGFuZ2UubW9jay5jYWxscy5sZW5ndGgpLnRvQmUoMSlcbiAgICAgICAgZXhwZWN0KGNvbXBvbmVudC5zdGF0ZShcImN1cnJlbnRNb250aFwiKSkudG9CZShNb250aC5EZWNlbWJlcilcblxuICAgICAgICBidXR0b24ub25QcmVzcygpXG4gICAgICAgIGV4cGVjdChvbkNoYW5nZS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZSgyKVxuICAgICAgICBleHBlY3QoY29tcG9uZW50LnN0YXRlKFwiY3VycmVudE1vbnRoXCIpKS50b0JlKE1vbnRoLkphbnVhcnkpXG4gICAgICAgIGV4cGVjdChjb21wb25lbnQuc3RhdGUoXCJjdXJyZW50WWVhclwiKSkudG9CZSgyMDE4KVxuICAgIH0pXG59KVxuIl0sInZlcnNpb24iOjN9