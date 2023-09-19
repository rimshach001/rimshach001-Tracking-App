import React from 'react'
import {View, StyleSheet, Image } from 'react-native'


const CustomMarker = ({item}) => {
    return (
        <View style = {styles.roundMarker}>
            <Image style = {styles.roundImage} source = {{uri: item.markerImage}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    roundMarker: {
        height: 15,
        width: 15,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    roundImage: {
        height: 15,
        width: 15,
        borderRadius: 25
    }

})

export default CustomMarker