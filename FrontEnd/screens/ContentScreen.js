import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ContentVideoCard from '../components/ContentVideoCard';

const ContentScreen = () => {

  const data = [{
    title:"Introduction",
    data:[
      {
        name:"video no.1",
        min:"12"
      },
      {
        name:"video no.2",
        min:"12"
      },
      {
        name:"video no.12",
        min:"12"
      },
      {
        name:"video no.13",
        min:"12"
      },
      {
        name:"video no.14",
        min:"12"
      },
    ]
  },
  {
    title:"Fundamental",
    data:[
      {
        name:"video no.1",
        min:"12"
      },
      {
        name:"video no.2",
        min:"12"
      },
      {
        name:"video no.12",
        min:"12"
      },
      {
        name:"video no.13",
        min:"12"
      },
      {
        name:"video no.14",
        min:"12"
      },
    ]
  }]

  return (
    <>
      <FlatList 
        contentContainerStyle={{display:'flex',gap:10}} 
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled 
        data={data}
        renderItem={({item,key}) => <ContentVideoCard data={item.data} title={item.title} key={key}  /> }
      />
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