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

const CustomHeader = ({navigation}) => {
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
      
      
        
          </View>

          
    
);
};
export default CustomHeader;

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
  
  
});