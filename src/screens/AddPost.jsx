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
          <Image style={styles.pic} source={{ uri: "https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg" }} />
          <Text style={{ color: 'black', marginLeft: 10 }}>Anyone</Text>
        </View>
        <Icon type="ionicon" name="home-outline" />
        <View style={styles.btn}>
          <Text style={{ color: 'black' }}>Post</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Type your notes here..."
        placeholderTextColor="black"
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
   
  },
  textInput: {
    flex: 1,
    padding: 16,
    fontSize: 18,
    color: '#000',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  pic: {
    width: screenWidth * 0.14,
    height: screenWidth * 0.14,
    borderRadius: 100,
  },
  btn: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    height: screenHeight * 0.05,
  },
});

export default AddPost;
