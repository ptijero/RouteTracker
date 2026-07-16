import {useState, useEffect} from "react";
import {PERMISSIONS, RESULTS, request} from "react-native-permissions";
import {Platform} from "react-native";
import Geolocation from "react-native-geolocation-service";

export interface Location{

    latitude:number;

    longitude:number;

    accuracy:number;

    heading:number|null;

    speed:number|null;

}


export default function useLocation(){

    const [location,setLocation] =useState<Location|null>(null);
    const [accuracy,setAccuracy] =useState<number>(0);
    const [heading,setHeading] =useState<number|null>(null);
    const [speed,setSpeed] =useState<number|null>(null);
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState('');

    useEffect(()=>{

        async function requestLocationPermission(){

            const permission =

                Platform.OS==="android"

                    ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

                    : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

            const result = await request(permission);

            return result===RESULTS.GRANTED;


        }

        let watchId:number;

        const granted =  requestLocationPermission();

        if (!granted) {
            setError("No tiene permiso de ubicación - No puede visualizar posición");
            return;
        }
        watchId = Geolocation.watchPosition((position)=> {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    heading: position.coords.heading,
                    speed: position.coords.speed,
                });
        }, (error) => {},     {

            enableHighAccuracy:true,

            distanceFilter:5,

            interval:2000,

            fastestInterval:1000

        });

        return ()=>{

            Geolocation.clearWatch(watchId);

        }

    },[]);

    return {
        location,
        loading,
        error
    }
}