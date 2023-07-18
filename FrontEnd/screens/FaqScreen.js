import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Accordion from '../components/Accordion'

const FaqScreen = () => {

  const menu =[
    { 
      title: 'How to access the Course details', 
      data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
    },
    { 
      title: 'answers to common queries and concerns users may have about a product or service',
      data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
    },
    { 
     title: 'Drinks',
     data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
    },
    { 
      title: 'Deserts',
      data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
    },
  ]

  return ( 
    <View style={{gap:10}}>
      <Text style={styles.courseTitle}>FaqScreen</Text>
      <FlatList
        contentContainerStyle={{display:'flex',gap:10}} 
        nestedScrollEnabled 
        showsHorizontalScrollIndicator={false}
        data={menu}
        renderItem={({item}) =>  <Accordion title={item.title} data={item.data}/>}
      />
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