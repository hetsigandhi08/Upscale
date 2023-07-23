import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import * as Progress from 'react-native-progress';
import thumb from '../assets/thumbnail.jpeg'

const MyCourseCard = ({name,progress,img,navigation,courseId}) => {
  return (
    <>
       <TouchableOpacity onPress={()=> navigation.navigate("CourseDetails",{_courseId:courseId})} style={[styles.cardContainer,styles.boxShadow]}>
            <View style={styles.cardTopContainer}>
              <Image style={styles.cardImage} source={thumb}/>
              <View style={styles.cardTopInnerContainer}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubTitle} >Course</Text>
              </View>
            </View>


            <View style={styles.cardBottomContainer}>
              <Text style={styles.cardTitle}>{progress}% Complete</Text>
              <Progress.Bar height={12} style={{borderRadius:10}} progress={(progress)/100} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
            </View>
       </TouchableOpacity>
    </>
  )
}

export default MyCourseCard

const styles = StyleSheet.create({
    cardContainer:{
        width:"100%",
        height:155,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        padding:15,
        borderWidth:1,
        borderColor:"#ABABAB"
      },
      cardTopContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:'flex-start',
        gap:20,
      },
      cardBottomContainer:{
        display:'flex',
        paddingVertical:10,
        gap:5
      },
      cardTopInnerContainer:{
        display:"flex",
        gap:2,
        marginTop:8,
      },
      cardImage:{
        width:65,
        height:65,
        backgroundColor:"#FAFCFB",
        borderRadius:10,
      },
      cardTitle:{
          fontSize:24,
          fontFamily:'SourceSans3-SemiBold',
      },
      cardSubTitle:{
        fontSize:16,
        fontFamily:'SourceSans3-SemiBold',
        color:"#929292",
    },
    boxShadow:{
      shadowColor:'#171717',
      shadowRadius:1,
      shadowOffset:{width:2,height:4},
      shadowOpacity:0.1,
      elevation:5
    },
})