import { StyleSheet, Text, View,ActivityIndicator,ScrollView, TouchableOpacity, TouchableWithoutFeedback ,Keyboard,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import SearchScreen from './SearchScreen';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';
import { au,url } from '../constant/Constant';
const SearchPage = ({ navigation , route,}) => {
    const[loader,setLoader] = useState(true);

    const[showSearchScreen,setShowearchScreen]=useState(false);
    const { itemId, otherParam,searchedWord } = route.params;
    const[resultsFound,setResultsFound]=useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
    console.log(otherParam.length);
      
    },2000);
  })
//  gotoSearch=(data)=>{
//   console.log(data);
//   navigation.navigate("SearchScreen");
//  }

const handleClick= async(data)=>{
 
  await axios.post(url+"api/search",{keyword:data},{headers:{Authorization:au}})
  .then((res)=>{
    console.log(res.data.length);
    
   navigation.navigate("Searchpage",{
    itemId: 86,
    otherParam: res.data,
    searchedWord:data
  })
    // await Keychain.setGenericPassword(emailValue.value, passwordValue);
  })
  .catch((err)=>{
    console.log(err)
    Alert.alert("Search error");
})
}
  return (
    <View style={loader? styles.activityContainer :styles.container}>
      {loader ? <ActivityIndicator size="small" /> :
   <>
      <View style={styles.headContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Ionicons name="ios-arrow-back" size={24} color="#311E70" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>
        Search results for
        <Text>  '{searchedWord}'</Text>
      </Text>
      </View>
      
      
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
  
      <SearchBar style={styles.SearchBar} getData={handleClick}></SearchBar>
      {otherParam!=0?(otherParam.map((data)=>(<CourseCard courseName={data.name} navigation={navigation} id={data._id} key={data._id} image={data.img}></CourseCard>)))
:<Text>No results Found</Text>}
      {/* {otherParam.map((data)=>(<CourseCard courseName={data.name} navigation={navigation} id={data._id} key={data._id} image={data.img}></CourseCard>))} */}
      </ScrollView>
      </TouchableWithoutFeedback>
      </View>
      </>}
      </View>
  )
}

export default SearchPage

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#FAFCFB',
        flex:1,
        },
        searchContainer: {
          // flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
          
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
        flexDirection:"row",
        alignItems:"center",
        gap:15,
        paddingBottom:10,
        paddingLeft:10,
        paddingTop:70,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        },
        headTitle:{
          fontSize:26,
          fontFamily:'SourceSans3-SemiBold',
        },
        scrollContainer:{
            display:"flex",
            gap:20,
            alignItems:'center',
            paddingHorizontal:20,
            paddingVertical:25,
          },
          SearchBar:{
           
          }
})