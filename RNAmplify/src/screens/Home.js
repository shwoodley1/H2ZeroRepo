
import React, { useEffect, useState } from 'react';
import { Auth, API} from 'aws-amplify';
import { Text, TextInput, View, Button, FlatList, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default (props) => {
  
      
      
      return (
        <SafeAreaView>
          <Text>LITERS: {props.volume_level}</Text>
          <Text>PERCENT: {props.percent_level}</Text>
          <Text>UPDATED: {props.reported}</Text>
          <Text>STATUS: {props.status}</Text>
          <Text>TITLE: {props.title}</Text>
          <Text>WIFI SIGNAL: {props.wifi_signal}</Text>
       </SafeAreaView>
    );
    
}

