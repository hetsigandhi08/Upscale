import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const AccountInfoScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.headContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="#311E70" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>
        Account Information
      </Text>
      </View>

      <View style={styles.bottomContainer}>
          <View style={styles.profileContainer}>
              <Image style={styles.img} />
              <Text style={styles.headTitle}>Harish K</Text>
              <Text style={styles.roleTitle}>Front-end Engineer</Text>
              <Text style={styles.locationTitle}>Toronto,Canada</Text>
          </View>

          <View style={styles.bioContainer}>
              <Text style={styles.headTitle} >Bio</Text>
              <Text style={styles.roleTitle}>Lorem ipsum dolor sit amet consectetur. In aliquet mattis faucibus dictum tortor facilisis. Tempus vestibulum sed eu habitant odio.</Text>
          </View>

          <TouchableOpacity style={styles.signupBtn} >
          <Text style={styles.signupText}>Edit Account</Text>
      </TouchableOpacity>
      </View>
    </>
  )
}

export default AccountInfoScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#FAFCFB',
        gap:10,
        // flex:1,
    },
    headContainer:{
        backgroundColor:"#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:15,
        paddingBottom:20,
        paddingLeft:10,
        paddingTop:70,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    headTitle:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold',
        color:"#311E70"
    },
    bottomContainer:{
        display:"flex",
        flex:1,
        alignItems:"center",
        padding:20,
        gap:20,
    },
    profileContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:20,
        width:"100%",
        height:230,
        backgroundColor:"#FFFFFF",
        borderColor:"#ABABAB",
        borderWidth:1,
        borderRadius:10
    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:"#DAD8D2"
    },
    headTitle:{
        fontSize:26,
        fontFamily:'SourceSans3-SemiBold',
      },
    roleTitle:{
        fontSize:16,
        fontFamily:'SourceSans3-Regular',
      }, 
    locationTitle:{
        fontSize:12,
        fontFamily:'SourceSans3-Regular',
        color:"#5C38D1"
    },
    bioContainer:{
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        padding:20,
        width:"100%",
        height:170,
        gap:20,
        backgroundColor:"#FFFFFF",
        borderColor:"#ABABAB",
        borderWidth:1,
        borderRadius:10
    },
    signupBtn:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:263,
        height:57,
        backgroundColor:'#FBFBFB',
        borderRadius:42,
        marginTop:5,
        borderColor:'#7045FF',
        borderWidth:1,
        color:'black'
    },
    signupText:{
        color:'#7045FF',
        fontFamily:'SourceSans3-Regular',
      },
})