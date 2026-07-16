import {View, Text, Button, TouchableOpacity} from "react-native";
import { User } from "../../models/User.ts";
import {styles} from "./style.ts";
interface UserCardProps{

    user: User;

    onPress:(id:number)=>void;

}
export default function UserCard({user, onPress}:UserCardProps) {

    return (

        <View style={styles.card}>

            <Text style={styles.name}>
                👤 {user.name}
            </Text>

            <Text>📞 {user.phone}</Text>


            <TouchableOpacity
                style={styles.button}
                onPress={() => onPress(user.id)}
            >

                <Text style={styles.buttonText}>
                    Ver ubicación
                </Text>

            </TouchableOpacity>

        </View>

);

}