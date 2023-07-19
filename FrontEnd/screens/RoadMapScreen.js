import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView} from 'react-native'
import React,{useState, useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import slack from '../assets/slack.png'
import Discord from '../assets/Discord.png'
import VerticalStepIndicator from '../components/VerticalStepIndicator';
import axios from 'axios';
import {url,au} from '../constant/Constant';
import { useSelector } from 'react-redux';

const RoadMapScreen = ({navigation,route}) => {
  const [_courseId] = useState(route.params._courseId);
    const [courseData, setCourseData] = useState({})
    const value = useSelector((state) => state.course.data);
    const courseDetailsApi= async()=>{
      await axios.get(url+`api/course/${_courseId}`,{headers:{
          Authorization:au
          
      }}).then((res)=>{
          // console.log(res.data)
          setCourseData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
  }

  useEffect(()=>{
      courseDetailsApi();
      // console.log(courseData.chapters)
  },[courseData])
  return (
    <View style={styles.container}>
    
    <View style={styles.headContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="#311E70" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>
        Roadmap
      </Text>
      </View>


   <View style={styles.container2}>
   
   <Text style={styles.bottomTitle} >
    {courseData.name}
   </Text>
    
    <View style={{display:"flex",flex:1}}>
        <VerticalStepIndicator data={_courseId} navigation={navigation}/>
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
        // alignItems:'flex-start',
        // justifyContent:"space-around",
        // paddingHorizontal:20,
        paddingBottom:20
      },
      headContainer:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:15,
        paddingBottom:20,
        paddingLeft:10,
        paddingTop:70,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    headTitle:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold',
        color:"#311E70"
    },
      container2:{
        display:'flex',
        flex:1,
        backgroundColor:'#FAFCFB',
        alignItems:'flex-start',
        justifyContent:"space-around",
        paddingHorizontal:40,
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
        backgroundColor:'#7045FF',
        borderRadius:42,
    },
    loginText:{
      color:'#FEFEFE',
      fontFamily:'SourceSans3-Regular',
  },
    // backButton:{
    //   marginTop:30,
    //   alignSelf:'flex-start',
    //   padding:10
      
    // },
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