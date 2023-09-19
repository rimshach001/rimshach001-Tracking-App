import { View, SafeAreaView, FlatList, Button, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { Image } from 'react-native-elements';
// import { Button } from 'react-native-elements';

export default function Page12_10Bus() {
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

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image style={{ height: 300, width: 373, alignItems: 'center', }}
        source={require('../img/bus10.jpg')} />
      <ScrollView>

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

          <View style={{ width: 300, alignSelf: "center" }}>
          <View style={{ marginBottom: 5, marginTop: 15 }}>
              <Button color="#FF2511" onPress={ShowMenu8} title={` Wahdat Road \u2193`} />
              {
                show8 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:16 AM {"\n"}
                  Bus comes after every 6 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu} title={` Elephant Stop   \u2193`} />
              {
                show && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:20 AM {"\n"}
                  Bus comes after every  6 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu2} title={`Karim block  \u2193`} />
              {
                show2 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:25 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu1} title={`Sikandar block   \u2193`} />
              {
                show1 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:27 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu3} title={`Science college   \u2193`} />
              {
                show3 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:30 AM {"\n"}
                  Bus comes after every  7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu4} title={`Bhekewal morr  \u2193`} />
              {
                show4 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:34 AM {"\n"}
                  Bus comes after every 7 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu5} title={`Wahdat colony   \u2193`} />
              {
                show5 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:40 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu6} title={`Bank stop  \u2193`} />
              {
                show6 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:42 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu7} title={`Karma abad  \u2193`} />
              {
                show7 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 R.A Bazar  {"\n"}
                  Start Time 6:44 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu9} title={`Canal \u2193`} />
              {
                show9 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 RA Bazar  {"\n"}
                  Start Time 6:55 AM {"\n"}
                  Bus comes after every  7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu10} title={`Ichra  \u2193`} />
              {
                show10 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 RA Bazar  {"\n"}
                  Start Time 6:56 AM {"\n"}
                  Bus comes after every  7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu11} title={`Shama \u2193`} />
              {
                show11 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 RA Bazar  {"\n"}
                  Start Time 6:59 AM {"\n"}
                  Bus comes after every  7 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu12} title={`Qartaba   \ \u2193`} />
              {
                show12 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT15 RA Bazar  {"\n"}
                  Start Time 7:01 AM {"\n"}
                  Bus comes after every 7 Minute
                </Text>)
              }
            </View>


          </View>
        </SafeAreaView>


      </ScrollView>
    </View>
  )
}
