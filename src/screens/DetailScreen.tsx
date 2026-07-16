import {View, Text, ActivityIndicator, Alert} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {useEffect, useState} from "react";
import useUser from "../hooks/useUser.ts";
import MapComponent from "../components/MapComponent.tsx";
import styles from "../styles/DetailStyle.ts"
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
        <View style={styles.container}>

            <View style={styles.card}>

                <Text style={styles.title}>
                    Usuario #{user?.id}
                </Text>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Nombre</Text>
                    <Text style={styles.value}>{user?.name}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{user?.email}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Teléfono</Text>
                    <Text style={styles.value}>{user?.phone}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Empresa</Text>
                    <Text style={styles.value}>{user?.company.name}</Text>
                </View>

                <Text style={styles.mapTitle}>
                    Ubicación
                </Text>

                <View style={styles.mapContainer}>
                    <MapComponent
                        latitude={parseFloat(user?.address.geo.lat ?? "0")}
                        longitude={parseFloat(user?.address.geo.lng ?? "0")}
                    />
                </View>

            </View>

        </View>
    );

}