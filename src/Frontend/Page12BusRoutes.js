import { View, Text,TouchableOpacity ,ScrollView} from 'react-native'

export default function Page12BusRoutes({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{
          marginLeft: 10, marginRight: 10,
           marginTop: 10,marginBottom:10
        }}>
          <TouchableOpacity
            style={{
              height: 70, 
              // color:'red',
              backgroundColor: '#FF2511', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              
            }} 
            onPress={() => { navigation.navigate("page12_15Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 15</Text>
            <Text style={{color:'white'}}>Bhatti Chowk - R.A Bazar</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511',  
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              // borderRadius: 5
            }} 
            onPress={() => { navigation.navigate("page12_8Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 8</Text>
            <Text style={{color:'white'}}>Canal - Thokar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              // alignItems: 'center', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              fontSize:10,
              
            }} onPress={() => { navigation.navigate("page12_11Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 11</Text>
            <Text style={{color:'white'}}>Babu Sabu - Main Market</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              // alignItems: 'center', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              
            }} 
            onPress={() => { navigation.navigate("page12_10Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 10
            </Text>
            <Text style={{color:'white'}}>Qartaba - Wahdat road</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              fontSize:10,
            }} onPress={() => { navigation.navigate("page12_16Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 16</Text>
            <Text style={{color:'white'}}>Canal - Thokar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
            }} 
            onPress={() => { navigation.navigate("page12_16Bus") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 13</Text>
            <Text style={{color:'white'}}>Baggrain - Kalma chowk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              // alignItems: 'center', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
            }} 
            // onPress={() => { navigation.navigate("page10") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. 15
            {/* <Text style={{ backgroundColor:'white'}}>arrow</Text> */}
            {/* <Icon name="arrow-right" size={20} color="black" type="entypo"/>   */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              // borderColor:'#FF2511',
              // borderBottomWidth:10,
              // borderRightWidth:5,
              // alignItems: 'center', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              // borderRadius: 5
            }} 
            onPress={() => { navigation.navigate("page12") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 70, 
              backgroundColor: '#FF2511', 
              // alignItems: 'center', 
              marginTop: 14, 
              paddingLeft:15,
              paddingTop:13,
              fontSize:10,
              
            }} onPress={() => { navigation.navigate("page10") }}
          >
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Bus Route No. </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}