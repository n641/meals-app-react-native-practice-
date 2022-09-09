import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

import MealItem from './MealItem'
import { useSelector } from 'react-redux'

export default function MealList(props) {
  const FavoriteMeal = useSelector(state => state.meals.favouriteMeals);

  const renderMealsItem =(itemData)=>{
    const isFavorite = FavoriteMeal.some(meal => meal.id ==itemData.item.id);
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
          title:itemData.item.title,
          isfav: isFavorite
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