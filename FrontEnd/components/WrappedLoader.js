import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import { url, au } from '../constant/Constant';
import { useDispatch } from 'react-redux';
import { setHomeData } from '../redux/homeDataSlice';
import axios from 'axios';

const WrappedLoader = (WrappedComponent) => (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const recentCourseAPI =async()=>{
    await axios.get(url+"api/home",{headers:{
      Authorization:au,    
    }
  }).then((res)=>{
      // console.log(res.data)
      dispatch(setHomeData(res.data))
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    recentCourseAPI();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={loading? styles.activityContainer :styles.container}>
      {loading ? <ActivityIndicator size="small" /> : <WrappedComponent {...props} />}
    </View>
  )
}

export default WrappedLoader

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
})