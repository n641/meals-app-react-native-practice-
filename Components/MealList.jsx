import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

import MealItem from './MealItem'

export default function MealList(props) {
    
  const renderMealsItem =(itemData)=>{
    return  <MealItem 
    title={itemData.item.title}
    image={itemData.item.imageUrl}
    duration={itemData.item.duration}
    complexity={itemData.item.complexity}
    affordability={itemData.item.affordability}
    onSelectMeal={()=>{
      props.navigation.navigate(
        'MealDeatailsScreen',
        {
          mealId: itemData.item.id,
          title:itemData.item.title
        }
      )
    }}
    />
  }
  return (
    <FlatList
    data={props.listData}
    keyExtractor={(item , index)=>item.id}
    renderItem={renderMealsItem}
    style={{width:"100%"}}
    />
  )
}

const styles = StyleSheet.create({})