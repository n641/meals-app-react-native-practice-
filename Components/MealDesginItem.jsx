import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function MealDesginItem(props) {
  return (
    <View style={{flex:1 }}>
      <View style={styles.card}>
        <View style={{justifyContent:'space-between'}}>
       <Image 
       source={{ uri: props.image }}
       style={{width:'100%' , height:'85%',resizeMode:'contain'}}
       />
       </View>
       <View>
        <Text numberOfLines={2} style={{width:"50%"}}>
            {props.title}
        </Text>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        elevation:0.1,
        shadowColor:'black',
        shadowRadius:10,
        shadowOpacity:0.2,
        shadowOffset:{width:1,height:1},
        width:200,
        height:250,
        borderRadius:10,
        backgroundColor:"white",
        //  overflow:'hidden',
        margin:30
    }
})