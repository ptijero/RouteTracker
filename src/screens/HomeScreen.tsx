import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Alert,
    TextInput
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import useUsers from "../hooks/useUsers";
import UserCard from "../components/userCard/UserCard.tsx";
import { useEffect, useState } from "react";
import styles from "../styles/HomeStyle";
import {User} from "../models/User.ts";
import useNetworkStatus from "../hooks/useNetworkStatus.ts";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {

    const { users, loading, error } = useUsers();
    const [usersView, setUsersView] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");
    function getDetail(id: number) {
        navigation.navigate("Detail", { userId: id });
    }

    const isOnline = useNetworkStatus();

    useEffect(() => {

        if (error) {
            Alert.alert("Error", error);
        }

    }, [error]);

    useEffect(() => {
        setUsersView(users);
    }, [users]);

    useEffect(() => {
        const result = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        if (result.length > 0 && search != ""){
            setUsersView(result);
        } else if (result.length == 0 && search != "") {
            setUsersView([]);
        } else {
            setUsersView(users);
        }
    }, [search]);

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.title}>
                    🚚 Route Tracker
                </Text>

                <Text style={styles.subtitle}>
                    Clientes registrados {users.length}
                </Text>
                <Text style={{"color": "white", paddingTop: 15}}>
                    {isOnline ? "🟢 Online" : "🔴 Offline"}
                </Text>
            </View>

            <TextInput
                placeholder="Buscar cliente..."
                style={styles.search}
                onChangeText={setSearch}
                value={search}
            />

            {search != "" && usersView.length != 0 && <Text style={{margin: 5}} >{usersView.length} clientes encontrados.</Text>}

            <FlatList
                data={usersView}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListEmptyComponent={() => (
                    <Text style={styles.empty}>
                        No existen usuarios
                    </Text>
                )}
                renderItem={({ item }) => (

                    <UserCard
                        user={item}
                        onPress={getDetail}
                    />

                )}
            />

        </View>

    );
}