import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScre</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    backgroundColor:'#FAFCFB',
        alignItems:'center',
        justifyContent:"center"
      }
})