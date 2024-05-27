import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const data = [
    {
        image: "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714003200&semt=ais",
        name: "Pradeep Giri",
        position: "Claims Manager",
        role: "Reliance Insurance Agent Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21RU98TYNkU_uUET3SUHZrrZ838wK4u5cHnRtgMeKaQ&s",
        name: "Angitha Rao",
        position: "Sales Head",
        role: "HDFC Insurance Agent Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nhDnuyQfhkYCvvnHgkXRvwkXHkoaw75TqoMK-04h9goPJgeiKMSZhfMk3YNuXXmWbFA&usqp=CAU",
        name: "Kavya Shankar",
        position: "HR",
        role: "Nexora Academy Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
    {
        image: "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
        name: "Goutham Chowla",
        position: "Web Developer",
        role: "Texes Alias ILEC Bengaluru",
        bgimg: "https://i.pinimg.com/originals/89/f2/8f/89f28f565bd7ad312108796cec236a60.jpg",
    },
];

function SecondCard() {
    
    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Image style={styles.bcImg} source={{ uri: item.bgimg }} />
           <TouchableOpacity style={styles.iconContainer}>
                    <MaterialIcon name="close" size={20} color="black" />
                </TouchableOpacity>
            <Image style={styles.img} source={{ uri: item.image }} />
            <View style={styles.inner}>
                <Text style={styles.position}>{item.position}</Text>
                <Text style={styles.role}>{item.role}</Text>
                <Text style={styles.profileText}>Based on your profile</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Connect</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );

    return (
        <View style={styles.outer}>
            <FlatList
                style={styles.flat}
                data={data}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.columnWrapper}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.4,
        borderRadius: 10,
        alignItems: "center",
        width: screenWidth * 0.45,
        backgroundColor: '#fff',
        margin: 10,
    },
    inner: {
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 10,
        minHeight: screenHeight * 0.2,
        justifyContent: 'space-between',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 20,
        paddingVertical: 7,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    btnText: {
        color: "blue",
    },
    outer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    bcImg: {
        width: '100%',
        height: screenHeight * 0.1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    img: {
        width: screenHeight * 0.1,
        height: screenHeight * 0.1,
        borderRadius: 50,
        marginTop: -screenHeight * 0.05,
        borderWidth: 2,
        borderColor: '#fff',
    },
    position: {
        fontWeight: "500",
        color: "black",
        fontSize: 17,
        textAlign: 'center',
    },
    role: {
        textAlign: "center",
        color: "grey",
        fontSize: 15,
    },
    profileText: {
        color: "grey",
        textAlign: 'center',
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 5,
    },
});

export default SecondCard;

