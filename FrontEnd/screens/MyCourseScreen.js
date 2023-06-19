import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCourseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyCourseScreen</Text>
    </View>
  )
}

export default MyCourseScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    backgroundColor:'#FAFCFB',
        alignItems:'center',
        justifyContent:"center"
      }
})