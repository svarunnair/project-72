import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

const eventData=[
    {
        image:"https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
        name:"THE FUTURE & SAFE OF UAS/UAV/EVTOL/VTOL CARGO DRONES",
        date:"Thu May 30, 7:30 AM",
        vote:"7,898" 
        },
         {
        image:"https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
        name:"The Enterpreneur Action Mastermind Experience T.E.A.M.X",
        date:"Fri Jun 20, 5:30 PM",
        vote:"5,598" 
        },
]

function Events() {
  return (
    <View style={styles.container}>

    <View style={styles.box}>

    {eventData.map((item)=>(
      <View style={styles.mapDiv}>

      <Image style={styles.img} source={{uri:item.image}}/>
      {/*  */}
      <View style={styles.text}>
             <View style={styles.firstbox}>
              <Text>{item.name}</Text>
               <Text>{item.date}</Text>
               <Text>{item.vote} attendees</Text>
              </View>
       <TouchableOpacity style={styles.btn}>
        <Text style={{color:"blue"}}>View</Text>
       </TouchableOpacity>
      </View>
      {/*  */}
     

      </View>
    ))}

</View>

<View style={styles.seeall}>
<Text style={{color:"blue",fontSize:17}}>See all</Text>

</View>





    </View>
  )
}


const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height


const styles=StyleSheet.create({
    container:{
      
        padding:10,
      

    },
    seeall:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:10,
    },
    text:{
   
      borderColor:"red",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:10
    },
    firstbox:{
      width:screenWidth*.5,
    }
    ,
    box:{
    
     gap:10

    },
    btn:{
      borderWidth:1,
      borderColor:"blue",
      borderRadius:20,
      height:screenHeight*.05,
      padding:10,
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    img:{
      width:"100%",
      borderRadius:10,
      height:screenHeight*.2
    },
    mapDiv:{
      borderWidth:.4,
      borderRadius:10,
      display:"flex",
      gap:10,
    }
})
export default Events