import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F9",
    padding: 20
},

card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 24,
    elevation: 6
},

logo: {
    fontSize: 60,
    textAlign: "center"
},

title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
    color: "#1E293B"
},

subtitle: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 8,
    marginBottom: 30
},

input: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFFFFF"
},

button: {
    backgroundColor: "#2563EB",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10
},

buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16
},

demo: {
    marginTop: 20,
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 12
}

});

export default styles;