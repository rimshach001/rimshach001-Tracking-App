import React, { useEffect, useState } from 'react';
// Import required components
import { Alert, SafeAreaView, StyleSheet, Text, View, SliderPanel } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
  locations16, locations8, locations11, bus16, locations10,
  bus11, bus8, bus10, bus16opposite, bus11opposite, locations15, bus15
} from './DataBus';
import CustomMarker from './CustomMarker';
// import CustomMarkerBus from './CustomMarkerBus';
import Geolocation from '@react-native-community/geolocation'

import MapViewDirections from 'react-native-maps-directions';
import CustomMarkerBus from './CustomMarkerBus';
import CustomMarkerBusTopToBottom from './CustomMarkerBusTopToBottom';
import { GOOGLE_MAP_API } from '../Key/GoogleMapKey';


export default function Page11map() {


  // const Bus16Data=firebaseConfig.database().ref("Bus16");
  // Bus16Data.on("Data",datasnap=>{
  //   console.log(datasnap.val());
  // })
  const [, setUserLocation] = useState({});

  // current position coords
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  useEffect(() => {
    getLiveLocation()
  }, []);
  const [dest, setdest] = useState({
    latitude: 31.4695,
    longitude: 74.2992,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  })
  const getLiveLocation = async () => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation()
      console.log("okk")
    }, 4000);
    return () => clearInterval(interval)
  }, [])


  // Setting latitude longitude of bus 16 (forward)
  const bus16Title1 = "Bus16-1"
  const bus16Lat1 = 31.48927;
  const bus16Lng1 = 74.32829;

  // Setting latitude longitude of bus 16 (backward)
  const bus16Title2 = "Bus16-2"
  const bus16Lat2 = 31.46785;
  const bus16Lng2 = 74.29936;

  // Setting latitude longitude of bus 16 (forward)
  const bus16Title3 = "Bus16-3"
  const bus16Lat3 = 31.46923;
  const bus16Lng3 = 74.24216;


  // Setting latitude longitude of bus 11 (forward)

  const bus11Title1 = "Bus11-1"
  const bus11Lat1 = 31.51120;
  const bus11Lng1 = 74.34130;
  // Setting latitude longitude of bus 11 (backward)
  const bus11Title2 = "Bus11-2"
  const bus11Lat2 = 31.53797;
  const bus11Lng2 = 74.26781;


  // Setting latitude longitude of bus 08
  const bus08Title1 = "Bus08"
  const bus08Lat1 = 31.47432;
  const bus08Lng1 = 74.25688;

  // Setting latitude longitude of bus 10
  const bus10Title1 = "Bus10"
  const bus10Lat1 = 31.53641;
  const bus10Lng1 = 74.32024;

  // Setting latitude longitude of bus 15
  const bus15Title1 = "Bus15"
  const bus15Lat1 = 31.54937;
  const bus15Lng1 = 74.31501;



  function getDistanceFromLatLonInKm2(lat2, lon2, buslat1, buslon1, buslat2, buslon2, name1, name2) {

    var R = 6371;
    //  for bus 1
    var dLat = deg2rad(lat2 - buslat1);
    var dLon = deg2rad(lon2 - buslon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(buslat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var time = d / 40;
    var drive = time * 60;
    var walk = d * 12;
    //   for bus 2
    var dLat2 = deg2rad(lat2 - buslat2);
    var dLon2 = deg2rad(lon2 - buslon2);
    var a2 =
      Math.sin(dLat2 / 2) * Math.sin(dLat2 / 2) +
      Math.cos(deg2rad(buslat2)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon2 / 2) * Math.sin(dLon2 / 2)
      ;
    var c2 = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
    var d2 = R * c2;
    var time2 = d2 / 40;
    var drive2 = time2 * 60;


    return (name1 + " (" + drive.toFixed(0) + " min), "
      // + d.toFixed(1) + " km away)  and "
      + name2 + " (" + drive2.toFixed(0) + " min) "
      // + d2.toFixed(1) + " km away) "
    );
  }


  function getDistanceFromLatLonInKm3(lat2, lon2, buslat1, buslon1, buslat2, buslon2, buslat3, buslon3, name1, name2, name3) {

    var R = 6371;
    //  for bus 1
    var dLat = deg2rad(lat2 - buslat1);
    var dLon = deg2rad(lon2 - buslon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(buslat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var time = d / 40;
    var drive = time * 60;
    var walk = d * 12;
    //   for bus 2
    var dLat2 = deg2rad(lat2 - buslat2);
    var dLon2 = deg2rad(lon2 - buslon2);
    var a2 =
      Math.sin(dLat2 / 2) * Math.sin(dLat2 / 2) +
      Math.cos(deg2rad(buslat2)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon2 / 2) * Math.sin(dLon2 / 2)
      ;
    var c2 = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
    var d2 = R * c2;
    var time2 = d2 / 40;
    var drive2 = time2 * 60;
    //   for bus 3
    var dLat3 = deg2rad(lat2 - buslat3);
    var dLon3 = deg2rad(lon2 - buslon3);
    var a3 =
      Math.sin(dLat3 / 2) * Math.sin(dLat3 / 2) +
      Math.cos(deg2rad(buslat3)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon3 / 2) * Math.sin(dLon3 / 2)
      ;
    var c3 = 2 * Math.atan2(Math.sqrt(a3), Math.sqrt(1 - a3));
    var d3 = R * c3;
    var time3 = d3 / 40;
    var drive3 = time3 * 60;

    return (name1 + " (" + drive.toFixed(0) + " min), "
      // + d.toFixed(1) + " km away)  and "
      + name2 + " (" + drive2.toFixed(0) + " min), "
      // + d2.toFixed(1) + " km away) "
      + name3 + " (" + drive3.toFixed(0) + " min)"
    );
  }


  function getDistanceFromLatLonInKm1(lat1, lon1, lat2, lon2, name) {

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // delta of latitute
    var dLon = deg2rad(lon2 - lon1); //delta of longitude
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    // var time = d / 60;
    // var drive = time * 70;
    return (d.toFixed(1) + " km away from " + name);
  }
  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          region={{
            latitude: 31.4848,
            longitude: 74.3006,
            latitudeDelta: 0.11,
            longitudeDelta: 0.11,
          }}
        // onUserLocationChange={(event) =>
        //   setUserLocation({
        //     latitude: event.nativeEvent.coordinate.latitude,
        //     longitude: event.nativeEvent.coordinate.longitude,
        //   })
        // }
        // showsUserLocation
        >
          {/* my current location */}
          {
            bus16opposite.map(marker => (
              <Marker
                title="Bus16-2"
                coordinate={position}>

                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {/* <MapViewDirections
            origin={position}
            destination={dest}
            apikey="AIzaSyCvZqfm4FgX_V6O8VJEdy06PPQ1D3i-DB0"
            strokeWidth={6}
            strokeColor="red"
          /> */}
          {/* <Marker
            title='destination'
            description='ok'
            coordinate={dest}
          /> */}
          {
            locations15.map(marker => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
              // description={getDistanceFromLatLonInKm1(marker.latitude, marker.longitude, bus15Lat1, bus15Lng1, bus15Title1)}

              >
                <CustomMarker item={marker} />
              </Marker>
            ))
          }
          {
            locations16.map(marker => (
              <Marker Style={{ width: 30 }}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
                description={getDistanceFromLatLonInKm3(marker.latitude, marker.longitude,
                  bus16Lat1, bus16Lng1, position.latitude, position.longitude, bus16Lat3, bus16Lng3, bus16Title1, bus16Title2, bus16Title3)}
              >
                <CustomMarker item={marker} />
              </Marker>

            ))
          }
          {
            locations11.map(marker => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
                description={getDistanceFromLatLonInKm2(marker.latitude, marker.longitude, bus11Lat1, bus11Lng1, bus11Lat2, bus11Lat2, bus11Title1, bus11Title2)}

              >
                <CustomMarker item={marker} />
              </Marker>
            ))
          }
          {
            locations8.map(marker => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
                description={getDistanceFromLatLonInKm1(marker.latitude, marker.longitude, bus08Lat1, bus08Lng1, bus08Title1)}
              >
                <CustomMarker item={marker} />
              </Marker>
            ))
          }
          {
            locations10.map(marker => (
              <Marker
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
                description={getDistanceFromLatLonInKm1(marker.latitude, marker.longitude, bus10Lat1, bus10Lng1, bus10Title1)}

              >
                <CustomMarker item={marker} />
              </Marker>
            ))
          }
          {
            bus16.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus16Lat1,
                  longitude: bus16Lng1
                }}
                title={bus16Title1}
                description={getDistanceFromLatLonInKm1(position.latitude, position.longitude, bus16Lat1, bus16Lng1)}
              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {
            bus16opposite.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus16Lat3,
                  longitude: bus16Lng3
                }}
                title={bus16Title3}
                description={getDistanceFromLatLonInKm1(position.latitude, position.longitude, bus16Lat3, bus16Lng3)}
              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {
            bus11.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus11Lat1,
                  longitude: bus11Lng1
                }}
                title={bus11Title1}
              >
                <CustomMarkerBusTopToBottom item={marker} />
              </Marker>
            ))
          }
          {
            bus11opposite.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus11Lat2,
                  longitude: bus11Lng2
                }}
                title={bus11Title2}
              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {
            bus8.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus08Lat1,
                  longitude: bus08Lng1
                }}
                title={bus08Title1}
              // description={getDistanceFromLatLonInKm1(marker.latitude, marker.longitude, bus08Lat1, bus08Lng1, bus08Title1)}

              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {
            bus10.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus10Lat1,
                  longitude: bus10Lng1
                }}
                title={bus10Title1}
              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }
          {
            bus15.map(marker => (
              <Marker
                coordinate={{
                  latitude: bus15Lat1,
                  longitude: bus15Lng1
                }}
                title={bus15Title1}
              >
                <CustomMarkerBus item={marker} />
              </Marker>
            ))
          }


        </MapView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
