
import React from 'react'
import { Text } from 'react-native'
import { Image, TextInput } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'

function Footer() {
  return (
    <View style={styles.container}>
<Text style={styles.txt}>Home</Text>
<Text style={styles.txt}>My Network</Text>
<Text style={styles.txt}>Post</Text>
<Text style={styles.txt}>Notification</Text>
<Text style={styles.txt}>Jobs</Text>

    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height


const styles=StyleSheet.create({
    container:{
        borderWidth:3,
        borderColor:"red",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    txt:{
        color:"grey"
    },
  
})

export default Footer