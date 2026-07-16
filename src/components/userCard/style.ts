import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    card:{
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        backgroundColor:"#fff",
        borderRadius:10,
        elevation:3
    },

    avatar:{
        width:50,
        height:50,
        borderRadius:25
    },

    name:{
        marginLeft:10,
        fontSize:18
    },

    button: {
        width: 250,
        marginTop: 10,
        backgroundColor: "#2563EB",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    }


});