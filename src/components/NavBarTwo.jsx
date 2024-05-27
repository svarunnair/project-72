
import { Icon } from '@rneui/base'
import React from 'react'
import { Text } from 'react-native'
import { Image, TextInput } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'

function NavbarTwo() {

 

  return (
    <View style={styles.container}>
<Image style={styles.img} source={{uri:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a"}}/>
<TextInput style={styles.input} placeholder='Search'  placeholderTextColor="grey" />
<Icon name="setting" type="antdesign" size={20} />
<View style={styles.icon}>
 
        <Icon name="message1" type="antdesign" size={20} />

</View>
     



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
        padding:20,
        alignItems:"center",
        backgroundColor:"white"
        
    },
    img:{
        width:screenWidth*.1,
        height:screenHeight*.05,
        borderRadius:100
    },
    icon:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20

    },
    input:{

width:"60%",
height:screenHeight*.05,
backgroundColor:"#D9F0F3",
borderRadius:7
    }
})

export default NavbarTwo