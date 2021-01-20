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

const Prescription = ({navigation}) => {
  
    return (
        <View style={styles.container}>
           <View style={styles.containerMini}>
           <TouchableOpacity
    style={{marginLeft: 20, width: 20, height: 20}}
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
                  marginLeft: "30%",
                }}
              />
           </View>
           <View style={styles.SectionStyle}>
            <Image
                 source={require('../../assets/imgPrescription.png')}
                 style={{
                   width: '55%',
                   height: '42%',
                    
 
                   resizeMode: 'contain',
                   
                 }}
               />
              
               <View style={styles.divider} />
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>
                 Are you licensed to write prescriptions in your own name?
                  </Text>
              </View>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Decline')}>
                  <Text style={styles.buttonTextStyle}>YES</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.buttonTextStyle}>NO</Text>
              </TouchableOpacity>

              </View>
         
        </View>
    );
};

export default Prescription;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      //alignItems: 'center',
      backgroundColor: '#595959'
      
    },
    containerMini: {
        flex: 1,
        flexDirection: 'row',
       marginTop: 25,
        
        backgroundColor: '#595959',
      
      },
     
    SectionStyle: {
      alignItems: 'center',
      justifyContent: 'flex-end'
      
    },
    buttonStyle: {
      width: '90%',
      height: '9%',
      backgroundColor: '#363636',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      //height: 40,
      alignItems: 'center',
      borderRadius: 5,
      marginLeft: 20,
      marginRight: 20,
     // marginTop: 10,
      marginBottom: 20,
      justifyContent: 'center'
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
        opacity: 0.5,
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