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


const MapScreen = () => {
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
       <View style={styles.mapContainer}>
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
     </View>
    </View>
  
    );
  };
  
  export default MapScreen;

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#595959'
    },
    mapContainer: {
        marginTop: -5,
        marginLeft: 15,
        marginRight: 15,
       height: '90%',
       //opacity: 0.8
       marginBottom: -5,
      },
      map: {
        height: '80%',
        opacity: 0.7
      },
});