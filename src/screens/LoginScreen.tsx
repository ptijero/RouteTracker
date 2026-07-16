import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import { useState } from "react";
import styles from "../styles/LoginStyle";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <View style={styles.container}>

            <View style={styles.card}>

                <Text style={styles.logo}>📍</Text>

                <Text style={styles.title}>
                    Route Tracker
                </Text>

                <Text style={styles.subtitle}>
                    Plataforma de seguimiento de rutas
                </Text>

                <TextInput
                    placeholder="Correo"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Home")}
                >

                    <Text style={styles.buttonText}>
                        Ingresar
                    </Text>

                </TouchableOpacity>

                <Text style={styles.demo}>
                    Demo • No requiere autenticación
                </Text>

            </View>

        </View>

    );
}