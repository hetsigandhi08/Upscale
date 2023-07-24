import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, ActivityIndicator, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Progress from 'react-native-progress';
import InstructorCard from '../components/InstructorCard';
import fra from '../assets/Frame108.png'
import fa1 from '../assets/Frame1.png'
import fa2 from '../assets/Frame2.png'
import WrappedLoader from '../components/WrappedLoader';
import Accordion from '../components/Accordion';
import { useSelector } from 'react-redux';

const HomeScreen = ({navigation}) => {

  const homeData = useSelector((state) => state.home.data);

  return (
    <View style={{flex:1}}>
    <View style={{backgroundColor:"#FAFCFB",width:"100%",height:50}}></View>
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.topContainer}>
      <Text style={styles.title}>Your progress</Text>

      <View style={{display:"flex",flexDirection:"row",gap:10,alignItems:"center"}}>
      <Text style={styles.title}>{homeData.totalProgress}%</Text><Text style={{fontFamily:'SourceSans3-SemiBold',color:"#929292",fontSize:16}}>Completed</Text>
      </View>
       
       <View style={{display:"flex",gap:7}}>
      <Progress.Bar height={10} progress={(homeData.totalProgress)/100} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9'  borderWidth={0} animationType='timing' />
      <Text style={styles.subTitle}>Complete the pending courses to reach the milestone.</Text>
      </View>
      </View>



      <View style={styles.yourCourseContainer}>
      <Text style={styles.title}>Your courses</Text>

      {
        homeData.learningCourses.map((item,index)=>
      <TouchableOpacity key={index} style={styles.boxShadow} onPress={()=>navigation.navigate("CourseDetails",{_courseId:item.courseId})} >
      <Progress.Bar style={{borderRadius:10,borderColor:"#ABABAB",borderWidth:1}} height={100} progress={0.23} width={null} animated color='#CAF0F8'  unfilledColor='#FAFCFB'  borderWidth={0} animationType='timing'> 
      <View style={{position:'absolute',left:24,top:18}}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subTitle}> {item.progress}% Completed</Text>
      </View>
      </Progress.Bar>
      </TouchableOpacity>
        )
      }

      </View>



      <View style={styles.TopInstructorContainer}>
        <Text style={styles.title}>Suggested Courses</Text>

        <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={homeData.suggestionCourses}
        renderItem={({item}) => <InstructorCard navigation={navigation} courseName={item.name} thumbnail={item.img} courseId={item._id} /> }
      />

      </View>

      <View style={styles.ExploreCourseContainer}>
      <Text style={styles.title}>Explore courses</Text>

      <Image style={{borderRadius:5,width:"100%",height:280}} source={fra} />

      <View style={{gap:3}}>
      <Text style={styles.MinTitle}>Demanding Skills</Text>
      <Text style={styles.subTitle}>Click the sub categories to see more details about structure</Text>
      </View> 

      <Accordion title={"Machine Learning"} icon='ios-add-circle-outline' />
      <Accordion title={"React and Redux"} icon='ios-add-circle-outline' />
      <Accordion title={"Prompt Engineering"} icon='ios-add-circle-outline' />
       

      <View style={{gap:3}}>
      <Text style={styles.MinTitle}>From Scratch</Text>
      <Text style={styles.subTitle}>Click the sub categories to see more details about structure</Text>

      <View style={{display:"flex",flexWrap:"wrap",maxHeight:400,gap:30,marginTop:10, flexDirection:"column"}}>

      <TouchableOpacity style={{display:"flex",width:160,height:160,borderRadius:5,borderWidth:1,borderColor:"#D1D1D1",alignItems:"center",paddingTop:30}}>
          <Image resizeMode='stretch' source={fa1} style={{width:30,height:30,marginBottom:30}}/>
          <View style={{width:"100%",padding:10}}  >
            <Text style={styles.Min2Title}>
            Open CV and Tensor
            </Text>
            <Text style={styles.subTitle}>
              4 Courses
            </Text>
            
          </View>
      </TouchableOpacity>

      <TouchableOpacity style={{display:"flex",width:160,height:160,borderRadius:5,borderWidth:1,borderColor:"#D1D1D1",alignItems:"center",paddingTop:30}}>
          <Image resizeMode='stretch' source={fa2} style={{width:30,height:30,marginBottom:30}}/>
          <View style={{width:"100%",padding:10}}  >
            <Text style={styles.Min2Title}>
            Prompt Engineering
            </Text>
            <Text style={styles.subTitle}>
              4 Courses
            </Text>
            
          </View>
      </TouchableOpacity>

      <TouchableOpacity style={{display:"flex",width:160,height:160,borderRadius:5,borderWidth:1,borderColor:"#D1D1D1",alignItems:"center",paddingTop:30}}>
          <Image resizeMode='stretch' source={fa2} style={{width:30,height:30,marginBottom:30}}/>
          <View style={{width:"100%",padding:10}}  >
            <Text style={styles.Min2Title}>
            Open CV and Tensor
            </Text>
            <Text style={styles.subTitle}>
              4 Courses
            </Text>
            
          </View>
      </TouchableOpacity>

      <TouchableOpacity style={{display:"flex",width:160,height:160,borderRadius:5,borderWidth:1,borderColor:"#D1D1D1",alignItems:"center",paddingTop:30}}>
          <Image resizeMode='stretch' source={fa1} style={{width:30,height:30,marginBottom:30}}/>
          <View style={{width:"100%",padding:10}}  >
            <Text style={styles.Min2Title}>
            Open CV and Tensor
            </Text>
            <Text style={styles.subTitle}>
              4 Courses
            </Text>
            
          </View>
      </TouchableOpacity>

      </View>
      </View>  

 
      </View>
    </ScrollView>
    </View>
  )
}

export default WrappedLoader(HomeScreen);

const styles = StyleSheet.create({
  container:{
    display:'flex',
    // flex:1,
    backgroundColor:'#FAFCFB',
    alignItems:'center',
    paddingTop:10,
    paddingLeft:20,
    // paddingRight:20,
    gap:20,
    paddingBottom:50
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
  ExploreCourseContainer:{
    display:'flex',
    width:'100%',
    paddingRight:20,
    gap:20,
  },
  MinTitle:{
    fontSize:24,
    fontFamily:'SourceSans3-SemiBold'
  },
  Min2Title:{
    fontSize:16,
    fontFamily:'SourceSans3-SemiBold'
  }
})