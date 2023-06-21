import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Rectangle10 from '../assets/Rectangle10.png'
import Rectangle11 from '../assets/Rectangle11.png'
import * as Progress from 'react-native-progress';

const GetStartedScreen2 = ({navigation}) => {


const[progress,setProgress]=useState(0);
useEffect(()=>{
  setTimeout(() => {
    setProgress(0.6)
  }, 200);
})

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.progressTitle}>2/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
      <View style={styles.columnStyle}>
      <Image style={styles.side} source={Rectangle10} />
      <Image style={styles.square} source={Rectangle11} />
      </View>
     <View style={styles.topContainer}>
     <Text style={styles.title}>Get suggestions from the best partners available on social media</Text>
      {/* <Text style={styles.subTitle}>Take the worlds best courses from top universities</Text> */}
     </View>
     <View>
     <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate('OnBoardingScreen2')}} >
          <Text style={styles.loginText}>Get Started</Text>
      </TouchableOpacity>
     </View>
     <View style={{display:"flex",flexDirection:"row"}}>
      <Text style={styles.subTitle}>Already have an account </Text><TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
      <Text>Login</Text>
       </TouchableOpacity>
      </View>
      <View>
      
     </View>

      </View>
  )
}

export default GetStartedScreen2

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
  },
  side:{
    width:'30%',
    height: 300,
    margin:4,
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