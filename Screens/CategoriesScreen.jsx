import { StyleSheet, Text, View, FlatList , TouchableOpacity , Dimensions } from 'react-native'
import React,{useState , useEffect} from 'react'

import { categories } from '../data/dummy-data';
import CategoryGridTitle from '../Components/CategoryGridTitle'


import { HeaderButtons , Item , OverflowMenu , HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {Ionicons} from"@expo/vector-icons";

const CategoriesScreen = ({navigation}) => {

 
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

  const renderGredItem = (itemData) => {
    return (
      <CategoryGridTitle itemData={itemData} navigation={navigation}/>
    )
  }

  return (
    <View style={{bottom:50}}>
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={categories}
      renderItem={renderGredItem}

    />
    </View>
  )

}


export default CategoriesScreen

const styles = StyleSheet.create({
 
})