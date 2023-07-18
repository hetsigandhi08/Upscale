import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const ContentVideoCard = ({title,data}) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.courseTitle}>{title}</Text>
       

       <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <TouchableOpacity style={styles.videoContainer}>
        <View>
        <Text style={styles.videoTitle}>{item.name}</Text>
        <Text style={styles.videoSubTitle}>{item.min} min</Text>
        </View>

        <Ionicons  name="ios-play" size={24} color="black" />
        </TouchableOpacity> }

       />
      </View>
  )
}

export default ContentVideoCard

const styles = StyleSheet.create({
    contentContainer:{
        display: 'flex',
        gap:10,
    },
    courseTitle:{
        fontSize:20,
        color:"#5237C0",
        fontFamily:'SourceSans3-SemiBold',
    },
    videoTitle:{
        fontSize:17,
        color:"#090909",
        fontFamily:'SourceSans3-SemiBold',
    },
    videoSubTitle:{
        fontSize:12,
        fontWeight:'400',
        fontFamily:'SourceSans3-SemiBold',
        color:'#929292'
    },
    videoContainer:{
        height:65,
        width:"100%",
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:5,
        paddingVertical:15,
        paddingHorizontal:20,
        marginBottom:10
    }
})