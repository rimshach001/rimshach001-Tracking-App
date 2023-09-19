import { View, Text, SafeAreaView, FlatList, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-elements';

export default function Page12_11Bus() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [show16, setShow16] = useState(false);
  const [show17, setShow17] = useState(false);
  const [show18, setShow18] = useState(false);

  const ShowMenu = () => {
    if (show == true) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const ShowMenu1 = () => {
    if (show1 == true) {
      setShow1(false)
    } else {
      setShow1(true)
    }
  }

  const ShowMenu2 = () => {
    if (show2 == true) {
      setShow2(false)
    } else {
      setShow2(true)
    }
  }

  const ShowMenu3 = () => {
    if (show3 == true) {
      setShow3(false)
    } else {
      setShow3(true)
    }
  }

  const ShowMenu4 = () => {
    if (show4 == true) {
      setShow4(false)
    } else {
      setShow4(true)
    }
  }

  const ShowMenu5 = () => {
    if (show5 == true) {
      setShow5(false)
    } else {
      setShow5(true)
    }
  }

  const ShowMenu6 = () => {
    if (show6 == true) {
      setShow6(false)
    } else {
      setShow6(true)
    }
  }
  // ---------------------------
  const ShowMenu7 = () => {
    if (show7 == true) {
      setShow7(false)
    } else {
      setShow7(true)
    }
  }

  const ShowMenu8 = () => {
    if (show8 == true) {
      setShow8(false)
    } else {
      setShow8(true)
    }
  }

  const ShowMenu9 = () => {
    if (show9 == true) {
      setShow9(false)
    } else {
      setShow9(true)
    }
  }

  const ShowMenu10 = () => {
    if (show10 == true) {
      setShow10(false)
    } else {
      setShow10(true)
    }
  }

  const ShowMenu11 = () => {
    if (show11 == true) {
      setShow11(false)
    } else {
      setShow11(true)
    }
  }

  const ShowMenu12 = () => {
    if (show12 == true) {
      setShow12(false)
    } else {
      setShow12(true)
    }
  }

  const ShowMenu13 = () => {
    if (show13 == true) {
      setShow13(false)
    } else {
      setShow13(true)
    }
  }
  const ShowMenu14 = () => {
    if (show14 == true) {
      setShow14(false)
    } else {
      setShow14(true)
    }
  }

  const ShowMenu15 = () => {
    if (show15 == true) {
      setShow15(false)
    } else {
      setShow15(true)
    }
  }
  const ShowMenu16 = () => {
    if (show16 == true) {
      setShow16(false)
    } else {
      setShow16(true)
    }
  }
  const ShowMenu17 = () => {
    if (show17 == true) {
      setShow17(false)
    } else {
      setShow17(true)
    }
  }

  const ShowMenu18 = () => {
    if (show18 == true) {
      setShow18(false)
    } else {
      setShow18(true)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView >
      <Image style={{ height: 300, width: 373, alignItems: 'center', }}
        source={require('../img/bus11.jpg')} />
        <SafeAreaView style={{ flex: 1 }}>

          <View style={{ width: 300, alignSelf: "center", marginBottom: 30 }}>
            <View style={{ marginBottom: 5, marginTop: 15 }}>
              {/* “🠟” (U+1F81F) */}
              <Button onPress={ShowMenu} title={`Main Market \u23EC`} color="#FF2511" />
              {
                show && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:21 AM {"\n"}
                  Bus comes after every 15 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu1} title={`Mini Market    \u2304`} />
              {
                show1 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:23 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu2} title='Hafeez Center' />
              {
                show2 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:24 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu3} title='Liberty Chowk' />
              {
                show3 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:26 {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu4} title='Center Point' />
              {
                show4 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:29 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu5} title='Barket Market' />
              {
                show5 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:33 AM{"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button onPress={ShowMenu6} title={`Campus Pull \u23EC`} color="#FF2511" />
              {
                show6 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:39 AM {"\n"}
                  Bus comes after every 15 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu7} title={`Sheikh Zaid Bus Stop    \u2304`} />
              {
                show7 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:41 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu8} title='Pilot School' />
              {
                show8 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:45 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu9} title='Ghulshan e Iqbal' />
              {
                show9 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:49 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu10} title='Dubai Chowk' />
              {
                show10 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:52 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu11} title='Kali Kothi Bus Stop' />
              {
                show11 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:55 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu12} title={`Scheme Morr    \u2304`} />
              {
                show12 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:56 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu13} title='Grand battery shop' />
              {
                show13 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 6:59 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu14} title='Yakeen Khana' />
              {
                show14 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 7:03 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu15} title='City Bus Terminal' />
              {
                show15 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 7:05 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu16} title='Shezan Bakery' />
              {
                show16 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 7:06 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu17} title='Bilal Daewoo' />
              {
                show17 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 7:10 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu18} title='Babu Sabu' />
              {
                show18 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT11 Babu Sabu  {"\n"}
                  Start Time 7:12 AM {"\n"}
                  Bus comes after every 15 Minute
                </Text>)
              }
            </View>



          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}