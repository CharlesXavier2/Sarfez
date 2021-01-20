import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
     style = {styles.area}
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
                  margin: 10,
                }}
              />
    </TouchableOpacity>
  );
}
export default MyBackButton;

const styles = StyleSheet.create({
    area : {
        backgroundColor: '#E7EEF1',
        width: '4.4%',
        height: '2.475%',
        marginTop: 24
    }
});