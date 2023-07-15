import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import * as Progress from 'react-native-progress';
const OnBoardingScreen3 = ({ navigation }) => {
    const[progress,setProgress]=useState(0);
    const[interest,SetInterest]=useState([]);
    const[showElement,setShowElement]=useState(false);
    useEffect(()=>{
      setTimeout(() => {
        setProgress(0.7)
      }, 200);
    },[])

   const handleInput=(item)=> 
   {  if(interest.includes(item)){
    if(interest.length>3){
      setShowElement(false);
    }
    SetInterest(interest.filter((selectedItem)=>selectedItem!==item));
   }else if(!interest.includes(item) && interest.length<4){
    SetInterest([...interest,item]);
   }
   else{
    setShowElement(true);
    console.log(showElement);
   }
  }
  
  const handleSubmit=()=>{
    setProgress(5);
    setTimeout(() => {
      navigation.navigate('Tab')
    }, 600);
   
  }
  const data=['Programming','AWS','JavaScript','C program','Web Development','Full Stack Developer','Cyber Security','Google Cloud']
  return (
    <View style={styles.container}>
       <View style={styles.ProgressContainer}>
      <Text style={styles.progressTitle}>2/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
      <View style={styles.topContainer}>
      <Text style={styles.title}>Your Interest</Text>
      <Text style={styles.subTitle}>Choose upto 4 of the Following</Text>
      {showElement&&<Text style={styles.error}>You can select only 4 Interest</Text>}
    </View>
    <View style={styles.wordCloudContainer}>
      {data.map((item)=>(
        <TouchableOpacity key={item} style={interest.includes(item)?styles.wordCloudSelected:styles.wordCloud} onPress={()=>{handleInput(item)}}>
        <Text style={interest.includes(item)?styles.wordSelected:styles.word}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.bottomContainer}>
    <TouchableOpacity style={styles.loginBtn}  onPress={handleSubmit}>
          <Text style={styles.loginText}>Register</Text>
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
        justifyContent:'flex-start',
        gap:10,
    },
    wordCloud:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'auto',
        height:50,
        padding:15,
        backgroundColor:'#D9D9D9',
        opacity:0.8,
        borderRadius:44,
        textAlign:'center',
        marginBottom:10
    },
    wordCloudSelected:{
       display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'auto',
        height:50,
        padding:15,
        backgroundColor:'#EB5951',
        borderRadius:42,
        textAlign:'center',
       marginBottom:10,
       
       
    },
    loginBtn:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:263,
      height:47,
      backgroundColor:'#5237b0',
      borderRadius:42,
      marginTop:30,
      
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
},
wordSelected:{
  color:'white'
},

error:{
  color:'red',
  alignSelf:'center',
  fontFamily:'SourceSans3-SemiBold',
  fontWeight:'400',
}






})