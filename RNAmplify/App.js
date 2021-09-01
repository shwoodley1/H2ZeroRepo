/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Amplify from '@aws-amplify/core';
 import awsconfig from './aws-exports';
 import { Authenticator } from 'aws-amplify-react-native';
 import { StyleSheet,View } from 'react-native';
 import Attributes from './src/Attributes';
 import Home from './src/screens/Home';
 
 Amplify.configure(awsconfig);
 
 export default function App() {

   return (
     <View style={styles.container}>
       <Authenticator usernameAttributes="email">
         <Home />
         <Attributes />
       </Authenticator>
     </View>
   )
 }
  
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 });
 