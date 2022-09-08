import { ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react';

import { HeaderButtons , Item , OverflowMenu , HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {Ionicons} from"@expo/vector-icons";

import { MEALS } from '../data/dummy-data'

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDeatailsScreen = (props ) => {
  const {mealId, title} = props.route.params;

  const selectedMeal = MEALS.find(meal =>meal.id==mealId)

 
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
       <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
        title='Favourite'
        iconName="ios-star-outline"
        onPress={()=>{
          alert("starrrrrrrrrrrrrrrr")
        }}
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