import React, { useState }  from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];


const Dashboard = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [markers, setMarkers] = useState([{
    title: 'hello',
    coordinates: {
      latitude: 37.78815,
      longitude: -122.4300
    },
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78890,
      longitude: -122.4520
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78340,
      longitude: -122.4444
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78950,
      longitude: -122.4333
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78550,
      longitude: -122.4399
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78860,
      longitude: -122.4477
    },  
    
  }
]);
const [greenMarkers, setgreenMarkers] = useState([{
    title: 'hello',
    coordinates: {
      latitude: 37.78835,
      longitude: -122.4390
    },
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78920,
      longitude: -122.4230
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78450,
      longitude: -122.4164
    },  
    
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 37.78960,
      longitude: -122.4743
    },  
    
  }
]);
  return (
    <View style={styles.main}>
       <View style={styles.view1}>
       <Image
            source={require('../../assets/Default.png')}
            style={{
              width: '20%',
              height: 20,
             
              resizeMode: 'contain',
              marginLeft: "40%",
            }}
          />
           <Image
            source={require('../../assets/profile.png')}
            style={{
              width: 16,
              height: 16,
             
              resizeMode: 'contain',
              marginLeft: "30%",
            }}
          />
          </View>
          <View style={styles.view0}>
            <View style={styles.view01}>
            <Text style={styles.title}>
            $120
              </Text>
              <Text style={styles.subTitleDark}>
              Jan 2021
              </Text>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.textStyle3}>
            You earned $120 on your last appointment, bringing your total to $1832.
              </Text>
              </View>
              <Image
            source={require("../../assets/greater.png")}
            style={{width: 7.41, height: 12}}
            resizeMode="contain"
          />
          </View>
          <View style={styles.view2}>

    <View style={styles.view4}>
   
    <Image
            source={require('../../assets/calendar.png')}
            style={{
              width: 18.05,
              height: 20,
             margin: 10,
              resizeMode: 'contain',
              //marginLeft: "30%",
            }}
          />
           <Text style={styles.textStyle}>
                Tomorrow 15:30
              </Text>
             
              </View>
              <Text style={styles.textStyle}>
              Dr Ruth Siegel
              </Text>
              <Text style={styles.textStyle2}>
              $130
              </Text>
         
              <View style={styles.divider} />
              <Text style={styles.subTitle}>
              VIEW 2 MORE APPOINTMENTS
              </Text>
              
    </View>
    <TouchableOpacity style={styles.mapContainer} onPress={() => navigation.navigate('MapScreen')}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      customMapStyle={mapStyles}
      style={styles.map}
      region={region}
    >
      {markers.map(marker => (
      <Marker
      coordinate={marker.coordinates}
        
      >
         <Image
            source={require("../../assets/whiteMarker2.png")}
            style={{width: 15, height: 15}}
            resizeMode="contain"
          />
      </Marker>
      ))}
       {greenMarkers.map(marker => (
      <Marker
      coordinate={marker.coordinates}
        
      >
         <Image
            source={require("../../assets/greenMarker.png")}
            style={{width: 15, height: 15}}
            resizeMode="contain"
          />
      </Marker>
      ))}
    </MapView>
    </TouchableOpacity>
    <View style={styles.view5}>
   
    <Text style={styles.textStyle0}>
    Mailing address needed
              </Text>
            
              <Text style={styles.textStyle20}>
              Prior to your first job, we need an address to send physical sales materials to.
              </Text>
         
             

              
    </View>
    <View style={styles.view20}>

          <Text style={styles.textStyle}>
          Dr Jason Rettelreiter  
          </Text>
           
</View>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#595959'
  },
  view0 : {
      height: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    //marginTop: -30,

    backgroundColor: '#363636',
    borderRadius: 16,
    marginBottom: -5,
  },
  view01 : {
    //margin:5,
    //marginTop: 30,
    height: 96,
   // width: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFBFBF',
    borderRadius: 16,
    //marginBottom: 10,
  },
  view02 : {
    
    //marginTop: 30,
    
    
    marginBottom: -5,
  },
  textContainer : {
    margin: 5,
    width: '60%'
  },

  view1 : {
    flexDirection: 'row',
    marginTop: 28,
    marginBottom: 10,
  },
  mapContainer: {
    marginTop: -5,
    marginLeft: 15,
    marginRight: 15,
   height: '30%',
   //opacity: 0.8
   marginBottom: -5,
  },
  view2 : {
    backgroundColor: '#4D4D4D',
    margin: 10,
   // marginTop: -40,
  },
  view20 : {
    backgroundColor: '#4D4D4D',
    margin: 15,
   marginTop: -7,
  },
  view3 : {
    backgroundColor: '#4D4D4D',
    margin: 10,
    
    marginTop: -40,
  },
  view4 : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent : 'space-between'
  },
  container: {
   flexDirection: 'column',
   alignSelf: 'flex-start'
  },
  map: {
    height: '80%',
    opacity: 0.6
  },
  // Callout Bubble 
  bubble : {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius : 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  //Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  // Charecter Name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  //Character Image
  image: {
    width: 120,
    height: 80,
  },
  textStyle: {
    //justifyContent: 'flex-end',
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    //alignSelf: 'center',
    marginTop: 5,
   // marginBottom: 10,
    marginRight: 20,
    fontFamily: "Lato"
   // padding: 10,
  },
  title: {
    //justifyContent: 'flex-end',
    color: '#595959',
    
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    //alignSelf: 'center',
    marginTop: 10,
   // marginBottom: 10,
    marginRight: 20,
    fontFamily: "Lato"
   // padding: 10,
  },
  subTitle: {
    //justifyContent: 'flex-end',
    color: '#FFFFFF',
    textAlign: 'right',
    //fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    //alignSelf: 'center',
    marginTop: 10,
   marginBottom: 10,
    marginRight: 20,
    fontFamily: "Lato"
   // padding: 10,
  },
  subTitleDark: {
    //justifyContent: 'flex-end',
    color: '#595959',
    textAlign: 'right',
    //fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    //alignSelf: 'center',
    //marginTop: 10,
   marginBottom: 10,
    marginRight: 20,
    fontFamily: "Lato"
   // padding: 10,
  },
  textStyle2: {
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
   // alignSelf: 'center',
   // marginTop: 10,
    marginBottom: 10,
    marginRight: 25,
    fontFamily: "Lato"
   // padding: 10,
  },
  textStyle3: {
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
   // alignSelf: 'center',
   // marginTop: 10,
    marginBottom: 10,
    marginRight: 35,
    fontFamily: "Lato"
   // padding: 10,
  },
  divider : {
    borderWidth: 0.2,
    borderColor:'#BFBFBF',
    //marginTop: 10,
    //marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    opacity: 0.5,
    width: '95%'
    
  },
  view5 : {
    backgroundColor: '#4D4D4D',
    margin: 15,
    marginTop: -25,
  },
  textStyle0: {
    justifyContent: 'flex-start',
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    //alignSelf: 'center',
    marginTop: 10,
   // marginBottom: 10,
    marginRight: 20,
    fontFamily: "Lato"
   // padding: 10,
  },
  textStyle20: {
    color: '#FFFFFF',
    textAlign: 'left',
    //fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
   // alignSelf: 'center',
   // marginTop: 10,
    marginBottom: 10,
    marginRight: 25,
    fontFamily: "Lato"
   // padding: 10,
  },
 });