import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Post from '../cards/Post'




function Home() {
  return (
    <View style={styles.container}>
     <Post/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
       
    }
})

export default Home