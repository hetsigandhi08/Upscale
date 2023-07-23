import { StyleSheet, Text, View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard, ActivityIndicator,Button,Alert} from 'react-native'
import React,{useState, useEffect,useRef} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import axios from 'axios'

import { au,url } from '../constant/Constant';
import WrappedLoader from '../components/WrappedLoader';
const SearchScreen = ({navigation}) => {

  const[loader,setLoader] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setLoader(false)
      },2000);
    })
    const textInputRef = useRef(null);

  
    const handleClick= async(data)=>{
      
      await axios.post(url+"api/search",{keyword:data},{headers:{Authorization:au}})
      .then((res)=>{
       
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
    const checkClick=(data)=>{
      console.log(data);
    }
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss} accessible={false}>
    <>
    <View style={styles.headContainer}>
      <Text style={styles.headTitle}>
        Search
      </Text>
      </View>
    
    
    
    <View style={styles.bottomContainer}>
    
    
    <SearchBar style={styles.SearchBar} getData={handleClick} ></SearchBar>
   
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
    </>
     </TouchableWithoutFeedback>
    
  )
}
export default WrappedLoader(SearchScreen);
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
backgroundColor:'#FAFCFB',
   
    // borderColor:"#0000000",
    // borderWidth:1
  },
  bottomContainer:{
    display:'flex',
    gap:20,
backgroundColor:'#FAFCFB',
    padding:20,
    paddingTop:20
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
SearchBar:{
  paddingTop:0
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
  width:160,
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
},
headContainer:{
  backgroundColor:"#FFFFFF",
  display:"flex",
  gap:15,
  paddingBottom:10,
  paddingLeft:30,
  paddingTop:70,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
},
headTitle:{
  fontSize:26,
  fontFamily:'SourceSans3-SemiBold',
}
})