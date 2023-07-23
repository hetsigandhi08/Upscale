import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import thumb from '../assets/thumbnail.jpeg'

const InstructorCard = ({courseName, thumbnail, courseId, navigation}) => {
  // console.log(courseName)
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('CourseDetails',{_courseId:courseId})}>
          <View style={styles.InsCardContainer}>

             <Image style={styles.imageContainer} source={{uri:thumbnail}} />

             <Text style={styles.CardSubTitle}>
             COURSE
             </Text>
             <Text style={styles.cardHead}>
              {courseName}
             </Text>
          </View>

        </TouchableOpacity>
    </View>
  )
}

export default InstructorCard

const styles = StyleSheet.create({
    InsCardContainer:{
        display:"flex",
        width:150,
        height:175,
        borderColor:"#D9D9D9",
        borderWidth:1,
        borderRadius:9,
        gap:7,
      },
      imageContainer:{
        backgroundColor:"#D9D9D9",
        width:148,
        height:110,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        // borderColor:"#ABABAB",
        // borderWidth:1,
      },
      cardHead:{
        marginLeft:5,
        fontSize:16,
        fontFamily:'SourceSans3-SemiBold'
      },
      CardSubTitle:{
        marginLeft:5,
        fontSize:12,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:"#929292"
      },
})