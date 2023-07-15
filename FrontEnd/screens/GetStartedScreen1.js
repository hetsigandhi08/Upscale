import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Rectangle4 from '../assets/Rectangle4.jpg'
import Rectangle6 from '../assets/Rectangle6.jpg'
import * as Progress from 'react-native-progress';




const GetStartedScreen1 = ({navigation}) => {

const[progress,setProgress]=useState(0);
useEffect(()=>{
  setTimeout(() => {
    setProgress(0.4)
  }, 200);
})

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.progressTitle}>1/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
      <View style={styles.columnStyle}>
      <Image style={styles.side} source={Rectangle4} />
      <Image style={styles.square} source={Rectangle6} />
      </View>
     <View style={styles.topContainer}>
     <Text style={styles.title}>Take the worlds best courses from top universities from best partners</Text>
      {/* <Text style={styles.subTitle}>Take the worlds best courses from top universities</Text> */}
     </View>
     <View>
     <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate('GetStarted2')}} >
          <Text style={styles.loginText}>Get Started</Text>
      </TouchableOpacity>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
      <Text style={styles.subTitle}>Already have an account?  </Text><TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
      <Text style={styles.subLogin}> Login</Text>
       </TouchableOpacity>
      </View>
      <View>
      
     </View>

      </View>
      
  )
}

export default GetStartedScreen1;

