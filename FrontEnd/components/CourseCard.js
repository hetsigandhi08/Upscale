import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import machine_learning from '../assets/machine_learning.jpg';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const CourseCard = ({courseName,navigation,id,image}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('CourseDetails', {_courseId:id})}}>
        <View style={styles.container}> 

        
        <View style={styles.imageContainer}>
            <Image style={styles.image}  source={{uri:image}}></Image>
        </View>

        <View style={styles.rightContainer}>
        <Text style={styles.roadmapTitle}> {courseName}</Text>
        <Text style={styles.instructerTitle}>By Varun mayya</Text>
        <View style={styles.languageContainer}>
        <SimpleLineIcons name="globe" size={24} color="#7969DE" />
        <Text style={styles.dateText}>English</Text>
        </View>
        <View style={styles.dateContainer}>
        <MaterialIcons name="date-range" size={24} color="#7969DE" />
        <Text style={styles.dateText}>Posted on 23 April</Text>
        </View>
        </View>
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
    container:{
        display:'flex',
    // flex:1,
backgroundColor:'#ECECEC',
width:"100%",
height:180,
flexDirection:'row',

    },
    image:{
        width:"90%",
        height:"180%",
        backgroundColor:"#FAFCFB",
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'flex-start',

    },
    imageContainer:{
      width:"50%",
      height:110,
      padding:10
    },
    roadmapTitle:{
        fontSize:14,
          fontFamily:'SourceSans3-SemiBold',
          flexWrap:'wrap'
    },
    rightContainer:{
        padding:10,
        width:"50%",
        display:'flex',
        gap:2
    },
    instructerTitle:{
      color:'#929292'
    },
    languageContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:14
        
    },
    dateContainer:{
      display:'flex',
      flexDirection:'row',
      marginTop:8

    },
    dateText:{
      alignSelf:'center',
      marginLeft:10
    }

})