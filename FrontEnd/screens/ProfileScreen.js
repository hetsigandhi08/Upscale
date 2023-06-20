import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'

const ProfileScreen = () => {
  const[loader,setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    },2000);
  })
  
return (
  <View style={styles.container}>
   {loader ? <ActivityIndicator size="small" /> : <Text>Profile screen</Text>}
  </View>
)
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    backgroundColor:'#FAFCFB',
        alignItems:'center',
        justifyContent:"center"
      }
})