import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MealList from '../Components/MealList'
import {MEALS, Meals} from '../data/dummy-data'


import { HeaderButtons , Item , OverflowMenu , HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {Ionicons} from"@expo/vector-icons";

const FavouriteScreen = ({navigation}) => {
  const Fav = MEALS.filter(meal =>meal.id=='m1'||meal.id=='m2');
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
       <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Favourite'
        iconName="list"
        onPress={()=>{
          navigation.toggleDrawer();
        }}
        />
       </HeaderButtons> 
      )
    })
  }, [navigation]);
  return (
    <MealList navigation={navigation} listData={Fav} />
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})