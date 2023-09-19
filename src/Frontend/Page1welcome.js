import { View, Text, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
export default function Page1welcome({ navigation }) {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', marginTop: 55, color: '#FF2511' }}>
        Welcome to {'\n'}Speedo Bus Tracking {'\n'} Application</Text>
      <Image style={{ marginTop: 40, height: 180, width: 373, alignItems: 'center' }}
        source={require('../img/bus.jpg')} />
      <View style={{ marginTop: 50, marginLeft: 20, marginRight: 20, marginBottom: 100 }}>
        <TouchableOpacity
          style={{
            height: 55,
            backgroundColor: '#FF2511',
            alignItems: 'center',
            paddingLeft: 15,
            paddingTop: 12,
            fontSize: 5,
          }} onPress={() => { navigation.navigate("page10") }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}