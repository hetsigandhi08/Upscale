import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const CourseDetailsScreen = () => {
  return (
    
    <View style={styles.container}>

      <View style={styles.headContainer}>
      <TouchableOpacity style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>
        Course Details
      </Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.courseContainer}>
        <Text style={styles.title}>
        React and Redux Course 
        </Text>

        <Text style={styles.subTitle}>
        By Andrew carson
        </Text>

        <Image style={styles.thumbnail} source={{uri:"https://miro.medium.com/v2/resize:fit:1200/0*YH6w5EXfjQpHTl8R"}} />

      </View>

      
      <TouchableOpacity style={styles.roadMapBtn} >
          <Text style={styles.roadMapText}>See Roadmap</Text> 
      </TouchableOpacity>


      <View style={styles.detailsContainer}>
          
          
          <Text style={styles.courseTitle}>
          Course details
          </Text>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn automation, game, app and web development, data science and machine learning all using Python.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>Create a portfolio of 100 Python projects to apply for developer jobs.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>Be able to use Python for data science and machine learning.</Text>
          </View>

          <View style={styles.line}></View>


          <Text style={styles.courseTitle}>
          Ratings and Reviews
          </Text>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn automation, game, app and web development, data science and machine learning all using Python.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn automation, game, app and web development, data science and machine learning all using Python.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn automation, game, app and web development, data science and machine learning all using Python.</Text>
          </View>

          <View style={styles.courseSubContainer}>
          <Text style={styles.courseSubTitle}>•</Text> 
          <Text style={styles.courseSubTitle}>You will learn automation, game, app and web development, data science and machine learning all using Python.</Text>
          </View>

      </View>

      </ScrollView>


    </View>
  )
}

export default CourseDetailsScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#FAFCFB',
        flex:1,
        // paddingHorizontal:30,
        // paddingTop:40,
        // gap:20,
      },
    headContainer:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        gap:15,
        paddingBottom:20,
        paddingLeft:30,
        paddingTop:50,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    headTitle:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold',
    },
    scrollContainer:{
        display:'flex',
        alignItems:'center',
        gap:20,
        paddingHorizontal:20,
        paddingBottom:20,
        paddingTop:20,
      },
    backButton:{
        // marginTop:15,
        // marginLeft:20,
    },
    courseContainer:{
        display:'flex',
        width:'100%',
        height:290,
        backgroundColor:"#E2EAFC",
        borderRadius:10,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:20,
        gap:10,
    },
    title:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold'
    },
    subTitle:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:'#929292'
    },
    thumbnail:{
        width:"100%",
        display:"flex",
        flex:1,
        borderRadius:10,
        backgroundColor:"#FFFFFF"
    },
    roadMapBtn:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        width:263,
        height:47,
        // backgroundColor:'#5237b0',
        backgroundColor:"#031D44",
        borderRadius:42,
    },
    roadMapText:{
        color:'#FEFEFE',
        fontFamily:'SourceSans3-Regular',
    },
    detailsContainer:{
        width:"100%",
        display:'flex',
        padding:20,
        flex:1,
        gap:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#BBBBBB"
    },
    courseTitle:{
        fontSize:22,
        fontFamily:'SourceSans3-SemiBold'
    },
    courseSubContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    courseSubTitle:{
        fontSize:12,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:'#929292',
    },
    line:{
        width:"100%",
        height:1,
        borderTopColor:"#000000",
        borderTopWidth:0.5,
    }
})