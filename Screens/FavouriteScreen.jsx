import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MealList from '../Components/MealList'
import {MEALS} from '../data/dummy-data'
import { useSelector , useDispatch } from 'react-redux'

import { HeaderButtons , Item , OverflowMenu , HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {Ionicons} from"@expo/vector-icons";

import { togglrFavorite } from '../Store/actions/meals'

const FavouriteScreen = ({navigation}) => {
  const Fav = useSelector(state=>state.meals.favouriteMeals);
  
  
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