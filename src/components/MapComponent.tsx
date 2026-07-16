import WebView from "react-native-webview";
import {useEffect, useRef, useState} from "react";
import useLocation, {Location} from "../hooks/useLocation.ts";

interface Props{
    latitude:number;
    longitude:number;
}

export default function MapComponent({latitude, longitude}:Props){

    const webViewRef = useRef<WebView>(null);
    //const {location} = useLocation();
    const [mapLoaded,setMapLoaded]=useState(false);

    useEffect(() => {
        //if(!location) return;
        if(!mapLoaded) return;
        webViewRef.current?.injectJavaScript(`window.moveMarker(${latitude},${longitude});true;`)
    },[latitude,longitude,mapLoaded]);


    return(

        <WebView


            originWhitelist={['*']}

            source={{
                uri:"file:///android_asset/leaflet/index.html"
            }}

            style={{
                flex:1
            }}

            ref={webViewRef}
            javaScriptEnabled={true}
            onLoadEnd={() => {

                setTimeout(() => {

                    setMapLoaded(true);

                },500);

            }}

            onMessage={(event: { nativeEvent: { data: any; }; })=>{
                console.log(event.nativeEvent.data);
            }}
        />

    );

}