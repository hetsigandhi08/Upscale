import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Accordion = ({data,title,icon="ios-chevron-down"}) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(!expand)
    console.log("2")
  }
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  return (
    <View>
            <TouchableOpacity style={styles.row} onPress={toggleExpand}>
                <Text style={[styles.title, styles.font]}>{title}</Text>
                <Ionicons name={expand ? 'ios-chevron-up' : icon} size={30} color={"#000000"} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                expand &&
                <View style={styles.child}>
                    <Text style={styles.dataText}>{data}</Text>    
                </View>
            }
            
       </View>
  )
}

export default Accordion

const styles = StyleSheet.create({
    title:{
        fontSize:14,
        fontFamily:'SourceSans3-SemiBold',
        color: "#090909",
        width:200,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        // height:56,
        paddingVertical:15,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "#FFFFFF",
        borderRadius:5
    },
    parentHr:{
        height:1,
        color: "#FFFFFF",
        width:'100%'
    },
    child:{
        backgroundColor: "#F5F5F5",
        padding:25,
        borderRadius:5
    },
    dataText:{
        fontSize:14,
        fontFamily:'SourceSans3-Regular',
        color: "#090909",
    }
})