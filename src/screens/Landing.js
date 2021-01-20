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

const Landing = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    return (
        <View style={styles.container}>
            
           <Image
                source={require('../../assets/Default.png')}
                style={{
                  width: '20%',
                  height: 30,
                 

                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
              
              <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>
                  Welcome to Sarfez. We connect qualified nurses to pharmaceutical sales opportunities.
                  </Text>
              </View>
              <TouchableOpacity style={styles.buttonStyle}  onPress={() => navigation.navigate('Prescription')}>
                  <Text style={styles.buttonTextStyle}>REGISTER</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>


              <View style={styles.socialContainer}>
       
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={require('../../assets/google.png')}
            style={styles.buttonImageIconStyleG}
          />
          <View style={styles.textSocial}>
          <Text style={styles.buttonTextStyle2}>
            GOOGLE
          </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DashboardNew')}
          style={styles.buttonFacebookStyle}
         activeOpacity={0.5}>
          <Image
            source={require('../../assets/fb.png')}
            style={styles.buttonImageIconStyleF}
          />
         <View style={styles.textSocial}>
          <Text style={styles.buttonTextStyle2}>
            FACEBOOK
          </Text>
          </View>
        </TouchableOpacity>
      </View>     
        </View>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#595959'
      
    },
   
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      width: '90%',
      height: '7.5%',
      backgroundColor: '#363636',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      //height: 40,
      alignItems: 'center',
      justifyContent: 'center',
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
        opacity: 0.5,
        
        width: '90%'
        
      },
    textContainer: {
      width: '90%',
      
      height: '11.25%',
      
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'flex-start',
     
    },
    textStyle: {
      color: '#FFFFFF',
      textAlign: 'left',
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
    socialContainer: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent : 'space-between',
        // margin: 10,
        // marginTop: 10,
        // paddingLeft: 10,
         paddingRight: 20
      },
      buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '15%',
        width: '43.33%',
        backgroundColor: '#DD4B39',
        borderWidth: 0.5,
        borderColor: '#DD4B39',
        //height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
      },
      buttonFacebookStyle: {
        flexDirection: 'row',
        width: '43.33%',
        alignItems: 'center',
        backgroundColor: '#3B5999',
        height: '15%',
        borderWidth: 0.5,
        borderColor: '#3B5999',
        //height: 40,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
      },
      buttonImageIconStyleG: {
       // padding: 10,
        marginLeft: 10,
        height: 14,
        justifyContent: 'flex-start',
        width: 13.7,
        resizeMode: 'stretch',
      },
      buttonImageIconStyleF: {
        // padding: 10,
         marginLeft: 10,
         height: 20,
         justifyContent: 'flex-start',
         width: 10,
         resizeMode: 'stretch',
       },
     
      buttonTextStyle2: {
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center',
       
        fontSize: 14,
       //marginLeft: 20,
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