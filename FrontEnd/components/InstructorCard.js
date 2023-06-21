import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import thumb from '../assets/thumbnail.jpeg'

const InstructorCard = () => {
  return (
    <View>
      <TouchableOpacity>
          <View style={styles.InsCardContainer}>

             <Image style={styles.imageContainer} source={thumb} />

             <Text style={styles.cardHead}>
              Varun Mayya
             </Text>

             <Text style={styles.CardSubTitle}>
             Tech.AI.Programming
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
        fontSize:18,
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