import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import * as Progress from 'react-native-progress';
import {url} from '../constant/Constant'
import axios from 'axios'
// import * as Keychain from 'react-native-keychain';

const OnBoardingScreen1 = ({ navigation }) => {

    const [emailFocusState,setEmailFocusState] = useState(false);
    const [passwordFocusState,setPasswordFocusState] = useState(false);
    const [confirmPasswordFocusState,setConfirmPasswordFocusState] = useState(false)
    const [emailValue, setEmailValue] = useState({
      value:"",
      valid:true,
    });
    const [passwordValue, setPasswordValue] = useState("");
    const[confirmPasswordValue,setConfirmPasswordValue]=useState("");
  const[progress,setProgress]=useState(0);
    const[showElement,setShowElement]=useState(false);
    const[passwordElement,setPasswordElement]=useState(false);
    const[loginIndicator,setLoginIndicator]=useState(false);
    const[showEmail,setShowEmail]=useState(false)
    useEffect(()=>{
      setTimeout(() => {
        setProgress(0.1)
      }, 200);
    })

    const emailValidate = (text)=>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if(reg.test(text)){
        setEmailValue({value:text,valid:true})
        console.log(emailValue);
      }else{
        setEmailValue({value:text,valid:false})
      }
    }

    const validatePassword = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{10,})/;
      return regex.test(password);
    }
    
    const login = async()=>{
      setLoginIndicator(true)
      await axios.post(url+"api/auth/register",{email:emailValue.value,password:passwordValue})
      .then((res)=>{
        console.log(res.data)
        navigation.navigate("Login")
        // await Keychain.setGenericPassword(emailValue.value, passwordValue);
      })
      .catch((err)=>{
        console.log(err)
        Alert.alert("User already exists","Please enter a diffrent email address");
    })

      setTimeout(()=>{
        setLoginIndicator(false)
      },1000)
  }

    const handleSubmit=()=>{
      setShowEmail(false);
      setShowElement(false);
      setPasswordElement(false);
      if(emailValue.value){
        
        if(confirmPasswordValue===passwordValue){
          
          if(validatePassword(passwordValue)){
            login()
          }
          else{
            setPasswordElement(true)
          }
          
        }
        else{
          setShowElement(true);
        }
      }
      else{
        console.log("hello");
        setShowEmail(true);
      }
      
    }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.progressTitle}>1/3</Text>
    <Progress.Bar progress={progress} width={null} animated color='#9CD681'  unfilledColor='#D9D9D9' borderWidth={0} animationType='timing' />
      </View>
    <View style={styles.topContainer}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Help us to seek more new features</Text>
    </View>

    <View style={styles.inputContainer}>
    {showEmail&&<Text style={styles.error}>Please Enter a valid email address</Text>}
    {showElement&&<Text style={styles.error}>Password does not match</Text>}
    
    {passwordElement&&<Text style={styles.error}>Password should contain one atleast small letter,one capital letter ,one special character and should be atleast 10 characters </Text>}
    <TextInput onChangeText={emailValidate} style={emailFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Email Address' autoComplete='email' autoCapitalize="none" returnKeyType="next" onBlur={()=>setEmailFocusState(false)} onFocus={()=>setEmailFocusState(true)}/>
    <TextInput onChangeText={(e)=>setPasswordValue(e)} style={passwordFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Enter Password' secureTextEntry={true} autoComplete='password' onBlur={()=>setPasswordFocusState(false)} onFocus={()=>setPasswordFocusState(true)}/>
    <TextInput onChangeText={(e)=>setConfirmPasswordValue(e)} style={confirmPasswordFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Confirm Password' secureTextEntry={true} autoComplete='password' onBlur={()=>setConfirmPasswordFocusState(false)} onFocus={()=>setConfirmPasswordFocusState(true)}/>
      
      <TouchableOpacity style={styles.signUpBtn} onPress={handleSubmit} >
          <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate('Login')}} >
      <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

    </View>

    <View style={styles.bottomContainer}>
    <TouchableOpacity>
      <Text style={styles.optionText}>
        Other options
      </Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.loginGoogle}  >
          <Image style={{marginLeft:6}} source={google}/>
          <Text style={styles.signUpText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginApple} >
          <Image style={{marginBottom:4,marginRight:6}} source={apple}/>
          <Text style={styles.signUpText}>Apple</Text>
      </TouchableOpacity>
      </View>

    </View>
    </TouchableWithoutFeedback>
  )
}

export default OnBoardingScreen1;

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FAFCFB',
      display:'flex',
      flex:1,
      alignItems:'center',
      justifyContent:'space-around',
      padding:40
    },
    topContainer:{
      width:'100%',
      gap:4,
    },
    inputContainer:{
      alignItems:'center',
      gap:10,
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
      marginBottom:8
  },
    mailInput:{
        width:320,
        height:46,
        fontSize:14,
        fontFamily:'SourceSans3-Regular',
        paddingHorizontal:20,
        backgroundColor:'#FBFBFB',
        borderRadius:5,
        borderWidth:1,
        borderColor: '#A9A9A9'
    },
    mailInputFocused:{
        width:320,
        height:46,
        fontSize:14,
        fontFamily:'SourceSans3-Regular',
        paddingHorizontal:20,
        backgroundColor:'#FBFBFB',
        borderRadius:5,
        borderWidth:1,
        borderColor: '#5237C0'
    },
    signUpBtn:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:263,
      height:47,
      backgroundColor:'#5237b0',
      borderRadius:42,
      marginTop:30
  },
  signUpText:{
      color:'#FEFEFE',
      fontFamily:'SourceSans3-Regular',
  },
    loginBtn:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:263,
        height:47,
        // backgroundColor:'#5237b0',
        borderColor:'#5237b0',
        borderWidth:2,
        borderRadius:42,
        marginTop:10
    },
    loginText:{
        color:'#5237b0',
        fontFamily:'SourceSans3-Regular',
    },
    bottomContainer:{
        alignItems:'center',
        gap:20
    },
    optionText:{
        color:"#090909",
        fontSize:16,
        fontFamily:'SourceSans3-SemiBold'
    },
    loginGoogle:{
        display:'flex',
        flexDirection:'row',
        gap: 9,
        alignItems:'center',
        justifyContent:'center',
        width:263,
        height:47,
        backgroundColor:'#1E66DE',
        borderRadius:42,
    },
    loginApple:{
        display:'flex',
        flexDirection:'row',
        gap: 5,
        alignItems:'center',
        justifyContent:'center',
        width:263,
        height:47,
        backgroundColor:'#000000',
        borderRadius:42,
    },
    error:{
      color:'red',
      alignSelf:'center',
      fontFamily:'SourceSans3-SemiBold',
      fontWeight:'400',
    }
  })