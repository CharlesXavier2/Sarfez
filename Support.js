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
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon } from 'native-base';


const Prescription = ({navigation}) => {
    
    const [errortext, setErrortext] = useState('');
    return (
        <View style={styles.container}>
           <Container style={styles.container2}>
        <Header noShadow androidStatusBarColor='#595959' style={styles.containerMini}>
          <Left>
          <Button transparent onPress={()=> {navigation.goBack()}}>
          <Image
                source={require('../../assets/back.png')}
                style={{
                  width: '40%',
                  height: 70,
                 

                  resizeMode: 'contain',
                  margin: 30,
                  
                }}
              />
            </Button>
          </Left>
          <Body>
          <Image
                source={require('../../assets/Default.png')}
                style={{
                  width: '40%',
                  height: 50,
                 

                  resizeMode: 'contain',
                  margin: 30,
                  marginLeft: "70%"
                }}
              />
          </Body>
          <Right />
        </Header>
        <View style={styles.SectionStyle}>
        <Image
                 source={require('../../assets/imgPrescription.png')}
                 style={{
                   width: '50%',
                   height: '50%',
                    
                   
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
              <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>YES</Text>
              </TouchableOpacity>
             
              <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={styles.buttonTextStyle}>NO</Text>
              </TouchableOpacity>
              </View>

      </Container>
           {/* <View style={styles.containerMini}>
            <MyBackButton /> 
           <Image
                source={require('../../assets/Default.png')}
                style={{
                  width: '20%',
                  height: 30,
                 

                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
           </View> */}
           
         
        </View>
    );
};

export default Prescription;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     // alignItems: 'center',
      backgroundColor: '#595959'
      
    },
    container2: {
      flex: 1,
      
     // alignItems: 'center',
      backgroundColor: '#595959'
      
    },
    containerMini: {
      //marginTop: '5%',
        // flexDirection: 'row',
        marginLeft: -30,
       // alignItems: 'center',
        backgroundColor: '#595959',
      
      },
     
    SectionStyle: {
      marginTop : "10%",
      alignItems: 'center',
      justifyContent: 'flex-end'
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
      marginTop: 10,
      marginBottom: 10,
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
        marginBottom: 10,
        
        width: '90%'
        
      },
    textContainer: {
      width: '90%',
      
      height: '7.5%',
      
      marginTop: 10,
      marginBottom: 10,
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