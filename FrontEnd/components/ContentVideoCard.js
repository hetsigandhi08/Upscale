import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';
import { setCount } from '../redux/countSlice';

const ContentVideoCard = ({title,data,indexSub}) => {
  const value = useSelector((state) => state.course.data);
  const count = useSelector((state) => state.count.data);
  const dispatch = useDispatch();
//   console.log(count)
    function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hours and " + rminutes + " min";
    }
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.courseTitle}>{title}</Text>
       

       {/* <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item,index}) => <TouchableOpacity onPress={()=> dispatch(setCount({
            subCourse:indexSub,
            video:index
        }))} style={styles.videoContainer}>
        <View>
        <Text style={styles.videoTitle}>{item.name}</Text>
        <Text style={styles.videoSubTitle}>{timeConvert(item.duration)}</Text>
        </View>

        <Ionicons  name="ios-play" size={24} color="black" />
        </TouchableOpacity> }

       /> */}

       {
        data.map((item,index)=>(
        <TouchableOpacity key={index} onPress={()=>{ dispatch(setCount({
            subCourse:indexSub,
            video:index
        }))
        console.log("1")}} style={styles.videoContainer}>
        <View>
        <Text numberOfLines={1} style={styles.videoTitle}>{item.name}</Text>
        <Text style={styles.videoSubTitle}>{timeConvert(item.duration)}</Text>
        </View>

        <Ionicons  name="ios-play" size={24} color="black" />
        </TouchableOpacity>
        ))
       }
      </View>
  )
}

export default ContentVideoCard

const styles = StyleSheet.create({
    contentContainer:{
        display: 'flex',
        gap:10,
    },
    courseTitle:{
        fontSize:20,
        color:"#5237C0",
        fontFamily:'SourceSans3-SemiBold',
    },
    videoTitle:{
        fontSize:14,
        color:"#090909",
        width:240,
        fontFamily:'SourceSans3-SemiBold',
    },
    videoSubTitle:{
        fontSize:12,
        fontWeight:'400',
        fontFamily:'SourceSans3-SemiBold',
        color:'#929292'
    },
    videoContainer:{
        height:65,
        width:"100%",
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:5,
        paddingVertical:15,
        paddingHorizontal:20,
        marginBottom:10
    }
})