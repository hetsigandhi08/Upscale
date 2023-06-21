import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import apple from '../assets/apple.png'
import slack from '../assets/slack.png'
import Discord from '../assets/Discord.png'

const MyCourseScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
    <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
     <View style={styles.container}>
    <Text style={styles.title}>React and Redux</Text>
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomTitle}>Collabrative Learning</Text>
      <Text style={styles.bottomSubTitle}>Join the community with Like minded people for Enhanced Learning</Text>

      <View style={styles.bottomContainer2}>
      <TouchableOpacity style={styles.loginGoogle}  >
          <Image style={{marginLeft:6}} source={Discord}/>
          <Text style={styles.loginText}>Join Discord</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginGoogle}  >
          <Image style={{marginLeft:6}} source={slack}/>
          <Text style={styles.loginText}>Join Slack</Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </View>

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