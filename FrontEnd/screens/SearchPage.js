import { StyleSheet, Text, View,ActivityIndicator,ScrollView, TouchableOpacity, TouchableWithoutFeedback ,Keyboard} from 'react-native'
import React,{useState,useEffect} from 'react'
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import SearchScreen from './SearchScreen';
const SearchPage = ({ navigation , route}) => {
    const[loader,setLoader] = useState(true);

    const[showSearchScreen,setShowearchScreen]=useState(false);
    const { itemId, otherParam } = route.params;
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
      console.log(otherParam);
    },2000);
  })
//  gotoSearch=(data)=>{
//   console.log(data);
//   navigation.navigate("SearchScreen");
//  }
  return (
    <View style={loader? styles.activityContainer :styles.container}>
      {loader ? <ActivityIndicator size="small" /> :
   <>
      <View style={styles.headContainer}>
      <Text style={styles.headTitle}>
        Search
      </Text>
      
      </View>
      
      
      <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
  
      <SearchBar style={styles.SearchBar}></SearchBar>
      {otherParam.map((data)=>(<CourseCard courseName={data.name} navigation={navigation} id={data._id}></CourseCard>))}
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