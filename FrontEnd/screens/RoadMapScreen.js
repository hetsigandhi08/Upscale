import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import slack from '../assets/slack.png'
import Discord from '../assets/Discord.png'
import VerticalStepIndicator from '../components/VerticalStepIndicator';

const RoadMapScreen = () => {
  return (
    <View style={styles.container}>
    
    <TouchableOpacity style={styles.backButton}>
  <Ionicons name="ios-arrow-back" size={24} color="black" />
  </TouchableOpacity>
   
   <View style={styles.container2}>
   <Text style={styles.title}>React and Redux</Text>
   
    
    <View style={{display:"flex",flex:1}}>
        <VerticalStepIndicator/>
    </View>





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

export default RoadMapScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#FAFCFB',
        alignItems:'flex-start',
        justifyContent:"space-around",
        paddingHorizontal:20,
        paddingVertical:30
      },
      container2:{
        display:'flex',
        flex:1,
        backgroundColor:'#FAFCFB',
        alignItems:'flex-start',
        justifyContent:"space-around",
        paddingHorizontal:20,
        paddingTop:5,
        paddingBottom:5,
        gap:20
        // paddingVertical:30
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
      gap:20,
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
    },
    bottomSubTitle:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:'#929292'
      }
})