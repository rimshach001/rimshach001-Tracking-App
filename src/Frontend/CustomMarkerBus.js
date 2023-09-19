import React from 'react'
import {View, StyleSheet, Image } from 'react-native'

// for bus marker
export default function CustomMarkerBus({item})  {
    return (
        <View style = {styles.roundMarker}>
            <Image style = {styles.roundImage} source = {{uri: item.markerImage}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    roundMarker: {
        height: 0,
        width: 0,
        backgroundColor: 'white',
        borderRadius: 25,
        
    },
    roundImage: {
        height: 40,
        width: 40,
        borderRadius: 25
    }

})
