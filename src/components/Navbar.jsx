
import { Icon } from '@rneui/base'
import React from 'react'
import { Text } from 'react-native'
import { Image, TextInput } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
function Navbar() {

 

  return (
    <View style={styles.container}>
<Image style={styles.img} source={{uri:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a"}}/>
<View style={styles.inputBox}>
<Icon name="search" type="ionicons" size={20} />
<TextInput style={styles.input} placeholder='Search jobs'  placeholderTextColor="grey" />
</View>

<View style={styles.icon}>

       <Ionicons name="chatbox-ellipses" size={26} color="gray" />

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
        padding:10,
        alignItems:"center",
        backgroundColor:"white"
        
    },
    inputBox:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#ECF3FA",
        borderRadius:7,
        paddingHorizontal:6,
        alignItems:"center",
        gap:2,
        width:"75%"
        
    },
    img:{
        width:screenWidth*.09,
        height:screenHeight*.04,
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
width:"70%",
height:screenHeight*.045,
backgroundColor:"#ECF3FA",

    }
})

export default Navbar