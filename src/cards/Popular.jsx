
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'

const popularData=[
    {
        image:"https://s3.amazonaws.com/media.mixrank.com/profilepic/5170374cee17b1b5887398c03f47506c",
        name:"Hitesh Choudary",
        backgroundImg:"https://thumbs.dreamstime.com/z/futuristic-illustration-book-cover-group-people-red-background-ai-generated-271568122.jpg",
        caption:"PAN India Job Opening",
        followers:"23,211"
    },
     {
        image:"https://media.licdn.com/dms/image/D4D03AQGU-qksPT3_gw/profile-displayphoto-shrink_400_400/0/1714152901586?e=1722470400&v=beta&t=_ZQjiZK79PplJT1L0bHoOwILGd0-1kee5azgTQiLMEc",
        name:"Mitra Kumari",
        backgroundImg:"https://timelinecovers.pro/facebook-cover/download/group-hand-fist-on-business-meeting-facebook-cover.jpg",
        caption:"PAN India Job Opening",
        followers:"23,211"
    },
]

function Popular() {
  return (
    <View style={styles.container}>

{popularData.map((item)=>(
    <View style={styles.map}>
 <Image style={styles.bcimg} source={{uri:item.backgroundImg}}/>
  <View style={styles.profile}>
    <Image source={{uri:item.image}} style={styles.img}/>

    <TouchableOpacity style={styles.btn}>
 <Text style={{color:"blue",fontWeight:"400"}}>Subscribe</Text>
    </TouchableOpacity>

  </View>

<View style={styles.text}>
  <Text style={{color:"black",fontWeight:"600"}}>{item.name}</Text>
  <Text style={{color:"grey"}}>{item.caption}</Text>
  <Text style={{color:"grey"}}>{item.followers} subscribers</Text>
   </View>
    </View>
))}
   
    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    container:{
      
        display:"flex",
        flexDirection:"column",
        gap:screenHeight*.01,
        
    },
    btn:{   
        borderWidth:1,
        borderColor:"blue",
        marginTop:screenHeight*.018,
        marginRight:screenWidth*.04,
        width:screenWidth*.2,
        height:screenHeight*.05,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,

    },
    text:{
        paddingHorizontal:5,
        padding:1,
        paddingHorizontal:4,
        flexWrap:"wrap",
        display:"flex",
        flexDirection:"column",
        gap:5,
        marginBottom:20,
        paddingLeft:10,
    },
    map:{
       borderWidth:.4,
       width:screenWidth*.95,
       borderRadius:10,
    },
    img:{
        width:screenWidth*.2,
        height:screenHeight*.1,
        position:"relative",
        bottom:30,
        left:10,
        borderRadius:10
    },
    bcimg:{
        width:"100%",
        borderTopRightRadius:9,
        borderTopLeftRadius:9,
        height:screenHeight*.1
    },
    profile:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    hr:{
        
    }
})

export default Popular