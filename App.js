import { StyleSheet, Text, View } from 'react-native';

import MyDrawer from './Navigation/MealsNavegator'

import { Freeze } from "react-freeze";

import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealReducer from './Store/reducers/meals';

const rootReducers = combineReducers({
  meals:mealReducer,
})

const Store = createStore(rootReducers) 

export default function App({ shouldSuspendRendering }) {
  return (
    // to imporove performance (https://github.com/software-mansion/react-freeze#readme)
    <Provider store={Store}>
     <Freeze freeze={shouldSuspendRendering} style={styles.container}>
      <MyDrawer/>
      </Freeze>
      </Provider> 
  );
}

const styles = StyleSheet.create({});
