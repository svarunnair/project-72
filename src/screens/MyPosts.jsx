import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import { StyleSheet, View } from 'react-native'

function MyPosts() {
  const route=useRoute()
  console.log("RoutePath,,,,,,,,,",route.name)
  return (
    <View style={styles.content}>
    <View style={styles.nav}>
            <TouchableOpacity onPress={()=>(navigation.navigate("Notification"))}>
                <Text style={styles.icnTextAll}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>(navigation.navigate("MyPosts"))}>
                <Text style={styles.icnText}>My post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>(navigation.navigate("Mentions"))}>
                <Text style={styles.icnText}>Mentions</Text>
                </TouchableOpacity>
            </View>

    <Image style={styles.img} source={{uri:"https://m.media-amazon.com/images/I/31Qeqr+5idL._AC_UF1000,1000_QL80_.jpg"}}/>

    </View>
  )
}
const screenHeight=Dimensions.get("window").height
const screenWidth=Dimensions.get("window").width

const styles=StyleSheet.create({
    content:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    img:{
        width:screenWidth*.5,
        height:screenHeight*.3
    },
     nav: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 14,
        paddingHorizontal: 14,
    },
    icnTextAll: {
        borderWidth: 0.4,
        backgroundColor: "green",
        color: "white",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 10,
    },
    icnText: {
        borderWidth: 0.4,
        color: "black",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 10,
    },
})

export default MyPosts