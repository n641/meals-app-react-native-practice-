import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Animated from 'react-native-reanimated';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDeatailsScreen from '../Screens/MealDeatailsScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';
import FiltersScreen from '../Screens/FiltersScreen';

import colors from '../constants/colors';
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStyleForStackNav = {

  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  animation: 'slide_from_bottom',
}


const MealsNavegator = () => {
  return (
    // <NavigationContainer>
    <OverflowMenuProvider>
      <Stack.Navigator
        screenOptions={defaultStyleForStackNav}
      >
        <Stack.Screen name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ title: 'Meal Category', }}
        />

        <Stack.Screen name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={
            ({ route }) => ({ title: route.params.title, })
          }
        />

        <Stack.Screen name="MealDeatailsScreen"
          component={MealDeatailsScreen}
          options={
            ({ route }) => ({
              title: route.params.title,
            })
          }
        />

      </Stack.Navigator>
    </OverflowMenuProvider>
    // </NavigationContainer>
  )
}


const FavStackNavigator = () => {
  return (
    // <NavigationContainer>
    <OverflowMenuProvider>
      <Stack.Navigator
        screenOptions={defaultStyleForStackNav}
      >
        <Stack.Screen name="FavouriteScreen"
          component={FavouriteScreen}
          options={{
            title: 'Favourite Meals',
          }}
        />

        <Stack.Screen name="MealDeatailsScreen"
          component={MealDeatailsScreen}
          options={
            ({ route }) => ({ title: route.params.title, })
          }
        />


      </Stack.Navigator>
    </OverflowMenuProvider>
    // </NavigationContainer>
  )
};


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { borderRadius: 100, backgroundColor: colors.primaryColor, margin: 10, justifyContent: 'center', position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={2} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tab.Screen name="Home" component={MealsNavegator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Fav" component={FavStackNavigator}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }} />
    </Tab.Navigator>

  );
}

const FilterStackNav = () => {
  return (
    <OverflowMenuProvider>
      <Stack.Navigator
        screenOptions={defaultStyleForStackNav}
      >
        <Stack.Screen name="FiltersScreen"
          component={FiltersScreen}
          options={{ title: 'Filters Meals', }}
        />
      </Stack.Navigator>
    </OverflowMenuProvider>
  )
};


function CustomDrawerContent(props) {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...props} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}




function MyDrawer() {
  return (
    <NavigationContainer>

      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="main" component={MyTabs} />
        <Drawer.Screen name="Filter" component={FilterStackNav} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}



export default MyDrawer

const styles = StyleSheet.create({})