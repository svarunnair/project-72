import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import JobPicker from '../cards/JobPicker'

function Jobs() {
  return (
    <ScrollView>

    <View style={styles.nav} >
        <Text style={styles.text}>My jobs</Text>
        <Text style={styles.text}>Preference</Text>
        <Text style={styles.text}>Post a free job</Text>
    </View>

    {/* content */}

    <JobPicker/>

    </ScrollView>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    nav:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5     
    },
    text:{
        padding:10,
        borderWidth:1,
        borderRadius:20,
        fontSize:17
    }
})

export default Jobs