import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../Screens/CategoriesScreen';


const Stack = createNativeStackNavigator();

const MealsNavegator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealsNavegator

const styles = StyleSheet.create({})