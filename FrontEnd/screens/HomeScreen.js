import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Progress from 'react-native-progress';
import InstructorCard from '../components/InstructorCard';

const HomeScreen = () => {

  const[progress,setProgress]=useState(0.3);
  const[loader,setLoader] = useState(true)

    useEffect(()=>{
      setTimeout(() => {
        setLoader(false)
      },2000);
    })

    const DATA = [1,2,2,3];

  return (
    <ScrollView contentContainerStyle={loader ? styles.activityContainer :styles.container}>
      { loader ? <ActivityIndicator size="small"/> : 
      
      (<>
      <View style={styles.topContainer}>
      <Text style={styles.title}>Your progress</Text>

      <View style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
      <Text style={styles.title}>22%</Text><Text style={{fontFamily:'SourceSans3-SemiBold',color:"#929292",fontSize:16}}>Completed</Text>
      </View>
       
       <View style={{display:"flex",gap:7}}>
      <Progress.Bar height={10} progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9'  borderWidth={0} animationType='timing' />
      <Text style={styles.subTitle}>Complete the pending courses to reach the milestone.</Text>
      </View>
      </View>



      <View style={styles.yourCourseContainer}>
      <Text style={styles.title}>Your courses</Text>
      
      <TouchableOpacity style={styles.boxShadow}>
      <Progress.Bar style={{borderRadius:10,borderColor:"#ABABAB",borderWidth:1}} height={100} progress={0.23} width={null} animated color='#CAF0F8'  unfilledColor='#FAFCFB'  borderWidth={0} animationType='timing'> 
      <View style={{position:'absolute',left:24,top:18}}>
      <Text style={styles.title}>UX Design</Text>
      <Text style={styles.subTitle}> 23% Completed</Text>
      </View>
      </Progress.Bar>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxShadow}>
      <Progress.Bar style={{borderRadius:10,borderColor:'#ABABAB',borderWidth:1}} height={100} progress={0.4} width={null} animated color='#FED9B7'  unfilledColor='#FAFCFB'  borderWidth={0} animationType='timing'> 
      <View style={{position:'absolute',left:24,top:18}}>
      <Text style={styles.title}>React and Redux</Text>
      <Text style={styles.subTitle}> 40% Completed</Text>
      </View>
      </Progress.Bar>
      </TouchableOpacity>

      </View>



      <View style={styles.TopInstructorContainer}>
        <Text style={styles.title}>Top Instructor channels</Text>

        <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <InstructorCard/> }
      />

      </View>

      <View style={styles.TopInstructorContainer}>
        <Text style={styles.title}>Top Courses</Text>

        <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <InstructorCard/> }
      />

      </View>
      </>
       )}



    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    // flex:1,
    backgroundColor:'#FAFCFB',
    alignItems:'center',
    paddingTop:80,
    paddingLeft:20,
    // paddingRight:20,
    gap:20
    // fontFamily:'SourceSans3-SemiBold'
    // justifyContent:"center"
  },
  activityContainer:{
    display:'flex',
    flex:1,
    backgroundColor:'#FAFCFB',
    alignItems:'center',
    justifyContent:"center"
  },
  topContainer:{
    display:'flex',
    width:'100%',
    gap:15,
    paddingRight:20
  },
  title:{
    fontSize:28,
    fontFamily:'SourceSans3-SemiBold'
  },
  subTitle:{
    fontSize:14,
    fontWeight:'400',
    fontFamily:'SourceSans3-Regular',
    color:'#929292'
  },
  boxShadow:{
    shadowColor:'#171717',
    shadowRadius:1,
    shadowOffset:{width:-2,height:4},
    shadowOpacity:0.1,
    elevation:5
  },
  yourCourseContainer:{
    display:'flex',
    width:'100%',
    gap:20,
    paddingRight:20
  },
  TopInstructorContainer:{
    display:'flex',
    width:'100%',
    gap:20,
  },
})