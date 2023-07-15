import { StyleSheet, Text, View,TouchableOpacity,Image, ActivityIndicator, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import MyCourseCard from '../components/MyCourseCard';

const MyCourseScreen = () => {

  
  const[loader,setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    },2000);
  })

  return (
    <View style={loader? styles.activityContainer :styles.container}>
      {loader ? <ActivityIndicator size="small" /> :
   <>
      <View style={styles.headContainer}>
      <Text style={styles.headTitle}>
        My Courses
      </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

       <MyCourseCard/>
       <MyCourseCard/>
       <MyCourseCard/>
       <MyCourseCard/>
       <MyCourseCard/>

      </ScrollView>
    </>  }
    </View>
  )

}

export default MyCourseScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    backgroundColor:'#FAFCFB',
    flex:1,
    },
    activityContainer:{
      display:'flex',
      flex:1,
      backgroundColor:'#FAFCFB',
      alignItems:'center',
      justifyContent:"center"
    },
    headContainer:{
      backgroundColor:"#FFFFFF",
      display:"flex",
      gap:15,
      paddingBottom:20,
      paddingLeft:30,
      paddingTop:70,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },
    headTitle:{
      fontSize:26,
      fontFamily:'SourceSans3-SemiBold',
    },
    scrollContainer:{
      display:"flex",
      gap:20,
      alignItems:'center',
      paddingHorizontal:20,
      paddingVertical:25,
    },
})