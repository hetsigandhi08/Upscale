
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import slack from '../assets/slack.png'
import Discord from '../assets/Discord.png'
import React, {useEffect, useState} from 'react'


const MyCourseScreen = () => {

  const[loader,setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    },2000);
  })

  return (
    <View style={styles.container}>
   {loader ? <ActivityIndicator size="small" /> : <Text>My Course screen</Text>}
  </View>
  )

}

export default MyCourseScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    backgroundColor:'#FAFCFB',
        alignItems:'flex-start',
        justifyContent:"space-around",
        padding:20
      },
      loginGoogle:{
        display:'flex',
        flexDirection:'row',
        gap: 9,
        alignItems:'center',
        justifyContent:'center',
        width:263,
        height:47,
        backgroundColor:'#031D44',
        borderRadius:42,
    },
    loginText:{
      color:'#FEFEFE',
      fontFamily:'SourceSans3-Regular',
  },
    backButton:{
      marginTop:30,
      alignSelf:'flex-start',
      padding:10
      
    },
    bottomContainer:{
      display:'flex',
      justifyContent:'space-between',
      marginTop:'auto',
      gap:5,  
    },
    title:{
      fontSize:20,
      fontFamily:'SourceSans3-SemiBold'
  },
    bottomContainer2:{
      display:'flex',
      justifyContent:'space-between',
      marginTop:'auto',
      gap:15,
      marginLeft:10,
      alignItems:'center',
      marginTop:10
    },
    bottomTitle:{
      fontSize:20,
      fontFamily:'SourceSans3-SemiBold',
      alignItems:'flex-start'
    }

})