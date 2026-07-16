import {View, Text, Button, ActivityIndicator, FlatList, ListRenderItem} from "react-native";
import {Alert} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/types.ts";
import useUsers from "../hooks/useUsers.ts";
import UserCard from "../components/UserCard.tsx";
import {useEffect} from "react";
type Props= NativeStackScreenProps<RootStackParamList,'Home'>;

export default function HomeScreen({ navigation }:Props) {

    const {users, loading, error } = useUsers()

    function getDetail(id:number) {
        navigation.navigate("Detail", {userId: id})
    }

    useEffect(()=>{

        if(error){

            Alert.alert(error);

        }

    },[error]);

    if (loading){
        return <ActivityIndicator size="large"/>;
    }
    return (

        <View>
            <Text>Lista de Usuarios</Text>
            <FlatList data={users} keyExtractor={(item)=>item.id.toString()} ListEmptyComponent={()=>(

                <Text>

                    No existen usuarios

                </Text>

            )} renderItem={({item})=>(

                <UserCard

                    user={item}

                    onPress={getDetail}

                />

            )}
            />

        </View>

    );

}