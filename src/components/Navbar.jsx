
import { Icon } from '@rneui/base'
import React from 'react'
import { Text } from 'react-native'
import { Image, TextInput } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'

function Navbar() {
  return (
    <View style={styles.container}>
<Image style={styles.img} source={{uri:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a"}}/>
<TextInput style={styles.input} placeholder='Search' />
<Icon type='ionicon' name="chatbubble-ellipses-outline"></Icon>



    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height


const styles=StyleSheet.create({
    container:{
      
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        
    },
    img:{
        width:screenWidth*.1,
        height:screenHeight*.05,
        borderRadius:100
    },
    input:{

width:"80%",
height:screenHeight*.045,
backgroundColor:"#D9F0F3",
borderRadius:7
    }
})

export default Navbar