import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import NavbarTwo from '../components/NavBarTwo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
]

function Notification() {
    return (
        <View style={styles.container}>
            <NavbarTwo />

            {/* Navigation */}
            <View style={styles.nav}>
                <Text style={styles.icnTextAll}>All</Text>
                <Text style={styles.icnText}>My post</Text>
                <Text style={styles.icnText}>Mentions</Text>
            </View>

            {/* Content */}
            <ScrollView style={styles.content}>
                <View style={styles.notificationContainer}>
                    {notificationData.map((item, index) => (
                        <View key={index} style={styles.notificationItem}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <View style={styles.textContainer}>
                                <Text numberOfLines={3} style={styles.text}>{item.detail}</Text>
                            </View>
                            <MaterialIcon name="more-vert" size={20} color="#000" />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 14,
        paddingHorizontal: 14,
    },
    icnTextAll: {
        borderWidth: 0.4,
        backgroundColor: "green",
        color: "white",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 10,
    },
    icnText: {
        borderWidth: 0.4,
        color: "black",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 10,
    },
    notificationContainer: {
        flexDirection: "column",
        alignItems: "stretch",
        paddingTop:10
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#E4F7F9",
    },
    img: {
        width: screenWidth * 0.13,
        height: screenHeight * 0.06,
        marginRight: 10,
        borderRadius: 100,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        color: "grey",
    },
    content: {
        flex: 1,
    },
});

export default Notification;


















