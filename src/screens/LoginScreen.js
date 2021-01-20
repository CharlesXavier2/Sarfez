// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import Loader from '../components/Loader';
let disable = true;
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
 if(password) disable = false;
  return (
  
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View>
       <View style={styles.view1}>
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
            // marginTop: 20
            }}
          />
           </TouchableOpacity>
        <Image
            source={require('../../assets/Default.png')}
            style={{
              width: '20%',
              height: 20,
             

              resizeMode: 'contain',
              marginLeft: "30%",
            }}
          />
       </View>
      
       <View style={styles.view2}>
       
          
      
              <Text style={styles.textStyle}>
              Sign In using your email and password, or create a new account.
              </Text>
         
         

             
         
      </View>
      
      <View style={styles.view3}>
                  

          <View style={styles.SectionStyle2}>
          <TextInput
              style={{flex:1,  height:    '100%'}}
              placeholder=" Email"
              placeholderTextColor ="#595959"
              underlineColorAndroid="transparent"
              onChangeText={(text) => setUserEmail(text)}
          />
 
        <Image source={require('../../assets/email.png')} style={styles.ImageStyle} />
 
          
        </View>
        <View style={styles.SectionStyle2}>
          <TextInput
              style={{flex:1}}
              placeholder=" Password"
              placeholderTextColor ="#595959"
              underlineColorAndroid="transparent"
              onChangeText={(text) => {setPassword(text)
                disable = false}}
          />
 
        <Image source={require('../../assets/password.png')} style={styles.ImageStyle2} />
 
          
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
        <Text style={styles.buttonTextStyle2}>Recover Password</Text>
        </TouchableOpacity >
        </View>
        <View style={styles.view4}>
        <View style={styles.divider} />
        <View style={styles.view4_1}>
          <TouchableOpacity activeOpacity={buttonActive ? 1 : 0.7} style={styles.buttonStyle} onPress={() => navigation.navigate('Decline')}>
              <Text style={styles.buttonTextStyle}>SEND MAGIC LINK</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={buttonActive ? 1 : 0.7} style={styles.buttonStyle} onPress={() => navigation.navigate('Decline')}>
              <Text style={styles.buttonTextStyle}>SIGN IN</Text>
          </TouchableOpacity>
          </View>
         </View>
         </View>
         </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

          
    
);
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    //alignItems: 'center',
    backgroundColor: '#595959'
    
  },
  view1: {
      flex: 1,
      flexDirection: 'row',
     marginTop: 25,
      
      backgroundColor: '#595959',
    
    },
   
  view2: {
    alignItems: 'center',
   
   
    
   marginBottom: 10,
    justifyContent: 'flex-start',
    marginTop: 56,
  },
  view3: {
    //alignItems: 'center', 
   // height: '55%'
  },
  view4: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    //marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    opacity: disable ? 0.5 : 1
  },
  view4_1: {
    flexDirection: 'row'
  },
  buttonStyle: {
    width: '45%',
    height: '50%',
    backgroundColor: '#363636',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    //height: 40,
   
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
   // paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Lato'
  },
  buttonTextStyle2: {
    color: '#FFFFFF',
   // paddingVertical: 10,
    fontSize: 14,
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: 'Lato',
    textDecorationLine: 'underline',
  },
  divider : {
      borderWidth: 0.2,
      borderColor:'#BFBFBF',
      marginTop:10,
     // marginBottom: 20,
      opacity: 0.5,
      width: '92%'
      
    },
  textContainer: {
    width: '90%',
    
    height: '10%',
    
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'flex-start',
   
  },
  textStyle: {
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 46,
    fontFamily: "Lato"
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
    },
    SectionStyle2: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderColor: '#000',
      height: "17.5%",
      width: "90%",
      borderRadius: 5 ,
      margin: 10,
      marginLeft: 20
  },
   
  ImageStyle: {
      padding: 10,
      margin: 10,
      height: 22,
      width: 22,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  ImageStyle2: {
    padding: 10,
    margin: 10,

    height: 10,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
}
   
  
});