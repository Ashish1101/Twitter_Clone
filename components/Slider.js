import React from 'react'
import { Text , ScrollView, StyleSheet , View} from 'react-native'

const Slider = () => {
    return (
        <ScrollView horizontal style={style.container} showsHorizontalScrollIndicator={false} >
           <View style={style.text}><Text style={style.textColor}>For You</Text></View>
           <View style={style.text}><Text style={style.textColor}  >COVID-19</Text></View>
           <View style={style.text}><Text style={style.textColor} >Trending</Text></View>
           <View style={style.text}><Text style={style.textColor} >News</Text></View>
           <View style={style.text}><Text style={style.textColor} >Sports</Text></View>
           <View style={style.text}><Text style={style.textColor} >Entertainment</Text></View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        height:50,
  
    },
    text: {
        paddingHorizontal:10,
      
        paddingVertical:10,
        marginHorizontal:4
    },
    textColor: {
        fontSize:16
    }
})

export default Slider
