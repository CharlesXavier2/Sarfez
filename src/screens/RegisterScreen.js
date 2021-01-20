// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from '../components/Loader';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  return (
  
    <View style={styles.container}>
     
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
              Help to bring more medication 
              options to your neighborhood.
              </Text>
         
         
              <Text style={styles.textStyle}>
              Register below and we show you existing opportunities, or notify you once they become available.
              </Text>

              <View style={styles.divider} />
         
      </View>
      
      <View style={styles.view3}>
                  

          <View style={styles.SectionStyle2}>
          <TextInput
              style={{flex:1,  height:    '100%'}}
              placeholder="  Mobile Phone"
              placeholderTextColor ="#595959"
              underlineColorAndroid="transparent"
              
          />
 
        <Image source={require('../../assets/dailer.png')} style={styles.ImageStyle} />
 
          
        </View>
        <View style={styles.SectionStyle2}>
          <TextInput
              style={{flex:1}}
              placeholder="  Email"
              placeholderTextColor ="#595959"
              underlineColorAndroid="transparent"
             // onChangeText={() => setShouldShow(!shouldShow)}
          />
 
        <Image source={require('../../assets/email.png')} style={styles.ImageStyle2} />
 
          
        </View>
        {shouldShow ? (
        <View style={styles.SectionStyle2}>
          <TextInput
              style={{flex:1}}
              placeholder="  Password"
              placeholderTextColor ="#595959"
              underlineColorAndroid="transparent"
             
          />
 
        <Image source={require('../../assets/password.png')} style={styles.ImageStyle3} />
 
          
        </View> ) : null}
        </View>  
        <View style={styles.view4}>
        <View style={styles.divider} />
          <TouchableOpacity activeOpacity={buttonActive ? 1 : 0.7} style={styles.buttonStyle} onPress={() => navigation.navigate('Decline')}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
         
         </View>
        
          </View>

          
    
);
};
export default RegisterScreen;

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
   
   
    
   marginBottom: 7,
    justifyContent: 'flex-start',
    marginTop: 36,
  },
  view3: {
    alignItems: 'center', 
    marginBottom: -40
   // height: '55%'
  },
  view4: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    //marginTop: 20,
    //opacity: 0.5

  },
  buttonStyle: {
    width: '90%',
    height: '25%',
   
    backgroundColor: '#363636',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    //height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'center'
  },
  buttonTextStyle: {
    color: '#FFFFFF',
   // paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Lato'
  },
  divider : {
      borderWidth: 0.2,
      borderColor:'#BFBFBF',
      marginTop: 10,
      //marginBottom: 10,
      opacity: 0.5,
      width: '90%'
      
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
    marginRight: 60,
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
      height: "14.5%",
      width: "90%",
      borderRadius: 5 ,
      margin: 10
  },
   
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 40,
      width: 40,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  ImageStyle2: {
    padding: 10,
    margin: 10,

    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
ImageStyle3: {
  padding: 10,
  margin: 10,

  height: 10,
  width: 25,
  resizeMode : 'stretch',
  alignItems: 'center'
}
   
  
});