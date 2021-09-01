import { Auth} from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import Home from './screens/Home';

export default () => {
  const [state, setState] = useState({
      setDevice_id: '',
      device_id: '',
      setDevice_id_b: '',
      device_id_b: '',
      setUser_Id: '',
      user_Id: ''
  });

  async function onSubmit(){
      try{
          const user = await Auth.currentAuthenticatedUser();
          const result = await Auth.updateUserAttributes(user, {
               'custom:device_id' : state.setDevice_id
            });
            //console.log("onSubmit",state.setDevice_id)
         } catch(err){
              console.log(err.messaage)
          }
      }
      async function onSubmit_b(){
        try{
            const user = await Auth.currentAuthenticatedUser();
            const result = await Auth.updateUserAttributes(user, {
                 'custom:device_id_b' : state.setDevice_id_b
              });
              //console.log("onSubmit",state.setDevice_id)
           } catch(err){
                console.log(err.messaage)
            }
        }
        async function onSubmit_user(){
          try{
              const user = await Auth.currentAuthenticatedUser();
              const result = await Auth.updateUserAttributes(user, {
                'custom:user_Id' : state.setUser_Id
              });
              console.log("onSubmit",state.setUser_Id)
             } catch(err){
                  console.log(err.messaage)
              }
          }

      useEffect(() => {
        async function fetchUser(){
    user = await Auth.currentAuthenticatedUser();
    //console.log("useEffect", user)
    setState({...state, 
      device_id: user.attributes['custom:device_id'],
      device_id_b: user.attributes['custom:device_id_b'],
      user_Id: user.attributes['custom:user_Id']
  })
  console.log(user);
        }
        fetchUser()
    }, [])

      
    
     
  return (
    
     
    <View style={{padding: 10}}>
      <Text> ENTER USER ID</Text>
      <TextInput
        style={{height: 20}}
        placeholder="Type Here"
        onChangeText={text => setState({...state, setUser_Id: text})}
        Value={state.user_Id}
      />

    <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => onSubmit_user()} 
        color="orange"
        title="Press Me"
     >  
   </Button>
        <Text> TANK A ENTER DEVICE ID</Text>
      <TextInput
        style={{height: 20}}
        placeholder="Type Here"
        onChangeText={text => setState({...state, setDevice_id: text})}
        Value={state.device_id}
      />

    <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => onSubmit()} 
        color="orange"
        title="Press Me"
     >  
   </Button>
   <Text> TANK B ENTER DEVICE ID</Text>
      <TextInput
        style={{height: 20}}
        placeholder="Type Here"
        onChangeText={text => setState({...state, setDevice_id_b: text})}
        Value={state.device_id_b}
      />

    <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => onSubmit_b()} 
        color="orange"
        title="Press Me"
     >  
   </Button>
   
   <Text style={{padding: 10, fontSize: 10}}> 
        Device ID
        </Text>
      
      <Text style={{padding: 10, fontSize: 10}}> 
        TANK A {state.device_id}
        </Text>
        <Text style={{padding: 10, fontSize: 10}}> 
        TANK B {state.device_id_b}
        </Text>
        <Text style={{padding: 10, fontSize: 10}}> 
        USER ID{state.user_Id}
        </Text>
        
    </View>
  );
}
 



