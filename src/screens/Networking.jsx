import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import Invitations from '../cards/Invitations'
import Popular from '../cards/Popular'
import SecondCard from '../cards/SecondCard'
import Events from '../cards/Events'
import Navbar from '../components/Navbar'

function Networking() {
  return (
    <View>
     <Navbar/>
    <ScrollView style={styles.container}>
    
    <View>
   
     <View style={{display:"flex",paddingTop:10,paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{color:"black",fontSize:18}}>Manage my network.</Text>
      <Text style={{color:"black",fontSize:18}}>></Text>
      </View>
       <View style={styles.hr}/>
 
{/* section */}
<View style={styles.invitation}>
 <Text style={{color:"black",fontSize:18}}>Invitations({})</Text>
  <Text style={{color:"black",fontSize:18}}>></Text>
</View>
<Invitations/>
{/* section */}
    </View>



<View>

{/*  */}

<View style={styles.hr}/>
<View style={styles.popular}>

<Text style={{fontSize:16,color:"black"}}>Popular people to follow across LinkedIn</Text>
<View style={styles.card}>
<Popular/>

<Text style={{fontSize:16,fontWeight:"700",color:"blue"}}>
    See all
</Text>

</View>

 </View>
 <View style={styles.hr}/>

</View>
 

{/* second section */}
<Text style={styles.textCard}>People you may know with similar roles</Text>
<View style={styles.sectionTwo}>


<SecondCard/>
<View style={styles.hr}/>
</View>
<Text style={styles.textCard}>Online events for you</Text>
<Events/>
<View style={styles.hr}/>
{/* section */}
<View style={styles.sectionTwo}>

<SecondCard/>
<View style={styles.hr}/>
</View>

     
    </ScrollView>
    </View>
  )
}

const screenWidth=Dimensions.get('window').width
const screenHeight=Dimensions.get("window").height

const styles=StyleSheet.create({
container:{
    display:"flex",
    borderColor:"blue",
    gap:screenHeight*.04, 
    marginBottom: screenHeight * 0.07 ,
    backgroundColor:"white",
},
sectionTwo:{
  
  borderColor:"green",
  justifyContent:"center",
  alignItems:"center",
  
},
hr:{
  borderWidth:4,
  borderColor:"#DADADA",
  width:screenWidth,
  marginTop:screenWidth*.05,
 
},
textCard:{
  fontSize:17,
  color:"black",
  paddingHorizontal:screenWidth*.04,
  paddingTop:12,
  fontWeight:"400"
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
    borderWidth:.4,
    display:"flex",
    padding:10,
    flexDirection:"row",
    justifyContent:"space-between"
},
popular:{
    display:"flex",
    gap:10,
    padding:10
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