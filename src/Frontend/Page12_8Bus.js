import { View, Text, SafeAreaView, Button, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function Page12_8Bus() {
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
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
      <Image style={{ height: 300, width: 373, alignItems: 'center', }}
        source={require('../img/bus8.jpg')} />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

          <View style={{ width: 300, alignSelf: "center",marginBottom:30 }}>
            <View style={{ marginBottom: 5, marginTop: 15 }}>
              <Button onPress={ShowMenu} title={`Canal \u2193`} color="#FF2511" />
              {
                show && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:00 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu1} title={`Qaddafi Stadium   \u2193`} />
              {
                show1 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:02 AM {"\n"}
                  Bus comes after every 6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu2} title={`Kalma Chowk   \u2193`} />
              {
                show2 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:06 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu3} title={`Barket Market  \u2193` } />
              {
                show3 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:09 {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu4} title={`Campus Pull   \u2193`} />
              {
                show4 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:14 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu5} title={`Gate no. 4  \u2193`} />
              {
                show5 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:15 AM{"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button onPress={ShowMenu6} title={`Hailey College  \u2193`} color="#FF2511" />
              {
                show6 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:17 AM {"\n"}
                  Bus comes after every  6 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu7} title={`IBA Stop    \ \u2193`} />
              {
                show7 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:19 AM {"\n"}
                  Bus comes after every 6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu8} title={`Shah Di Khoi  \u2193`} />
              {
                show8 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:20 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu9} title={`Wafaqi Colony \u2193`} />
              {
                show9 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:26 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu10} title={`Doctors Hospital  \u2193`} />
              {
                show10 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:14 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu11} title={`PCSIR-1   \u2193`} />
              {
                show11 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:28 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            {/* ---------------------------------------------------- */}
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu12} title={`g-4 Johar town    \ \u2193`} />
              {
                show12 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:29 AM {"\n"}
                  Bus comes after every 6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu13} title={`Hajarwal  \u2193`} />
              {
                show13 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:30 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu14} title={`Gate-1 Canal View    \u2193`} />
              {
                show14 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:36 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu15} title={`Thokar Terminal    \u2193`} />
              {
                show15 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT08 Daewoo Terminal  {"\n"}
                  Start Time 6:39 AM {"\n"}
                  Bus comes after every  6 Minute
                </Text>)
              }
            </View>
           


          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}