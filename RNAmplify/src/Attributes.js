import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Text, TextInput, View, Button, SafeAreaView, StyleSheet } from 'react-native';



export default (props) => {
  

  const [state, setState] = useState({
      setDevice_id: '',
      setDevice_id_b: '',
      setUser_Id: ''
      
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
 
     
  return (
    
     <SafeAreaView>
       
    <View style={styles.menuWrapper}>
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
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});



