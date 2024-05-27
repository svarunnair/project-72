import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Post from '../cards/Post'
import Navbar from '../components/Navbar'




function Home() {
  return (
    <View style={styles.container}>
    <Navbar/>
     <Post/>
    </View>
  )
}

const screenHeight=Dimensions.get('window').height

const styles=StyleSheet.create({
    container:{
         marginBottom: screenHeight * 0.07 ,
    }
})

export default Home