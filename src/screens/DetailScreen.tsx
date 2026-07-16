import {View, Text, ActivityIndicator, Alert} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useEffect, useState} from "react";
import useUser from "../hooks/useUser.ts";

type Props= NativeStackScreenProps<RootStackParamList,'Detail'>;

export default function DetailScreen({route}:Props) {

    const {user, loading, error} = useUser(route.params.userId);

    useEffect(() => {
        error && Alert.alert("No se pudo obtener el usuario");
    },[error])

    if (loading){
       return <ActivityIndicator size="large" animating={true}/>;
    }

    return (

        <View>

            <Text>Detalle {user?.id}</Text>
            <Text>Nombre: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Telefono: {user?.phone}</Text>

        </View>

    );

}