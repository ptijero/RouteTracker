import { View, Text, Button } from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/types.ts";
type Props= NativeStackScreenProps<RootStackParamList,'Login'>;

export default function LoginScreen({ navigation }:Props) {

    return (

        <View>

            <Text>Login</Text>

            <Button
                title="Entrar"
                onPress={() => navigation.replace("Home")}
            />

        </View>

    );

}