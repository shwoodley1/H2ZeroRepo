/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import Amplify from '@aws-amplify/core';
 import awsconfig from './aws-exports';
 import { Auth, API} from 'aws-amplify';
 import { withAuthenticator } from 'aws-amplify-react-native';
 import { StyleSheet,View } from 'react-native';
 import { NavigationContainer, useNavigation } from '@react-navigation/native';
 

 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 import Attributes from './src/Attributes';
 import Home from './src/screens/Home';
 import ExploreScreen from './src/screens/ExploreScreen';
 import ProfileScreen from './src/screens/ProfileScreen';

 

 Amplify.configure(awsconfig);
 
  function App() {
    const [state, setState] = useState({
      email: '',
      volume_level: 0,
      percent_level: 0,
      reported: '',
      status: '',
      title: '',
      wifi_signal: '',
      lat: 0,
      lng: 0,
      device_id: 0,
      device_id_b: 0,
      user_id: 0,
      address: '' 
    });



    useEffect(() => {
      async function fetchData(){
          //get user
          const user = await Auth.currentAuthenticatedUser();
          console.log('user',user)
          //get Token
          const token = user.signInUserSession.idToken.jwtToken ;
          //get user ID
          const userId = user.attributes['custom:user_Id'];
          
        const requestInfo = {
          headers:{ Authorization: token },
          queryStringParameters:{ id: userId, }
        }
        const aData = await API.get('userIDapp',`/id`, requestInfo)
        const data = await aData[0] 
       console.log(data);

        if(data){
          setState({...state,
            device_id: user.attributes['custom:device_id'],
            device_id_b: user.attributes['custom:device_id_b'],
            user_Id: user.attributes['custom:user_Id'],
            email: user.attributes.email,
            volume_level: data.device_data.volume_level,
            percent_level: data.device_data.percent_level,
            reported: data.reported,
            status: data.status,
            title: data.title,
            wifi_signal: data.wifi_signal,
            lat: data.lat,
            lng: data.lng,
            address: data.address
          });
        }
      }
      fetchData()
    }, [])


    //children={()=><ComponentName propName={propValue}/>}

    const Tab = createBottomTabNavigator();
  
   return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="ProfileScreen" children={() => <ProfileScreen email = {state.email}
                                                                         device_id = {state.device_id}
                                                                         device_id_b={state.device_id_b}
                                                                         user_Id={state.user_Id} 
                                                                         address={state.address}
                                                                         title= {state.title}/>} />
          <Tab.Screen name="Home" children={() => <Home volume_level={state.volume_level}
                                                        percent_level={state.percent_level}
                                                        reported={state.reported}
                                                        status={state.status}
                                                        title= {state.title}
                                                        wifi_signal={state.wifi_signal}
                                                            />}/>
          <Tab.Screen name="Attributes" children={() => <Attributes />} />
          <Tab.Screen name="ExploreScreen" children={()=><ExploreScreen lat={state.lat}
                                                                        lng={state.lng} 
                                                                        status={state.status}
                                                                        wifi={state.wifi_signal}/>}/>
                                                                              
      </Tab.Navigator>
  </NavigationContainer>
   )
 }
 export default withAuthenticator(App)
  
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 });
 