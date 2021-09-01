
import React, { useEffect, useState } from 'react';
import { Auth} from 'aws-amplify';
import { Text, TextInput, View, Button, FlatList} from 'react-native';

import * as axios from 'axios';

export default (params) => {
    const [state, setState] = useState({
        device_id: '',
        device_id_b: '',
        user_id: '',
        setData: [] ,
        volume_level: 0,
        percent_level: 0,
        reported: '',
        status: '',
        title: '',
        wifi_signal: ''
    });

    

      useEffect(() => {
        async function fetchUser(){
            user = await Auth.currentAuthenticatedUser();
            //console.log("useEffect", user)
            setState({...state, 
              device_id: user.attributes['custom:device_id'],
              device_id_b: user.attributes['custom:device_id_b'],
              user_id: user.attributes['custom:user_Id']
          });
          const b = await state.user_id
          
          
          
            const axData = await axios.get(`https://mfq4gbnelk.execute-api.us-east-1.amazonaws.com/${b}`)
            .then(response => {
              return response.data;
            }).catch(err => {
                console.error(err);
            });
            const data = await axData[0]
            console.log("hello",data); 
            
            if(data){
             setState({...state, 
                          volume_level: data.device_data.volume_level,
                          percent_level: data.device_data.percent_level,
                          reported: data.reported,
                          status: data.status,
                          title: data.title,
                          wifi_signal: data.wifi_signal
                     });
                   }  
        }
        
        fetchUser()
    }, [])
    
   
    return (
<View>
    <Text>LITERS: {state.volume_level}</Text>
    <Text>PERCENT: {state.percent_level}</Text>
    <Text>UPDATED: {state.reported}</Text>
    <Text>STATUS: {state.status}</Text>
    <Text>TITLE: {state.title}</Text>
    <Text>WIFI SIGNAL: {state.wifi_signal}</Text>
</View>
    );
    
}

