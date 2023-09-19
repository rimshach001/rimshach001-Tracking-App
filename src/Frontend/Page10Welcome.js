import { View, Text, Button, TouchableOpacity ,Image} from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'

export default function Page10Welcome({ navigation }) {
  return (
    <View style={{backgroundColor:'white', height:600}}>
      <View >
        <View style={{
          marginLeft: 10, marginRight: 10,
          backgroundColor: 'white', marginTop: 30
        }}>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              marginTop: 34,  
              font:'white',
              paddingLeft:15,
              paddingTop:18,
            }} 
            onPress={() => { navigation.navigate("page11map") }}
          >
            <Text style={{fontSize:20,color:'white'}}>Bus Live Tracking 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511',  
              marginTop: 34, 
              paddingLeft:15,
              paddingTop:18,
            }} 
            onPress={() => { navigation.navigate("page12") }}
          >
            <Text style={{fontSize:20,color:'white'}}>Buses Routes</Text>
          </TouchableOpacity>
         
        </View>
        <Image style={{marginTop:35,height:180, width:375, alignItems:'center'}} source={require('../img/bus.jpg')} />

      </View>
    </View>
  )
}