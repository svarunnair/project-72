import React from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import JobPicker from '../cards/JobPicker'
import Discover from '../cards/Discover'
import Premium from '../cards/Premium'
import SimilarJobs from '../cards/SimilarJob'
import { useRoute } from '@react-navigation/native'
import NavbarThree from '../components/NavBarThree'


function Jobs() {

   const route = useRoute();

  const itemPath = route.params;

    console.log("params..................",itemPath)

  return (
    <View>
    <NavbarThree/>
    <ScrollView style={styles.content}>

    <View style={styles.nav} >
        <Text style={styles.text}>My jobs</Text>
        <Text style={styles.text}>Preference</Text>
        <Text style={styles.text}>Post a free job</Text>
    </View>

    {/* content */}
    <View style={styles.hr}/>

    <JobPicker/>
    <View style={styles.hr2}/>

    {/* resent search */}
    <Discover/>

     <View style={styles.hr3}/>

     <Premium/>

          <View style={styles.hr3}/>
          <View style={{padding:10}}>
            <Text style={{fontWeight:"600",fontSize:22,color:"black"}}>Similar to a job you applied to 11 days ago</Text>
            <Text style={{color:"grey"}}>Senior Zoho Developer at Benivo</Text>
          </View>

     <SimilarJobs/>

    </ScrollView>
    </View>
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
        paddingVertical:5   ,
        backgroundColor:"#fff"  
    },
    content:{
      marginBottom:screenHeight*.1
    },
    hr:{
      borderWidth:screenHeight*.007,
      borderColor:"#DADADA",
    
    },
    hr2:{
      borderWidth:screenHeight*.007,
      borderColor:"#DADADA",
    },
    hr3:{
      borderWidth:screenHeight*.007,
      marginTop:screenHeight*.02,
       borderColor:"#DADADA",
    },
    text:{
        padding:10,
        borderWidth:.4,
        borderRadius:20,
        fontSize:17,
        color:"black"
    }
})

export default Jobs