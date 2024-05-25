import React from 'react';
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const data = [
    {
        image: "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714003200&semt=ais",
        name: "Pradeep giri",
        position: "Claims Manager",
        role: "Reliance Insurance agent Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21RU98TYNkU_uUET3SUHZrrZ838wK4u5cHnRtgMeKaQ&s",
        name: "Angitha Rao",
        position: "Sales Head",
        role: "HDFC Insurance agent Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nhDnuyQfhkYCvvnHgkXRvwkXHkoaw75TqoMK-04h9goPJgeiKMSZhfMk3YNuXXmWbFA&usqp=CAU",
        name: "Kavya Shankar",
        position: "HR",
        role: "Nexora Accademy Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
        name: "Goutham Chowla",
        position: "Web Developer",
        role: "Texes Alias Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
];

function SecondCard() {

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Image style={styles.bcImg} source={{ uri: item.bgimg }} />
            <Image style={styles.img} source={{ uri: item.image }} />
            <Text>{item.position}</Text>
            <Text>{item.role}</Text>
            <Text>Based on your profile</Text>
            <Button title='Connect' />
        </View>
    );

    return (
        <View style={styles.outer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
  
        borderRadius: 10,
        borderColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: screenWidth * 0.45,
        backgroundColor: '#fff',  
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    outer: {
        display: "flex",
        flex: 1,
      
        justifyContent: "center",
        alignItems: "center",
       
    },
    columnWrapper: {
        justifyContent: 'space-between',
        padding:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:10

    },
    bcImg: {
        width: screenWidth * 0.45,
        height: screenHeight * 0.09,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    img: {
        width: screenHeight * 0.1,
        height: screenHeight * 0.1,
        borderRadius: 100,
        marginTop: -screenHeight * 0.05,  
        borderWidth: 2,
        borderColor: '#fff', 
    },
});

export default SecondCard;
