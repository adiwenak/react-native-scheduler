import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native"

interface Style {
    container: ViewStyle
    containerButton: ViewStyle
    containerButtonLeft: ViewStyle
    containerButtonRight: ViewStyle
    containerTitle: ViewStyle
    title: TextStyle
    button: ImageStyle
    monthSelectionPickerTop: ViewStyle
    monthSelectionPickerBottom: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container: {
        flexDirection: "row",
        height: 40,
        marginBottom: 10,
        backgroundColor: "white",
        zIndex: 1
    },
    containerButton: {
        width: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    containerButtonLeft: {
        marginLeft: 17,
        alignItems: "flex-start",
        width: 40
    },
    containerButtonRight: {
        marginRight: 17,
        alignItems: "flex-end",
        width: 40
    },
    containerTitle: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        height: 20
    },
    button: {
        width: 20,
        height: 20
    },
    title: {
        textAlign: "center"
    },
    monthSelectionPickerTop: {
        position: "absolute",
        top: -240
    },
    monthSelectionPickerBottom: {
        position: "absolute",
        top: 40
    }
})
