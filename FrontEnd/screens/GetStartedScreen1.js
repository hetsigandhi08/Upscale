import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import * as Progress from 'react-native-progress';




const GetStartedScreen1 = ({navigation}) => {

const[progress,setProgress]=useState(0);
useEffect(()=>{
  setTimeout(() => {
    setProgress(0.3)
  }, 200);
})

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.progressTitle}>1/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
      </View>
  )
}

export default GetStartedScreen1;

const styles = StyleSheet.create({

  container:{
      backgroundColor:'#FAFCFB',
      display:'flex',
      flex:1,
      alignItems:'center',
      justifyContent:'space-around',
      padding:40
    },
    topContainer:{
      width:'100%',
      gap:4,
    },
    progressTitle:{
      fontSize:20,
      fontWeight:'400',
      fontFamily:'SourceSans3-SemiBold',
      marginBottom:8
  }

})