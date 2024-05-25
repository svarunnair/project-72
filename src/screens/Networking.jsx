import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import Invitations from '../cards/Invitations'
import Popular from '../cards/Popular'
import SecondCard from '../cards/SecondCard'

function Networking() {
  return (
    <ScrollView style={styles.container}>
    <View style={{borderWidth:2}}>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{color:"black",fontSize:18}}>Manage my network.</Text>
      <Text style={{color:"black",fontSize:18}}>></Text>
      </View>
   <View style={styles.wrap}></View>
{/* section */}
<View style={styles.invitation}>
 <Text style={{color:"black",fontSize:15}}>Invitations</Text>
  <Text style={{color:"black",fontSize:15}}>></Text>
</View>
<Invitations/>
{/* section */}
    </View>

<View style={styles.hr}/>

<View>

{/*  */}


<View style={styles.popular}>

<Text style={{fontSize:16,color:"black"}}>Popular people to follow across LinkedIn</Text>
<View style={styles.card}>
<Popular/>

<Text style={{fontSize:16,fontWeight:"700",color:"blue"}}>
    See all
</Text>

</View>

 </View>

</View>

{/* second section */}
<View style={styles.sectionTwo}>

<SecondCard/>
</View>
     
    </ScrollView>
  )
}

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
container:{
    display:"flex",
    borderColor:"blue",
    gap:screenHeight*.04, 
    borderWidth:3,
    backgroundColor:"white",
},
sectionTwo:{
  
  borderColor:"green",
  justifyContent:"center",
  alignItems:"center",
  
},
hr:{
  borderWidth:3,
  borderColor:"#C7D4D5",
  width:screenWidth
},
section:{
  display:'flex',
},
inner:{
    backgroundColor:"#EDECEC",
    width:screenWidth,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  
},
invitation:{
    
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
},
popular:{
    display:"flex",
    gap:10
},
wrap:{
    display:"flex",
    gap:screenHeight*.02, 
    padding:10
 
},
card:{
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
gap:20,
}
})

export default Networking