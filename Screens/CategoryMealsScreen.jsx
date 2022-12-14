import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

import {categories} from '../data/dummy-data';
import MealItem from '../Components/MealItem';
import MealDesginItem from '../Components/MealDesginItem';

import { useSelector } from 'react-redux';
import MealList from '../Components/MealList';

const CategoryMealsScreen = (props ) => {

  const {title, id} = props.route.params;
  const avalibleMeals = useSelector(state => state.meals.filteredMeals)
  const displayMeals = avalibleMeals.filter(meal => meal.categoryIds.indexOf(id)>=0);

  return (
   <MealList
   listData={displayMeals}
  navigation={props.navigation}
   />
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})