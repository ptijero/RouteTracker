import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        padding: 16,
    },

    card: {
        backgroundColor: "#FFF",
        borderRadius: 12,
        padding: 18,
        elevation: 3, // Android
        shadowColor: "#000", // iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1F2937",
        textAlign: "center",
    },

    infoRow: {
        marginBottom: 14,
    },

    label: {
        fontSize: 13,
        color: "#6B7280",
        marginBottom: 2,
    },

    value: {
        fontSize: 17,
        fontWeight: "600",
        color: "#111827",
    },

    mapTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#1F2937",
    },

    mapContainer: {
        height: 350,
        borderRadius: 12,
        overflow: "hidden",
    },
});

export default styles;