import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

import {categories , MEALS} from '../data/dummy-data';
import MealItem from '../Components/MealItem';
import MealDesginItem from '../Components/MealDesginItem';

import MealList from '../Components/MealList';

const CategoryMealsScreen = (props ) => {

  const {title, id} = props.route.params;
  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id)>=0);

  return (
   <MealList
   listData={displayMeals}
  navigation={props.navigation}
   />
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})