import React ,{useState} from 'react'
import {View , Text , TouchableOpacity, FlatList , Animated} from 'react-native'
import CommonScreen from './CommonScreen'
import Slider from '../components/Slider'
import { Card, Title, Paragraph , Divider } from 'react-native-paper'
const Search = ({navigation}) => {
   
    const opacity = useState(new Animated.Value(0))[0]

    const fadeIn = () => {
        Animated.timing(opacity , {
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }).start()
    }

    return (
        <View style={{flex:1 , justifyContent:'space-between'}}>
             <View style={{flex:1}}>
              <Slider />
             </View>
             <View style={{flex:11}}>
                 <View>
                 <Text style={[{paddingLeft:8, fontSize:16}]}  >India trends</Text>
                 </View>
                   <FlatList
                   data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}
                   keyExtractor={() => Math.random(30).toString()}
                   renderItem={({item}) => 
                <Card>
                   <Card.Content>
                     <Paragraph>{item} .Trending</Paragraph>
                   <Title>#Card title</Title>
                   <Paragraph>Card content</Paragraph>
                   </Card.Content>
                </Card>
                } 
                 />
             </View>
            <CommonScreen />
        </View>
    )
}

export default Search
