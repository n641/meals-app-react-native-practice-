import {
    StyleSheet,
     Text, 
     View, 
     TouchableOpacity, 
     Platform,
    TouchableNativeFeedback
} from 'react-native'
import React from 'react'

export default function CategoryGridTitle(props) {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }

    return (
        
    <View style={styles.gridItem}> 
           <TouchableOpacity
           style={{ flex: 1 }}
            onPress={() => {
                props.navigation.navigate('CategoryMealsScreen', { title: props.itemData.item.title, id: props.itemData.item.id, color: props.itemData.item.color });
            }}>
                  <View
          style={{ ...styles.container, ...{ backgroundColor: props.itemData.item.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
          {props.itemData.item.title}
          </Text>
        </View>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
   gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation:0.2,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 22,
    textAlign: 'right'
  }
})