import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    backgroundColor:'#FAFCFB',
        alignItems:'center',
        justifyContent:"center"
      },
      
})