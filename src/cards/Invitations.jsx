import { Icon } from '@rneui/base'
import React from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
const data=[
    {
        name:"IBM",
        image:"https://imageio.forbes.com/specials-images/imageserve/63f78ca277a4a0073a41441e/IBM/960x0.png?format=png&width=960",
        subscribe:"AI in Action"
    },
    {
        name:"Mercom India",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtZjlO-ryDdCxzMHUE-J3QQefHw3ycTx7aPlU4VlfRQ&s",
        subscribe:"formely mericom"
    },
]



function Invitations() {

    const dataLength=data.length

    console.log("lgt....",dataLength)
  return (
    <View style={styles.outer}>

    {data.map((item)=>(
        <View style={styles.wrapMap}>
<View style={styles.container}>

<Image style={styles.img} source={{uri:item.image}}/>

<View style={styles.textContainer}>
    <Text style={{color:"grey"}}>Newsletters.Monthly</Text>

    <View style={styles.text}>
 <Text style={{fontSize:17,fontWeight:"500",color:"black"}}>{item.name} </Text>
  <Text style={{color:"grey"}}>invited you to subscribe to </Text>
  <Text style={{fontSize:17,fontWeight:"500",color:"black"}}>{item.subscribe} </Text>
    </View>

    <View>   
    </View>
</View>
<View style={styles.icon}>
  <Ionicons name="close" size={25} color="gray" />
  <Ionicons name="check" size={25} color="blue" />
</View>

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
        flexDirection:"row",
        justifyContent:"space-between"
    },
    wrapMap:{
      display:"flex",
      flexDirection:"column",
      
    },
    outer:{
        backgroundColor:"white",
        padding:10,
        paddingVertical:screenHeight*.02
    },
    text:{
        maxWidth:screenWidth*.5,
    },
    icon:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // gap:screenWidth*.1,
        // borderWidth:1,
        width:screenWidth*.2,
        gap:5
    },
    img:{
        width:screenWidth*.2,
        height:screenWidth*.2
    }
})

export default Invitations