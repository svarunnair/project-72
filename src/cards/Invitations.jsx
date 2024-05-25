import { Icon } from '@rneui/base'
import React from 'react'
import { Dimensions, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

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
  return (
    <View style={styles.outer}>
  

    {data.map((item)=>(
<View style={styles.container}>

<Image style={styles.img} source={{uri:item.image}}/>

<View style={styles.textContainer}>
    <Text>Newsletters.Monthly</Text>

    <View style={styles.text}>
 <Text style={{fontSize:17,fontWeight:"500"}}>{item.name} </Text>
  <Text>invited you to subscribe to </Text>
  <Text style={{fontSize:17,fontWeight:"500"}}>{item.subscribe} </Text>
    </View>

    <View>   
    </View>
</View>
<View style={styles.icon}>
<Icon type='ionicon' name="close-circle-outline"></Icon>
<Icon type='ionicon' name="close-circle-outline"></Icon>
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
    textContainer:{
      
    },
    outer:{
        backgroundColor:"white"
    },
    text:{
        maxWidth:screenWidth*.5,
    },
    icon:{
        display:"flex",
        flexDirection:"row",
        gap:screenWidth*.1
    },
    img:{
        width:screenWidth*.2,
        height:screenWidth*.2
    }
})

export default Invitations