import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function AddPost() {
   const navigate=useNavigation()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
      
        <View style={{ display: 'flex', flexDirection: 'row' ,gap:10}}>
         <TouchableOpacity onPress={()=>navigate.navigate("Home")}>
        <MaterialIcon name="close" size={25} color="#000" />
       
      
       </TouchableOpacity>
        <View style={styles.picWrap}>
          <Image style={styles.pic} source={{ uri: "https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg" }} />
          <Text style={{ color: 'grey',fontWeight:"500", marginLeft: 10 }}>Anyone</Text>
           <MaterialIcon name="keyboard-arrow-down" size={20} color="black" />
       </View>
        </View>

        <View style={styles.post}>
       <MaterialIcon name="access-time" size={30} color="black" />
        <View style={styles.btn}>
          <Text style={{ color: 'black' }}>Post</Text>
        </View>
        </View>


      </View>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Share your thoughts..."
        placeholderTextColor="grey"
        textAlignVertical="top"
      />
      <View style={styles.footer}>
        <View style={{ display: 'flex', flexDirection: 'row-reverse', padding: 10, gap: 10 }}>
          <MaterialIcon name="add-circle-outline" size={30} color="#000" />
          <MaterialIcon name="image" size={30} color="#000" />
        </View>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
   
  },post:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  picWrap:{
    
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  textInput: {
    flex: 1,
    padding: 16,
    fontSize: 18,
    color: '#000',
  },
  footer: {
 
    borderColor: '#ccc',
  },
  pic: {
    width: screenWidth * 0.11,
    height: screenWidth * 0.11,
    borderRadius: 100,
  },
  btn: {
    paddingHorizontal:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 20,
    paddingVertical:7,
    backgroundColor:"#DCDFE1"
  },
});

export default AddPost;
