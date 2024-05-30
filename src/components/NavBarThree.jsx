
// import { Icon } from '@rneui/base'
// import React from 'react'
// import { Text } from 'react-native'
// import { Image, TextInput } from 'react-native'
// import { Dimensions, StyleSheet, View } from 'react-native'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// function NavbarThree() {

 

//   return (
//     <View style={styles.container}>
// <Image style={styles.img} source={{uri:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a"}}/>
// <View style={styles.inputBox}>
// <Icon name="search" type="ionicons" size={25} />
// <TextInput style={styles.input} placeholder='Search'  placeholderTextColor="grey" />
// </View>
//  <MaterialIcon name="more-vert" size={20} color="#000" />
// <View style={styles.icon}>
 
//       <Ionicons name="chatbox-ellipses" size={26} color="gray" />

// </View>
     



//     </View>
//   )
// }

// const screenWidth=Dimensions.get("window").width
// const screenHeight=Dimensions.get("window").height


// const styles=StyleSheet.create({
//     container:{
//         display:"flex",
//         flexDirection:"row",
//         justifyContent:"space-between",
//         padding:10,
//         alignItems:"center",
//         backgroundColor:"white"
        
//     },
//     img:{
//         width:screenWidth*.1,
//         height:screenHeight*.05,
//         borderRadius:100
//     },
//     icon:{
//         display:"flex",
//         flexDirection:"row",
//         justifyContent:"center",
//         alignItems:"center",
//         gap:20
//     },
//     input:{

// width:"60%",
// height:screenHeight*.05,
// backgroundColor:"#ECF3FA",
// borderRadius:7
//     },
//     inputBox:{
//         display:"flex",
//         flexDirection:"row",
//         backgroundColor:"#ECF3FA",
//         borderRadius:7,
//         alignItems:"center",
//         gap:2.,
//          width:"65%"
        
//     },
// })

// export default NavbarThree


import { Icon } from '@rneui/base'
import React from 'react'
import { Text } from 'react-native'
import { Image, TextInput } from 'react-native'
import { Dimensions, StyleSheet, View } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function NavbarThree() {

 

  return (
    
    <View style={styles.container}>

    <View style={styles.outer}>

<Image style={styles.img} source={{uri:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a"}}/>
<View style={styles.inputBox}>
<Icon name="search" type="ionicons" size={20} />
<TextInput style={styles.input} placeholder='Search'  placeholderTextColor="grey" />
</View>
 <MaterialIcon name="more-vert" size={30} color="#000" />
<View style={styles.icon}>

</View>
 
     

</View>
 <Ionicons name="chatbox-ellipses" size={26} color="gray" />
     



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
    img:{
        width:screenWidth*.1,
        height:screenHeight*.05,
        borderRadius:100
    },
    outer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        alignItems:"center"
    },
    icon:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20

    },
     inputBox:{
        display:"flex",
        height:screenHeight*.04,
        flexDirection:"row",
        backgroundColor:"#ECF3FA",
        borderRadius:7,
        paddingHorizontal:6,
        alignItems:"center",
        gap:2,
        width:"60%"
        
    },
    input:{

width:"60%",
height:screenHeight*.05,
display:"flex",
justifyContent:"center",
alignItems:"center",
textAlign:"left",

borderRadius:7
    }
})

export default NavbarThree