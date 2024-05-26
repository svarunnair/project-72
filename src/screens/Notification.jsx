import React from 'react'
import { Image, ScrollView, Text } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'
import NavbarTwo from '../components/NavBarTwo'

const notificationData=[
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50TNVA_UJSqeKMyeRynw3niVFYgH2sTfezMwxFpTSLw&s",
          detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
    {
        image:"https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
        detail:"Once you've found the icon you want to use, you can simply use its name in your React Native application, provided you've imported the MaterialIcons component from react-native-vector-icons/MaterialIcons"
    },
]

function Notification() {
  return (
    <View>
    <NavbarTwo/>

{/* nav */}
<View style={styles.nav}>
<Text style={styles.icnText}>All</Text>
<Text style={styles.icnText}>My post</Text>
<Text style={styles.icnText}>Mentions</Text>
</View>

{/* content */}

<ScrollView style={styles.content}>

<View>

{notificationData.map((item)=>(
    <View style={styles.map}>
    <Image style={styles.img} source={{uri:item.image}}/>
    <Text style={styles.text}>{item.detail}</Text>

    </View>
))}


</View>



</ScrollView>


    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    nav:{
        // borderWidth:1,
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        gap:20,
        padding:10
    },
    img:{
        width:screenWidth*.15,
        height:screenHeight*.05
    },
    map:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#E4F7F9"

    },
icnText:{
    borderWidth:.4,
    color:"black",
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:3
},
    text:{
    
        
        borderRadius:10,
        color:"grey"


    },
    content:{
        display:"flex",
        flexDirection:"column",
        gap:10

    }
})
export default Notification