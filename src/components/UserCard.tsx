import { View, Text , Button} from "react-native";
import { User } from "../models/User";

interface UserCardProps{

    user: User;

    onPress:(id:number)=>void;

}
export default function UserCard({user, onPress}:UserCardProps) {

    return (

        <View>

            <Text>{user.name}</Text>

            <Text>{user.email}</Text>

            <Text>{user.phone}</Text>

            <Text>{user.website}</Text>

            <Button
                title="Detalle"
                onPress={() => onPress(user.id)}
            />

        </View>

);

}