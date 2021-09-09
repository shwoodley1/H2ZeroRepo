import React from 'react';
import {View, SafeAreaView, Button, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
  } from 'react-native-paper';
  

  
function ProfileScreen(props){

console.log('Profile props',props);

    return (
   <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{props.title}</Title>
            <Caption style={styles.caption}>{props.email}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>{props.address}</Text>
        </View>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>TANK A {props.device_id}</Text>
        </View>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>TANK B {props.device_id_b}</Text>
        </View>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>USER ID {props.user_Id}</Text>
        </View>
      </View>
      
      </SafeAreaView> 
    )
}
export default ProfileScreen 

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