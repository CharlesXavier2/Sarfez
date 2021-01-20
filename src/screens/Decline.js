import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import MyBackButton from '../components/MyBackButton';

const Decline = ({navigation}) => {
  
    return (
        <View style={styles.container}>
           <View style={styles.containerMini}>
           <TouchableOpacity
    style={{marginLeft: 12, width: '10%', height: '10%'}}
      onPress={() => {
        navigation.goBack();
      }}
    >
           <Image
                source={require('../../assets/back.png')}
                style={{
                  width: '100%',
                  height: '100%',
                 

                  resizeMode: 'contain',
                //  marginTop: 20
                }}
              />
               </TouchableOpacity>
           <Image
                source={require('../../assets/Default.png')}
                style={{
                  width: '20%',
                  height: 30,
                 

                  resizeMode: 'contain',
                  marginLeft: "25%",
                }}
              />
           </View>
           <View style={styles.SectionStyle}>
            <Image
                 source={require('../../assets/imgPrescription.png')}
                 style={{
                   width: '70%',
                   height: '55%',
                    
 
                   resizeMode: 'contain',
                   
                 }}
               />
              
               <View style={styles.divider} />
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>
                Unfortunately we currently can not legally work with anyone licensed to write prescriptions.
                  </Text>
              </View>
             
              {/* <View style={styles.divider} />
              <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>YES</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>NO</Text>
              </TouchableOpacity> */}

              </View>
         
        </View>
    );
};

export default Decline;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      //alignItems: 'center',
      backgroundColor: '#595959'
      
    },
    containerMini: {
        flex: 1,
        flexDirection: 'row',
       marginTop: 22,
        
        backgroundColor: '#595959',
      
      },
     
    SectionStyle: {
      alignItems: 'center',
      //justifyContent: 'flex-end',
      marginBottom: 10
      
    },
    buttonStyle: {
      width: '90%',
      height: '11.25%',
      backgroundColor: '#363636',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
     // marginTop: 10,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 14,
      fontFamily: 'lato'
    },
    divider : {
        borderWidth: 0.2,
        borderColor:'#BFBFBF',
        marginTop:10,
        marginBottom: 20,
        
        width: '90%'
        
      },
    textContainer: {
      width: '90%',
      
      height: '7.5%',
      
      //marginTop: 10,
      marginBottom: 20,
      justifyContent: 'flex-start',
     
    },
    textStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      //fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center',
      marginRight: 16
     // padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
      },
      textSocial : {
          flex: 1,
          alignItems: 'center',
          width: 117,
         // height: '2.5%'
      }
     
    
  });