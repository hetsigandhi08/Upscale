import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Video, ResizeMode } from 'expo-av';
import vid from "../assets/video.mp4";
import OverviewScreen from './OverviewScreen';
import ContentScreen from './ContentScreen';
import FaqScreen from './FaqScreen';
import axios from 'axios';
import {url,au} from '../constant/Constant';
import { useSelector } from 'react-redux';
import YoutubeIframe from 'react-native-youtube-iframe';

const CourseVideoScreen = ({navigation,route}) => {
    const value = useSelector((state) => state.course.data);
    const count = useSelector((state) => state.count.data);
    const [_courseId] = useState(route.params._courseId);
    const [tabSelected, setTabSelected] = useState("overview")
    
    // var s = "https://www.youtube.com/watch?v=JyO5Gatb-cQ"
    // console.log(s.split('=').pop());

    // const arr = value.chapters[count.subCourse].videos[count.video].url.split('=').pop()

  return (
    <View style={{backgroundColor:"#FAFCFB",flex:1}}>
    <View style={styles.container}>
      <View style={styles.headContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="#311E70" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>
        {value.name}
      </Text>
      </View>
      {/* <Video style={styles.videoContainer} ref={video} source={{uri:"https://drive.google.com/uc?id=1yRo8xYE91Tn7Ep33-SKg0rcA2bvOadTX&export=download"}} resizeMode={ResizeMode.COVER} useNativeControls={true} /> */}

      <YoutubeIframe 
      height={240}
      play={true}
      videoId={value.chapters[count.subCourse].videos[count.video].url.split('=').pop()}
      />  
  

      <View style={styles.bottomContainer}>
         <Text style={styles.courseTitle}>
         {value.chapters[count.subCourse].videos[count.video].name}
         </Text>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-information-circle-sharp" size={24} color="#5C38D1" />
         <Text style={styles.courseSubTitle}>
         Watch it in *0.25 For 
         </Text>
         </View>
         <View style={[styles.topHeader,styles.boxShadow]}>
         <TouchableOpacity onPress={()=>setTabSelected("overview")} style={tabSelected== "overview" ? styles.btnContainerSelected : styles.btnContainer}>
          <Text style={tabSelected== "overview" ? styles.btnTextSelected : styles.btnText}>
            Overview
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setTabSelected("contents")} style={tabSelected== "contents" ? styles.btnContainerSelected : styles.btnContainer}>
          <Text style={tabSelected== "contents" ? styles.btnTextSelected : styles.btnText}>
            Contents
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>setTabSelected("FAQ")} style={tabSelected== "FAQ" ? styles.btnContainerSelected : styles.btnContainer}>
          <Text style={tabSelected== "FAQ" ? styles.btnTextSelected : styles.btnText}>
            FAQ
          </Text>
          </TouchableOpacity>
         </View>
       </View>
     </View> 


         <ScrollView scrollEnabled  contentContainerStyle={styles.scrollContainer}>
           {tabSelected == "overview" ? <OverviewScreen/> : tabSelected == "contents" ? <ContentScreen/> : <FaqScreen/>}
         </ScrollView>
     </View>
  )
}

export default CourseVideoScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#FAFCFB',
        // flex:1,
    },
    scrollContainer:{
        display:"flex",
        paddingVertical:15,
        paddingHorizontal:25,
        gap:10,
        backgroundColor:'#FAFCFB',
        // flex:1,
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
    backButton:{
        // marginRight:10,
        // alignSelf:'flex-start',
        // padding:10     
    },
    videoContainer: {
        width: '100%',
        height: 240,
    },
    bottomContainer:{
        display:'flex',
        paddingHorizontal:20,
        paddingVertical:0,
        gap:10,
    },
    courseTitle:{
        fontSize:20,
        color:"#090909",
        fontFamily:'SourceSans3-SemiBold',
    },
    courseSubTitle:{
        fontSize:16,
        color:"#5C38D1",
        fontFamily:'SourceSans3-Regular',
    },
    topHeader:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:15,
        width:"100%",
        height:65,
        borderColor:"#ABABAB",
        borderWidth:1,
        borderRadius:45,
        marginTop:20,
        backgroundColor:"#FFFFFF"
    },
    boxShadow:{
      shadowColor:'#171717',
      shadowRadius:1,
      shadowOffset:{width:-2,height:4},
      shadowOpacity:0.1,
      elevation:5
    },
    btnContainer:{
        backgroundColor:"#FFFFFF",
        height:50,
        width:100,
        borderRadius:45,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    btnContainerSelected:{
        backgroundColor:"#C768FF",
        height:50,
        width:100,
        borderRadius:45,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    btnText:{
        color:"#000000",
        fontSize:16,
        fontFamily:'SourceSans3-SemiBold',
    },
    btnTextSelected:{
        color:"#FFFFFF",
        fontSize:16,
        fontFamily:'SourceSans3-SemiBold',
    },
})