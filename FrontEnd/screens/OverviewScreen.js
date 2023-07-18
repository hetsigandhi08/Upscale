import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const OverviewScreen = () => {
  return (
    <>
      <Text style={styles.courseTitle}>
      About Course
      </Text>
      <Text style={styles.subTitle}>
      Lorem ipsum dolor sit amet consectetur. Eleifend facilisis vel tristique ipsum congue. Eget nunc potenti malesuada sollicitudin mauris viverra massa at proin. Pretium sapien tempor eget sodales euismod ac iaculis. Aliquet dictumst et molestie pharetra faucibus.

Lorem ipsum dolor sit amet consectetur. Eleifend facilisis vel tristique ipsum congue. Eget nunc potenti malesuada sollicitudin mauris viverra massa at proin. Pretium sapien tempor eget sodales euismod ac iaculis. Aliquet dictumst et molestie pharetra faucibus.
      </Text>
    </>
  )
}

export default OverviewScreen

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingVertical:15,
        paddingHorizontal:10,
        gap:10,
    },
    courseTitle:{
        fontSize:20,
        color:"#5237C0",
        fontFamily:'SourceSans3-SemiBold',
    },
    subTitle:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:'#929292'
    },
})