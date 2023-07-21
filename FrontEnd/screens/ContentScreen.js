import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ContentVideoCard from '../components/ContentVideoCard';
import { useSelector } from 'react-redux';

const ContentScreen = () => {
  const value = useSelector((state) => state.course.data);

  return (
    <>
      {/* <FlatList 
        contentContainerStyle={{display:'flex',gap:10}} 
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled 
        needsOffscreenAlphaCompositing
        data={value.chapters}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item,index}) => <ContentVideoCard indexSub={index} title={item.name} data={item.videos} /> }
      /> */}
      {
        value.chapters.map((item,index)=> (<ContentVideoCard indexSub={index} title={item.name} data={item.videos} key={index} />))
      }
    </>
  )
}

export default ContentScreen

const styles = StyleSheet.create({
    container:{
        display:"flex",
        paddingVertical:15,
        paddingHorizontal:10,
        gap:10,
    },
})