import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyDrawer from './Navigation/MealsNavegator'

import { Freeze } from "react-freeze";

export default function App({ shouldSuspendRendering }) {
  return (
    // to imporove performance (https://github.com/software-mansion/react-freeze#readme)
     <Freeze freeze={shouldSuspendRendering} style={styles.container}>
      <MyDrawer/>
      </Freeze> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
