import React from 'react'
import { View , StyleSheet} from 'react-native'
import { Text , Avatar , Subheading} from 'react-native-paper'
import ImageCard from  './ImageCard'
import { Octicons } from '@expo/vector-icons';

const TweetCard = ({imageUrl , baseImage , name , handle ,  comments , retweet , likes , verified}) => {
    return (
        <View style={style.container} >
            <View style={{flex:1 ,marginLeft:10, paddingVertical:10}}>
               <Avatar.Image size={60} source={{uri:imageUrl}} />
            </View>
            <View style={{flex:4  , minHeight:250}}>
                 <View style={style.textContainer}>
                    <View>
                       <Text style={style.name}>{name}
                       {verified === true ? (<Octicons name="verified" size={16} color="#1290ff" />) : ''} 
                       </Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16, paddingHorizontal:4}}>{handle}</Text>
                    </View>
                 </View>
                 <ImageCard baseImage={baseImage} comments={comments} retweet={retweet} likes={likes} />
            </View>
          
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flexDirection:'row', 
         borderBottomWidth:0.3 
        , borderBottomColor:'grey', 
        minHeight:350
        
    },
    name : {
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:4
    },
    textContainer:  {
       flexDirection:'row'
    }
})

export default TweetCard
