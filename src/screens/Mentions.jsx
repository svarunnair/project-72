import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Dimensions, StyleSheet, Text, View } from 'react-native';

function Mentions() {
  const route = useRoute();
  console.log("RouteMM......", route.name);
  return (
    <View style={styles.container}>
      <Text>Mentions.....</Text>
      <Image
        style={styles.img}
        source={{ uri: "https://as1.ftcdn.net/v2/jpg/03/69/40/60/1000_F_369406096_TjYKQBvrSGB4SgJhj5h9FJjFV5aV5YkO.jpg" }}
        resizeMode="center"
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  img: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.5,
  },
});

export default Mentions;
