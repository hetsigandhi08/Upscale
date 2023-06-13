import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Progress from 'react-native-progress';
const OnBoardingScreen3 = ({ navigation }) => {
    const[progress,setProgress]=useState(0);
    
    useEffect(()=>{
      setTimeout(() => {
        setProgress(0.8)
      }, 200);
    })
  return (
    <View style={styles.container}>
       <View style={styles.ProgressContainer}>
      <Text style={styles.progressTitle}>2/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
      <View style={styles.topContainer}>
      <Text style={styles.title}>Your Interest</Text>
      <Text style={styles.subTitle}>Choose upto 4 of the Following</Text>
    </View>
    <View style={styles.wordCloudContainer}>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Progamming</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Javascript</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>C program</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Web Development</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Full Stack Developer</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Cyber Security</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>Google cloud</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wordCloud}>
    <Text style={styles.word}>AWS</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.bottomContainer}>
    <TouchableOpacity style={styles.loginBtn}  onPress={toSignUp=()=>{navigation.navigate('OnBoardingScreen3')}}>
          <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.optionText}>
        Skip for Now
      </Text>
    </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default OnBoardingScreen3

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFCFB',
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        padding:40
      },
      topContainer:{
        width:'100%',
        gap:4,
        alignSelf:'flex-start',
        marginTop:40,
        marginBottom:20
        
      },
    ProgressContainer:{
        width:'100%',
        marginTop:40
        
    },
      
      title:{
        fontSize:30,
        fontFamily:'SourceSans3-SemiBold'
    },
    subTitle:{
        fontSize:14,
        fontWeight:'400',
        fontFamily:'SourceSans3-Regular',
        color:"#636363"
    },
      progressTitle:{
        fontSize:20,
        fontWeight:'400',
        fontFamily:'SourceSans3-SemiBold',
        marginBottom:8,
    },
    wordCloudContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    wordCloud:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'auto',
        height:60,
        padding:15,
        backgroundColor:'#D9D9D9',
        borderRadius:42,
        textAlign:'center',
        marginBottom:10
    },
    loginBtn:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:263,
      height:47,
      backgroundColor:'#5237b0',
      borderRadius:42,
      marginTop:30
  },
  loginText:{
      color:'#FEFEFE',
      fontFamily:'SourceSans3-Regular',
  },
  bottomContainer:{
    alignItems:'center',
    gap:20,
    marginTop:'auto'
},
optionText:{
    color:"#7A7A7A",
    fontSize:16,
    fontFamily:'SourceSans3-Regular'
}


})