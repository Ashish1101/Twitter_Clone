import React from 'react'
import { View , Image , StyleSheet} from 'react-native'
import {Text } from 'react-native-paper'
import { EvilIcons } from '@expo/vector-icons';
const ImageCard = ({baseImage , comments , retweet , likes}) => {
    return (
        <View style={{flex:1}} >
            <View>
               <Text style={{fontSize:16 , paddingVertical:4}}>lorem ipsum some text is here what are you doing
               lorem ipsum some text is here what are you doing
               </Text>
            </View>
            <View style={{height:200, marginHorizontal:4}} >
            <Image
                style={style.tinyLogo}
                source={{
                uri: baseImage,
                }}
            />
            </View>
            <View style={style.icons}>
            <EvilIcons name="comment" size={32} color="black" />{(<Text>{comments}</Text>)}
              <EvilIcons name="retweet" size={32} color="black" />{(<Text>{retweet}</Text>)} 
              <EvilIcons name="heart" size={32} color="black" />{(<Text>{likes}</Text>)}
              <EvilIcons name="share-google" size={32} color="black" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    icons: {
        flexDirection:'row', 
        justifyContent:'space-evenly',
        paddingBottom:4,
        marginRight:25
        
    },
    tinyLogo: {
        borderRadius:15,
        height: 180,
        resizeMode:'cover',
    }
})

export default ImageCard
