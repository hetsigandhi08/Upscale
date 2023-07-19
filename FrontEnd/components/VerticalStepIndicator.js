import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import axios from 'axios';
import {url,au} from '../constant/Constant';


const stepIndicatorStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:35,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#9CD681',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#9CD681',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#9CD681',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#9CD681',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#9CD681',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    labelAlign:"flex-start",
    currentStepLabelColor: '#090909'
};

export default function VerticalStepIndicator({data,navigation}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [count,setCount] = useState(1)

    const [courseData, setCourseData] = useState([])


  useEffect(()=>{
    axios.get(url+`api/course/${data}`,{headers:{
              Authorization:au
          }}).then((res)=>{
              // console.log(res.data)
              setCourseData(res.data.chapters)
              setCount(res.data.chapters.length)
            }).catch((err)=>{
              console.log(err)
            })
  })

  // console.log(typeof(count))


  return (
    <StepIndicator
        customStyles={stepIndicatorStyles}
        stepCount={count}
        direction="vertical"
        currentPosition={currentPage}
        labels={courseData.map((item) => item.name)}
        onPress={(num)=>{
          setCurrentPage(num)
          navigation.navigate('CourseVideo',{_courseId:data})
        }}
      /> 
      
  );
}

const styles = StyleSheet.create({
});