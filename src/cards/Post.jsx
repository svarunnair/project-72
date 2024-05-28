
import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const jobData=[
    {
        name:"Akshara roy",
        post:"https://media.licdn.com/dms/image/D5622AQE-Dk4NDRRm6g/feedshare-shrink_800/0/1716524321100?e=1719446400&v=beta&t=Y98hSNqu_UIzxgDeT1DKZ1NvEGOe7gFLsmP_lrCgKao",
        image:"https://resizing.flixster.com/RTuJBG1AykHqUgqAF6slzTp10SI=/ems.ZW1zLXByZC1hc3NldHMvY2VsZWJyaXRpZXMvZDhjYTgwYzUtM2Q5Ny00OTBmLTkyOWUtZDhmMDI0N2Q2YTQxLmpwZw==",
        follow:false,
        designation:"Building Outscale",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:1,
        likes:"12,333"
    },
     {
        name:"Kiran Kumar",
        image:"https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
        post:"https://media.licdn.com/dms/image/sync/D4D10AQGa2pNj04iyTw/image-shrink_800/0/1715861011004/hh-generic20png?e=1717135200&v=beta&t=0-o1Lxs-B0dCeFYXoXsWUoA2jfrOuqzenBgKge64I0s",
        follow:false,
        designation:"Google SD 1",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:2,
        likes:"123,333"
    },
     {
        name:"Arun",
        image:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a",
        post:"https://media.licdn.com/dms/image/sync/D5610AQEvwsUR10qzSw/image-shrink_800/0/1708632197651/dfdfdfdfdddfdfjpg?e=1717174800&v=beta&t=aUJMciFrwVy5r6ssb1iFuoM0oV8MUga-h7LXECFYnss",
        follow:false,
        designation:"SD 2 at Intuit",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:3,
         likes:"1,333"
    },
     {
        name:"Jipson Jose",
        image:"https://i.guim.co.uk/img/media/4f7b8c41aa54314c7b130846ed91331c1b3f9de6/0_0_3744_2247/master/3744.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=13833b08e22edeb98fbca9885f2c6e8a",
        post:"https://media.licdn.com/dms/image/D4D22AQGP9A9Nr6ZE3Q/feedshare-shrink_800/0/1716323083004?e=1719446400&v=beta&t=B0Gz_ZxKJLrtG7EbXW9ZgQlCmzEooA_w1vEQCjitIlA",
        follow:false,
        designation:"Civil Engineer",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:4,
          likes:"9,333"
    },
     {
        name:"Anu Jaz",
        image:'https://images.mubicdn.net/images/cast_member/1095414/cache-955405-1711671649/image-w856.jpg',
        post:"https://media.licdn.com/dms/image/sync/D4D10AQGn_yRhiSp9eg/image-shrink_800/0/1716476642806/1200x6285jpg?e=1717174800&v=beta&t=JAO-yKbRwxCAvdFISo9eXdesCQLGkmGstluGlUbRtLE",
        follow:false,
        designation:"Creative Outscale",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:5,
         likes:"9,33"
    },
     {
        name:"Varsha Mohan",
        image:"https://m.media-amazon.com/images/M/MV5BMTQ5NTYwMjcyMF5BMl5BanBnXkFtZTYwMDQ0MjQz._V1_.jpg",
        post:"https://media.licdn.com/dms/image/sync/D4D10AQGa2pNj04iyTw/image-shrink_800/0/1715861011004/hh-generic20png?e=1717135200&v=beta&t=0-o1Lxs-B0dCeFYXoXsWUoA2jfrOuqzenBgKge64I0s",
        follow:false,
        designation:"Amazone SD 3",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:6,
        likes:"19,333"

    },
     {
        name:"Deeksha Chawla",
        image:"https://m.media-amazon.com/images/M/MV5BMTQ5NTYwMjcyMF5BMl5BanBnXkFtZTYwMDQ0MjQz._V1_.jpg",
        post:"https://media.licdn.com/dms/image/sync/D5627AQHOzMg7puA1gw/articleshare-shrink_800/0/1716552751257?e=1717174800&v=beta&t=r886VuW3Eh37KXQJXbF9EyLGdmJXjUI-zijSNv9RI-k",
        follow:false,
        designation:"Apple SD 2",
        description:"Web Developers are required to be proficient at coding with languages like HTML, CSS, JavaScript for front-end development, and Python, Java, Ruby, and PHP for back-end programming. Knowledge of back-end languages is particularly useful for Full Stack Web Developers.",
        id:7,
        likes:"139,333"
    },
]



function Post({ numberOfLines = 2 }) {
      const [followedItems, setFollowedItems] = useState([]);
      const [expandedPosts, setExpandedPosts] = useState({})


    const handleToggle = (id) => {
        setExpandedPosts(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
const handleFollow = (id) => {
        if (followedItems.includes(id)) {
            setFollowedItems(prevItems => prevItems.filter(itemId => itemId !== id));
        } else {
            setFollowedItems(prevItems => [...prevItems, id]);
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.container}>
         <View style={styles.line}/>
            <View style={styles.firstRow}>
                <View style={styles.box}>
                    <Image style={styles.profilePic} source={{ uri: item.image }} />
                    <View>
                        <Text style={{ fontSize: 18, color: "black" }}>{item.name}</Text>
                        <Text style={{ color: "grey" }}>{item.designation}</Text>
                    </View>
                </View>
               <TouchableOpacity onPress={() => handleFollow(item.id)}>
                    <Text style={styles.follow}>
                        {followedItems.includes(item.id) ? 'Following' : '+ Follow'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:10}}>
            <Text style={styles.discr} numberOfLines={expandedPosts[item.id] ? undefined : numberOfLines} ellipsizeMode="tail">
                {item.description}
            </Text>
           
            <TouchableOpacity onPress={() => handleToggle(item.id)}>
                <Text style={styles.toggleText}>
                    {expandedPosts[item.id] ? 'Read Less' : 'Read More'}
                </Text>
            </TouchableOpacity>
             </View>
            <Image style={styles.post} source={{ uri: item.post }} />
            <View style={styles.count}>
                <Text style={{color:"grey"}}>{item.likes} Likes</Text>
                <Text style={{color:"grey"}}>Comments</Text>
            </View>
            <View style={styles.iconsBar}>
                <View style={styles.icons}>
                <View style={styles.secondIcn}>
                     <MaterialIcon name="thumb-up" color="black" size={14} />
                    <Text style={{color:"black"}}>Like</Text>
                </View>
                <View style={styles.secondIcn}>
                     <MaterialIcon name="comment" color="black" size={14} />
                     <Text style={{color:"black"}}>Comment</Text>
                </View>
                <View style={styles.secondIcn}>
                     <MaterialIcon name="repeat" color="black" size={14} />
                    <Text style={{color:"black"}}>Repost</Text>
                </View>
                <View style={styles.secondIcn}>
                     <MaterialIcon name="send" color="black" size={14} />
                       <Text style={{color:"black"}}>Send</Text>
                </View>
                          
                </View>
            </View>
           
        </View>
    )

    return (
        <View style={styles.outer}>
            <FlatList
                data={jobData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor:"#fff",
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    outer:{
         marginBottom: screenHeight * 0.08 ,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        marginTop:screenHeight*.014
    },
    secondIcn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line:{
        borderWidth:4,
        borderColor:"#DADADA"

    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    follow: {
        color: 'blue',
    },
    discr: {
        marginVertical: 10,
        color:"grey"
    },
    toggleText: {
        color: 'blue',
    },
    post: {
        width: '100%',
        height: screenWidth * 0.5,
        marginVertical: 10,
    },
    count: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:10,
        padding:10
    },
    iconsBar: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        padding: 10,
        paddingHorizontal:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:10
    },
})

export default Post
