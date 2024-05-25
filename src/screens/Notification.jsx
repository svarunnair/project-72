import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'


function Notification() {
  return (
    <View>

{/* nav */}
<View style={styles.nav}>
<Text style={styles.text}>All</Text>
<Text style={styles.text}>My post</Text>
<Text style={styles.text}>Mentions</Text>
</View>

{/* content */}

<ScrollView style={styles.content}>

<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>
<View>
<Text>Navigation is crucial to React Native app development. Learn why React Native Navigation might be the best option for your next React Native...</Text>
</View>



</ScrollView>


    </View>
  )
}

const screenWidth=Dimensions.get("window").width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
    nav:{
        borderWidth:1,
        display:"flex",
        flexDirection:"row",
        gap:20,
        padding:10
    },
    text:{
        borderWidth:1,
        padding:4,
        borderRadius:10,

    },
    content:{
        display:"flex",
        flexDirection:"column",
        borderWidth:2,
        gap:10

    }
})
export default Notification