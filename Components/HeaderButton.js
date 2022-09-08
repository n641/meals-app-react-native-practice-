import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';



import colors from '../constants/colors'; 



export default function CustomHeaderButton(props) {
  return <HeaderButton
   {...props}
  IconComponent={Ionicons}
  iconSize={23}
  color={'white'}
  />
}

const styles = StyleSheet.create({})