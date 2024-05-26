import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const data=[
    {
        image:"https://cloud.githubusercontent.com/assets/378279/12009887/33f4ae1c-ac8d-11e5-8666-7a87458753ee.png",
        name:"Healthcare"
    },
    {
        image:"https://i.pinimg.com/474x/cb/63/8f/cb638f1a43e04783bbbaec251a6f416f.jpg",
        name:"Food & Bev"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/2175/2175193.png",
        name:"Government"
    },
    {
        image:"https://www.iconninja.com/files/623/509/103/react-js-react-js-logo-icon.png",
        name:"Logistics"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/512/4138/4138124.png",
        name:"Fashion"
    },

    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrDNRRe-XVYXWOlrZSpbxv8Ak450OURVXxxIo-_ojItKbQYpbQiGTfhj3UIUrBCgQe30&usqp=CAU",
        name:"Bio Tech"
    },
]

function Discover() {
  return (
    <View style={styles.container}>

    <Text style={{fontSize:18,color:"black",fontWeight:"600"}}>Discover jobs the smart way</Text>
     <Text style={{color:"grey"}}>Broaden your job search with curated collections</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={styles.scrollContainer}>

    {data.map((item)=>(
        <View style={styles.box}>
        <View style={styles.bgImg}>
         <Image style={styles.img} source={{uri:item.image}}/>
       </View>
        <Text>{item.name}</Text>
        </View>
    ))}

    </ScrollView>


    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height


const styles=StyleSheet.create({
    img:{
        width:screenWidth*.15,
        height:screenHeight*.08
    },
    bgImg:{
        width:screenWidth*.25,
        height:screenHeight*.12,
        borderRadius:100,
        backgroundColor:"#D7E2E3",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    container:{
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:7
    },
    scrollContainer:{
        paddingHorizontal: 10,
        gap:screenWidth*.03
    },
    box:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
   
})


export default Discover