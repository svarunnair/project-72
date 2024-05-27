import React from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, View } from 'react-native'

function MyPosts() {
  return (
    <View style={styles.content}>

    <Image style={styles.img} source={{uri:"https://m.media-amazon.com/images/I/31Qeqr+5idL._AC_UF1000,1000_QL80_.jpg"}}/>

    </View>
  )
}
const screenHeight=Dimensions.get("window").height
const screenWidth=Dimensions.get("window").width

const styles=StyleSheet.create({
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    img:{
        width:screenWidth*.5,
        height:screenHeight*.3
    }
})

export default MyPosts