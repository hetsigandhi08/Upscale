import { StyleSheet, Text, View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard, ActivityIndicator} from 'react-native'
import React,{useState, useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {

  const[loader,setLoader] = useState(true)

    useEffect(()=>{
      setTimeout(() => {
        setLoader(false)
      },2000);
    })
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton}>
    <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <View style={styles.bottomContainer}>
    <Text style={styles.title}>Search</Text>
    
    <SearchBar></SearchBar>
   
    <View style={styles.topSearch}>
    <Text style={styles.topSearchText}>Top Searches</Text>
    <TouchableOpacity>
      <Text style={styles.ClearButton}>Clear
     </Text>
     </TouchableOpacity>
    </View>
    <View style={styles.recentSearches}>
      <View style={styles.border}>
      <TouchableOpacity style={styles.recentSearchList}>
    <TouchableOpacity style={styles.recentSearchesItem}>
      <Text style={styles.recentSearchesText}>Machine Learning</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="md-chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
    </TouchableOpacity>
    </View>
    <View style={styles.border}>
      <TouchableOpacity style={styles.recentSearchList}>
    <TouchableOpacity style={styles.recentSearchesItem}>
      <Text style={styles.recentSearchesText}>Developer Operations</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="md-chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
    </TouchableOpacity>
    </View>
    <View style={styles.border}>
      <TouchableOpacity style={styles.recentSearchList}>
    <TouchableOpacity style={styles.recentSearchesItem}>
      <Text style={styles.recentSearchesText}>React and Redux</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="md-chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
    </TouchableOpacity>
    </View>
    <View style={styles.border}>
      <TouchableOpacity style={styles.recentSearchList}>
    <TouchableOpacity style={styles.recentSearchesItem}>
      <Text style={styles.recentSearchesText}>Artificial Intelligence</Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="md-chevron-forward-outline" size={24} color="black" />
    </TouchableOpacity>
    </TouchableOpacity>
    </View>
    
    </View>
    <View style={styles.categories}>
    <Text style={styles.title}>Categories</Text>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.categoriesButton}>
      <Text style={styles.categoriesButtonText}>Data Structures</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoriesButton}>
      <Text style={styles.categoriesButtonText}>Artificial Intelligence</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoriesButton}>
      <Text style={styles.categoriesButtonText}>Full Stack Development</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoriesButton}>
      <Text style={styles.categoriesButtonText}>Cloud Computing</Text>
    </TouchableOpacity>
    </View>
    
    </View>
    </View>
    </View>
     </TouchableWithoutFeedback>
    
  )
}
export default SearchScreen
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
backgroundColor:'#FAFCFB',
    padding:20,
    // borderColor:"#0000000",
    // borderWidth:1
  },
  bottomContainer:{
    display:'flex',
    gap:20,
backgroundColor:'#FAFCFB',
    padding:20,
  },
  backButton:{
    marginTop:30,
    alignSelf:'flex-start',
    padding:10
  },
  title:{
    fontSize:20,
    fontFamily:'SourceSans3-SemiBold',
    marginBottom:10
},
topSearch:{
  display:'flex',
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between',
  marginTop:30
},
topSearchText:{
  fontSize:20,
  fontFamily:'SourceSans3-SemiBold'
},
ClearButton:{
  marginTop:5,
  fontFamily:'SourceSans3-Regular',
  fontSize:16,
  color:'#585858'
}
,
categories:{
  display:'flex',
  gap:10,
  
},
categoriesButton:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  width:150,
  height:50,
  backgroundColor:'#031D44',
  borderRadius:15,
  
  
},
categoriesButtonText:{
  color:'#FAFCFB',
  fontFamily:'SourceSans3-Regular',
},
buttonContainer:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  width:'100%',
  flexWrap:'wrap',
  rowGap:10
}
,
recentSearches:{

},
recentSearchList:{
display:'flex',
flexDirection:'row',
width:'100%',
justifyContent:'space-between',
padding:8,


},
recentSearchesItem:{

},
recentSearchesText:{
color:'#313131',
fontSize:15,
}
,
border:{
  borderBottomWidth:1,
  width:"100%",
  borderBottomColor:"#313131"
}
})