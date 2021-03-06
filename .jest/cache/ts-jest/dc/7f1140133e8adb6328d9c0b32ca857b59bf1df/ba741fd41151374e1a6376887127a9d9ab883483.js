import { StyleSheet } from "react-native";
export default StyleSheet.create({
    topOuterView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedColor: {
        backgroundColor: "#FF1493"
    },
    circleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyleWeekday: {
        color: "#323A48",
        fontWeight: "500",
        fontSize: 14
    },
    textStyleWeekend: {
        color: "#768398",
        fontWeight: "400",
        fontSize: 14
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FrdXJuYWRpL1Byb2plY3RzL3JlYWN0LW5hdGl2ZS1zY2hlZHVsZXIvbGlicmFyeS9DYWxlbmRhck1vbnRoL0RhdGVDYWxlbmRhckJveC9JbmRpdmlkdWFsQ29tcG9uZW50cy9EYXRlQ29tcG9uZW50LnN0eWxlLnRzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXdCLE1BQU0sY0FBYyxDQUFBO0FBVS9ELGVBQWUsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUM3QixZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3ZCO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsZUFBZSxFQUFFLFNBQVM7S0FDN0I7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3ZCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZCxLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsRUFBRTtLQUNmO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZCxLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsRUFBRTtLQUNmO0NBQ0osQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha3VybmFkaS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtc2NoZWR1bGVyL2xpYnJhcnkvQ2FsZW5kYXJNb250aC9EYXRlQ2FsZW5kYXJCb3gvSW5kaXZpZHVhbENvbXBvbmVudHMvRGF0ZUNvbXBvbmVudC5zdHlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZVNoZWV0LCBUZXh0U3R5bGUsIFZpZXdTdHlsZSB9IGZyb20gXCJyZWFjdC1uYXRpdmVcIlxuXG5pbnRlcmZhY2UgU3R5bGUge1xuICAgIHRvcE91dGVyVmlldzogVmlld1N0eWxlXG4gICAgc2VsZWN0ZWRDb2xvcjogVmlld1N0eWxlXG4gICAgY2lyY2xlVmlldzogVmlld1N0eWxlXG4gICAgdGV4dFN0eWxlV2Vla2RheTogVGV4dFN0eWxlXG4gICAgdGV4dFN0eWxlV2Vla2VuZDogVGV4dFN0eWxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICB0b3BPdXRlclZpZXc6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBzZWxlY3RlZENvbG9yOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkYxNDkzXCJcbiAgICB9LFxuICAgIGNpcmNsZVZpZXc6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICB0ZXh0U3R5bGVXZWVrZGF5OiB7XG4gICAgICAgIGNvbG9yOiBcIiMzMjNBNDhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgZm9udFNpemU6IDE0XG4gICAgfSxcbiAgICB0ZXh0U3R5bGVXZWVrZW5kOiB7XG4gICAgICAgIGNvbG9yOiBcIiM3NjgzOThcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgZm9udFNpemU6IDE0XG4gICAgfVxufSlcbiJdLCJ2ZXJzaW9uIjozfQ==