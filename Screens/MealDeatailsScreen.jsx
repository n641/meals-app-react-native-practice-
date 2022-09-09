import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import React, { useLayoutEffect, useCallback, useState, useEffect } from 'react';

import { HeaderButtons, Item, OverflowMenu, HiddenItem } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import { Ionicons } from "@expo/vector-icons";

import { MEALS } from '../data/dummy-data';
import { useSelector, useDispatch } from 'react-redux';
import { togglrFavorite } from '../Store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDeatailsScreen = (props) => {
  const { mealId, title , isFavorite } = props.route.params;

  const avalibleMeals = useSelector(state => state.meals.meals)
const [isfavo, setisfavo] = useState(isFavorite)

  const selectedMeal = avalibleMeals.find(meal => meal.id == mealId);
  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(togglrFavorite(mealId))
  }, [dispatch, mealId])


  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Favourite'
            iconName={isfavo ? "ios-star" : "ios-star-outline"}
            onPress={
              toggleFavHandler
            }
          />
        </HeaderButtons>
      )
    })
  }, [props.navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

export default MealDeatailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {

    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})