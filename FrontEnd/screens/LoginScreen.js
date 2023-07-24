import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import {url} from '../constant/Constant'
import axios from 'axios'
import { save } from '../services/SecureStore'
import { getValueFor } from '../services/SecureStore'
// import * as Keychain from 'react-native-keychain';

const LoginScreen = ({ navigation }) => {

  getValueFor("auth").then((res)=>{
    if(res){
      navigation.navigate('Tab')
    }
  })

    const [emailValue, setEmailValue] = useState({
      value:"",
      valid:true,
    });
    const [passwordValue, setPasswordValue] = useState("");

    const [emailFocusState,setEmailFocusState] = useState(false);
    const [passwordFocusState,setPasswordFocusState] = useState(false)

    const [loginIndicator, setLoginIndicator] = useState(false)

    const login = async()=>{
        setLoginIndicator(true)
        await axios.post(url+"api/auth/login",{email:emailValue.value,password:passwordValue})
        .then((res)=>{
          console.log(res.data)
          save("auth",res.data.access_token);
          setEmailValue({
            value:"",
            valid:true,
          })
          setPasswordValue("");
          navigation.navigate("Tab")
        })
        .catch((err)=>{
          console.log(err)
          Alert.alert("Warning","Invalid Username and Password")
      })

        setTimeout(()=>{
          setLoginIndicator(false)
        },1000)
    }

    const emailValidate = (text)=>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if(reg.test(text)){
        setEmailValue({value:text,valid:true})
      }else{
        setEmailValue({value:text,valid:false})
      }
    }

    
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>

    <View style={styles.topContainer}>
      <Text style={styles.title}>Welcome Back !</Text>
      <Text style={styles.subTitle}>Login into your Account</Text>
    </View>

    <View style={styles.inputContainer}>
      <TextInput onChangeText={emailValidate} value={emailValue.value} style={emailFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Email Address' autoComplete='email' autoCapitalize="none" returnKeyType="next" onBlur={()=>setEmailFocusState(false)} onFocus={()=>setEmailFocusState(true)}/>
      {/* <Text style={{fontSize:10}}>{emailValue.valid ? "" : "Enter valid Email"}</Text> */}
      <TextInput onChangeText={(e)=>setPasswordValue(e)} value={passwordValue} style={passwordFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Enter Password' secureTextEntry={true} autoComplete='password' onBlur={()=>setPasswordFocusState(false)} onFocus={()=>setPasswordFocusState(true)}/>
    

      <TouchableOpacity style={styles.loginBtn} onPress={login} >
          <Text style={styles.loginText}>Login</Text> 
          {loginIndicator ? <Text><ActivityIndicator /></Text> : ''}
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn} onPress={toSignUp=()=>{navigation.navigate('OnBoardingScreen1')}} >
          <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.bottomContainer}>
    {/* <TouchableOpacity> */}
      <Text style={styles.optionText}>
        Other options
      </Text>
    {/* </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginGoogle}  >
          <Image style={{marginLeft:6}} source={google}/>
          <Text style={styles.loginText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginApple}  >
          <Image style={{marginBottom:4,marginRight:6}} source={apple}/>
          <Text style={styles.loginText}>Apple</Text>
      </TouchableOpacity>
      </View>

    </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

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
      gap:6,
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
        color:'#636363'
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
        borderColor: '#A9A9A9',
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
    loginBtn:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        width:263,
        height:47,
        backgroundColor:'#5237b0',
        borderRadius:42,
        marginTop:30,
        gap:10,
    },
    signupBtn:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:263,
      height:47,
      backgroundColor:'#FBFBFB',
      borderRadius:42,
      marginTop:5,
      borderColor:'#5237b0',
      borderWidth:2,
      color:'black'
  },
    loginText:{
        color:'#FEFEFE',
        fontFamily:'SourceSans3-Regular',
    },
    signupText:{
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
    }
  })