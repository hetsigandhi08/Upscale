import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import apple from '../assets/apple.png'
import google from '../assets/google.png'
import * as Progress from 'react-native-progress';


const LoginScreen = () => {

    const [emailFocusState,setEmailFocusState] = useState(false);
    const [passwordFocusState,setPasswordFocusState] = useState(false);
    const [confirmPasswordFocusState,setConfirmPasswordFocusState] = useState(false)
 
  
  return (
    <View style={styles.container}>
      
    <View style={styles.topContainer}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Help us to seek more new features</Text>
    </View>

    <View style={styles.inputContainer}>
      <TextInput style={emailFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Email Address' autoComplete='email' onBlur={()=>setEmailFocusState(false)} onFocus={()=>setEmailFocusState(true)}/>
      <TextInput style={passwordFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Create Password' secureTextEntry={true} autoComplete='password' onBlur={()=>setPasswordFocusState(false)} onFocus={()=>setPasswordFocusState(true)}/>
      <TextInput style={confirmPasswordFocusState ? styles.mailInputFocused : styles.mailInput} placeholder='Confirm Password' secureTextEntry={true} autoComplete='password' onBlur={()=>setConfirmPasswordFocusState(false)} onFocus={()=>setConfirmPasswordFocusState(true)}/>


      <TouchableOpacity style={styles.loginBtn}  >
          <Text style={styles.loginText}>Sign Up</Text>
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
          <Text style={styles.loginText}>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginApple}  >
          <Image style={{marginBottom:4,marginRight:6}} source={apple}/>
          <Text style={styles.loginText}>Apple</Text>
      </TouchableOpacity>
      </View>

    </View>
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