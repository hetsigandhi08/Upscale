import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Accordion from '../components/Accordion'

const FaqScreen = () => {

  const menu =[
    { 
      title: 'How to access the Course details', 
      data: 'When you have successfully enrolled, you will usually receive an email from the course provider. If you have enrolled before the course starts, you will receive another email with a link to the course when it begins.',
    },
    { 
      title: 'What do Upscale courses include?',
      data: 'Each Upscale course is created, owned and managed by the instructor(s). The foundation of each Upscale course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.'
    },
    { 
     title: 'Do I have to start my Upscale course at a certain time? And how long do I have to complete it?',
     data: 'There are no deadlines to begin or complete a course. Learn more about our Lifetime Access policy.'
    },
    { 
      title: 'Where can I go for help?',
      data: 'If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. Our Help Center has extensive information regarding Upscale’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help.'
    },
  ]

  return ( 
    <View style={{gap:10}}>
      <Text style={styles.courseTitle}>FaqScreen</Text>
      {/* <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        nestedScrollEnabled 
        showsHorizontalScrollIndicator={false}
        data={menu}
        renderItem={({item}) =>  <Accordion title={item.title} data={item.data}/>}
      /> */}
      {
        menu.map((item,index)=>(<Accordion title={item.title} data={item.data} key={index}/> ))
      }
    </View>
  )
}

export default FaqScreen

const styles = StyleSheet.create({
  courseTitle:{
    fontSize:20,
    color:"#5237C0",
    fontFamily:'SourceSans3-SemiBold',
},
})