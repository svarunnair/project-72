import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
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

const styles=StyleSheet.create({
    container:{
       
    }
})

export default Home