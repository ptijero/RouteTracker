import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F6F9"
    },

    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    header: {
        backgroundColor: "#2563EB",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#FFF"
    },

    subtitle: {
        color: "#E2E8F0",
        marginTop: 5
    },

    search: {
        margin: 20,
        backgroundColor: "#FFF",
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 12,
        elevation: 2
    },

    empty: {
        textAlign: "center",
        marginTop: 50,
        color: "#666"
    }

});

export default styles;