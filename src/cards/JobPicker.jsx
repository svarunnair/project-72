import React from 'react'
import { Text } from 'react-native'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

const jobData=[
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        name:"Frontend Developer",
        role:"Amazone",
        location:"Bengaluru"
    },{
        image:"https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png",
        name:"ReactJs Developer",
        role:"Google",
        location:"Delhi"
    },{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50TNVA_UJSqeKMyeRynw3niVFYgH2sTfezMwxFpTSLw&s",
        name:"Full-Stack Developer",
        role:"TexTech",
        location:"Mumbai"
    },
]

function JobPicker() {
  return (
    <View>

        <Text style={{fontSize:18,color:"black",fontWeight:"600",padding:10}}>Job picks for you</Text>
        {jobData.map((item)=>(
            <View style={styles.map}>

            <View style={styles.control}>

            <Image style={styles.img} source={{uri:item.image}}/>
            <View style={styles.detail}>
             <Text style={{fontSize:17,fontWeight:"600",color:"black"}}>{item.name}</Text>
              <Text style={{fontWeight:"400",color:"black"}}>{item.role}</Text>
               <Text style={{fontWeight:"300",color:"black"}}>{item.location}</Text>

            </View>
            </View>
            <Text style={{fontWeight:"600",fontSize:19,color:"black"}}>X</Text>
           
          
            </View>
        ))}
         <View style={styles.show}>
            <Text style={{color:"black",fontSize:14,}}>Show all ></Text>
           </View>

        
    </View>
  )
}
const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    map:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    img:{
        width:screenWidth*.14,
        height:screenHeight*.07,
    },
    detail:{
        
    },
    show:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    control:{
        
        display:"flex",
        flexDirection:"row",
        gap:screenWidth*.05
    }
})

export default JobPicker