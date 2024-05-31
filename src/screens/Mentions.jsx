import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

function Mentions() {
  return (
    <View style={styles.container}>
    <Text>
Mentions.....
    </Text>
    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
  container:{
    borderWidth:1
  }
})

export default Mentions