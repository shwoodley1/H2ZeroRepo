
import React, { useEffect } from 'react';
import {  Text,  StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';




export default (props) => {
  
  useEffect(() => {
    setInterval(function(){
      
    
    }, 1000);
  },[])
 function sub(){
   const longDelta = 0.1;
   let i = 0.05
   longDelta / i--
 }
  

return (
   
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: props.lat,
         longitude: props.lng,
         latitudeDelta: 0.0015,
         longitudeDelta: 0.1004,
       }}
     >
         <Marker 
         coordinate={{
            latitude: props.lat,
            longitude: props.lng,
         }}>
             <Callout>
                 <Text>Wifi {props.wifi}</Text>
             </Callout>
             </Marker>
     </MapView>
     
  
 );

};

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      height:'100%',
    },
   });