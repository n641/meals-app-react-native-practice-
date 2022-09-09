import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import React , {useState, useEffect , useCallback}from 'react'

import { HeaderButtons , Item , OverflowMenu , HiddenItem} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {Ionicons} from"@expo/vector-icons";

import Colors from '../constants/colors';

import { useDispatch } from 'react-redux';
import { setFilters } from '../Store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={{fontSize:22}}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};


const FiltersScreen = ({navigation}) => {
  
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };

    console.log(appliedFilters);

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    // navigation.setParams({save: saveFilters });
  }, [saveFilters]);

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
      ),
      headerRight:()=> (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={
              saveFilters
            }
          />
        </HeaderButtons>
      )
    })
  }, [navigation]);


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  )
}

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
})