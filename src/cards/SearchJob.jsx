import { Icon } from '@rneui/base'
import React from 'react'
import { Text } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'

function SearchJob() {
  return (
    <View style={styles.container}>
       <View style={styles.inner}>
         <Text style={{fontWeight:"500",fontSize:16}}>Job search smaeter</Text>
         <Icon type='ionicons' name='home-outline'/>
        </View>

    </View>
  )
}
const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:10
    },
    inner:{
        borderWidth:2,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default SearchJob