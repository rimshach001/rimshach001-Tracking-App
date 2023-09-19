import { View, Text, SafeAreaView, Button, Image, ScrollView } from 'react-native'
import React ,{ useState } from 'react'

export default function Page12_16Bus() {
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
  const [show19, setShow19] = useState(false);
  const [show20, setShow20] = useState(false);
  const [show21, setShow21] = useState(false);
  const [show22, setShow22] = useState(false);
  const [show23, setShow23] = useState(false);
  const [show24, setShow24] = useState(false);

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
  
  const ShowMenu19 = () => {
    if (show19 == true) {
      setShow19(false)
    } else {
      setShow19(true)
    }
  }
  const ShowMenu20 = () => {
    if (show20 == true) {
      setShow20(false)
    } else {
      setShow20(true)
    }
  }

  const ShowMenu21 = () => {
    if (show21 == true) {
      setShow21(false)
    } else {
      setShow21(true)
    }
  }
  const ShowMenu22 = () => {
    if (show22 == true) {
      setShow22(false)
    } else {
      setShow22(true)
    }
  }
  const ShowMenu23 = () => {
    if (show23 == true) {
      setShow23(false)
    } else {
      setShow23(true)
    }
  }

  const ShowMenu24 = () => {
    if (show24 == true) {
      setShow24(false)
    } else {
      setShow24(true)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <ScrollView >
      <Image style={{ height: 350, width: 373, alignItems: 'center' }}
        source={require('../img/bus16.jpg')} />
        <SafeAreaView style={{ flex: 1}}>

          <View style={{ width: 300, alignSelf: "center", marginBottom: 30 }}>
            <View style={{ marginBottom: 5, marginTop: 15 }}>
              <Button onPress={ShowMenu} title={`Canal \u23EC`} color="#FF2511" />
              {
                show && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:20 AM {"\n"}
                  Bus comes after every 20 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu1} title={`Qaddafi Stadium    \u2304`} />
              {
                show1 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:22 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu2} title='Kalma Chowk' />
              {
                show2 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:26 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu3} title='Model town Morr' />
              {
                show3 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:28 {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu4} title='Bank Square' />
              {
                show4 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:32 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu5} title='Girls College' />
              {
                show5 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:35 AM{"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button onPress={ShowMenu6} title={`F- Block \u23EC`} color="#FF2511" />
              {
                show6 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:36 AM {"\n"}
                  Bus comes after every 20 Minute

                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu7} title={` Club Chowk   \u2304`} />
              {
                show7 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:37 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu8} title='Shaheed Chowk' />
              {
                show8 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:40 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu9} title='Pace Shopping Center' />
              {
                show9 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:41 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu10} title='Mcdonalds' />
              {
                show10 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:43 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu11} title='Mochipura Morr' />
              {
                show11 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:45 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu12} title={`Akbar Chowk    \u2304`} />
              {
                show12 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:47 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu13} title='Shouq Chowk' />
              {
                show13 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:48 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu14} title='Allah Hoo Chowk' />
              {
                show14 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time  6:50 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu15} title='Aleem Darr' />
              {
                show15 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:53 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu16} title='LDA' />
              {
                show16 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:56 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu17} title='Shadiwal Chowk' />
              {
                show17 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 6:59 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu18} title='PCSIR' />
              {
                show18 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 7:11 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)

              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu19} title='Ayub Chowk' />
              {
                show19 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 67:14 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu20} title='Expo Center' />
              {
                show20 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time  7:18 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu21} title='Shan Chowkr' />
              {
                show21 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 7:20 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu22} title='Ring Chowk' />
              {
                show22 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 7:23 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu23} title='Thokar Niaz Baig' />
              {
                show23 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 7:26 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Button color="#FF2511" onPress={ShowMenu24} title='Daewoo Terminal' />
              {
                show24 && (<Text style={{ marginLeft: 5, marginTop: 5, padding: 5, color: '#000000' }}>
                  FRT16 Daewoo Terminal  {"\n"}
                  Start Time 7:26 AM {"\n"}
                  Bus comes after every 20 Minute
                </Text>)
              }
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}