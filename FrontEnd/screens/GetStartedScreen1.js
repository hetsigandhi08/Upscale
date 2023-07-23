import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Rectangle4 from '../assets/Rectangle4.jpg'
import Rectangle6 from '../assets/Rectangle6.jpg'
import * as Progress from 'react-native-progress';
import { getValueFor } from '../services/SecureStore';




const GetStartedScreen1 = ({navigation}) => {


  getValueFor("auth").then((res)=>{
    if(res){
      navigation.navigate('Tab')
    }
  })


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

const styles = StyleSheet.create({

  container:{
      backgroundColor:'#FAFCFB',
      display:'flex',
      flex:1,
      alignItems:'center',
      justifyContent:'space-around',
      gap:70,
      paddingHorizontal:40,
      paddingBottom:40,
      paddingTop:80,
      
    },
    topContainer:{
      width:'100%',
    },
    progressTitle:{
      fontSize:20,
      fontWeight:'400',
      fontFamily:'SourceSans3-SemiBold',
      marginBottom:8
  },
  title:{
    display:'flex',
      fontSize:30,
      fontFamily:'SourceSans3-SemiBold',
      textAlign: 'left',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            // textAlignVertical: 'center',
            // alignContent: 'center',
  },
  subLogin:{
    fontSize:14,
    fontWeight:'400',
    textAlign: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          alignContent: 'center',
    fontFamily:'SourceSans3-Regular',
    textDecorationLine:'underline',
    color:"#5E60CE"},
  subTitle:{
   
      fontSize:14,
      fontWeight:'400',
      textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
      fontFamily:'SourceSans3-Regular',
      color:"#636363"
  }, 
  columnStyle:{
    // flex: 1,
    // alignItems: "center",
    flexDirection: "row",
  },
  square: {
    width: '70%',
    height: 300,
    margin: 4,
    borderRadius:5
  },
  side:{
    width:'30%',
    height: 300,
    margin:4,
    borderRadius:5
  },
  loginBtn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:263,
    height:47,
    backgroundColor:'#5237b0',
    borderRadius:42,
    marginTop:30
},
loginText:{
  color:'#FEFEFE',
  fontFamily:'SourceSans3-Regular',
}
})