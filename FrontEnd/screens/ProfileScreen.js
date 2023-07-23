import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useState, useEffect} from 'react';
import WrappedLoader from '../components/WrappedLoader';
import { deleteValue } from '../services/SecureStore';

const ProfileScreen = ({navigation}) => {
  
return (
   <>
      <View style={styles.headContainer}>
      {/* <TouchableOpacity style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity> */}
      <Text style={styles.headTitle}>
        Account
      </Text>
      </View>

      <ScrollView contentContainerStyle={styles.bottomContainer}>

      <View style={styles.settingsContainer}>
         <Text style={styles.subTitle}>
          Settings
         </Text>

         <TouchableOpacity onPress={()=>navigation.navigate("AccountInfo")} style={styles.btnContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="person-circle-outline" size={24} color="black" />
         <Text>Account Information</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-notifications-sharp" size={24} color="black" />
         <Text>Notifications</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-globe-outline" size={24} color="black" />
         <Text>Languages and Region</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnLastContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-body-outline" size={24} color="black" />
         <Text>Accessibility</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>


      </View>




      <View style={styles.settingsContainer}>
         <Text style={styles.subTitle}>
          Information
         </Text>

         <TouchableOpacity style={styles.btnContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-briefcase" size={24} color="black" />
         <Text>Privacy</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnLastContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-documents" size={24} color="black" />
         <Text>Terms and Conditions</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

      </View>


      <View style={styles.settingsContainer}>
         <Text style={styles.subTitle}>
          Support
         </Text>

         <TouchableOpacity style={styles.btnContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-chatbox-ellipses" size={24} color="black" />
         <Text>FAQ</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.btnLastContainer}>
         <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
         <Ionicons name="ios-people-sharp" size={24} color="black" />
         <Text>Contact Us</Text>
         </View>
         <Ionicons name="ios-chevron-forward-outline" size={24} color="black" />
         </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.signOutBtn} onPress={toSignUp=()=>{
        deleteValue("auth");
        navigation.navigate('Login')}
        } >
          <Text style={styles.signupText}>Sign Out</Text>
      </TouchableOpacity>

      </ScrollView>

      </>
)

}

export default WrappedLoader(ProfileScreen);

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
      headContainer:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        gap:15,
        paddingBottom:20,
        paddingLeft:30,
        paddingTop:70,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    headTitle:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold',
    },
    bottomContainer:{
        display:"flex",
        gap:20,
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:25,
    },
    settingsContainer:{
        width:"100%",
        backgroundColor:"#FFFFFF",
        borderRadius:5,
        borderWidth:1,
        // borderColor:"rgb(210, 210, 210)",
        borderColor:"#ABABAB",
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:10,
        gap:20,

    },
    subTitle:{
      fontSize:20,
      fontFamily:'SourceSans3-SemiBold'
    },
    btnContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between',
      borderBottomWidth:0.5,
      borderBottomColor:"rgb(180, 180, 180)",
      height:35
    },
    btnLastContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between',
      // borderBottomWidth:0.5,
      // borderBottomColor:"rgb(180, 180, 180)",
      height:35
    },
    signOutBtn:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:263,
      height:47,
      backgroundColor:'#FBFBFB',
      borderRadius:42,
      marginTop:5,
      borderColor:'#031D44',
      borderWidth:2,
      color:'black'
  },

})