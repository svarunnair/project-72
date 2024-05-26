import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import JobPicker from './JobPicker'

function Premium() {
  return (
    <View style={styles.outer}>

    <View style={styles.line}/>

    <View style={styles.inner}>
    <Text style={styles.text}>PREMIUM</Text>

    <Text style={{fontWeight:"600",fontSize:20,color:"black"}}>Jobs where you're a top application</Text>
    
    <Text style={{color:"grey"}}>Based on your chances of hearing back</Text>

    {/* profile */}
    <View style={styles.profile}>

    <View style={styles.first}>
    <Image style={styles.img} source={{uri:"https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg"}}/>
    </View>
    <View style={styles.second}>
    <Text style={{color:"black",fontSize:16,fontWeight:"600"}}>See the full list of jobs where you'd be a top application</Text>
    
    <Text style={{color:"grey"}}>Millions of members use premium</Text>
     
     <View style={styles.btn}>
        <Text style={{color:"black",fontWeight:"500"}}>Try Premium for 0</Text>
     </View>

     <Text style={{color:"grey",}}>1-month free trial. Cancel any time</Text>



    </View>
    </View>
    
    </View>
    <JobPicker/>
    </View>
  )
}

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get('window').height

const styles=StyleSheet.create({
    outer:{
    

    },
    line:{
        borderWidth:2,
        borderColor:"orange",

    },
    btn:{

        width:screenWidth*.34,
        height:screenHeight*.04,
        borderRadius:20,
        padding:4,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange",

    },
    text:{
        fontWeight:"500",
        color:"black"
    }
    ,
    inner:{
        padding:10,
        display:"flex",
        gap:10,
    },
    img:{
        width:screenWidth*.14,
        height:screenHeight*.08,
        borderRadius:100,
    },
    profile:{
        display:"flex",
        flexDirection:"row",
       
        gap:10,
    },
    first:{
      
        borderColor:"blue",
    },
    second:{

 borderColor:"red",
 gap:14,
    }
  
})

export default Premium