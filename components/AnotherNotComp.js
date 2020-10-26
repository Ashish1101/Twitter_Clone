import React from 'react'
import {View} from 'react-native'
import {Card , Paragraph , Avatar , Title} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const AnotherNotComp = ({image}) => {
    return (
       <View>
            <Card style={{borderBottomWidth:0.2}}>
               <Card.Content style={{flexDirection:'row'}}>
               <View style={{flex:3}}>
               <MaterialCommunityIcons style={{marginLeft:35}} name="star-four-points" size={40} color="#961ad9" />
               </View>
                <View style={{flex:9}}>
                   <Avatar.Image size={60} source={{uri: image}} />
                    <View style={{marginTop:4}}>
                    <Title style={{fontSize:18}}> Shawn.js <Paragraph style={{fontSize:15 }}>Retweeted a tweet </Paragraph></Title>
                   <Paragraph>With JavaScript you can build</Paragraph>
                    </View>
                </View>
               </Card.Content>
            </Card>
       </View>
    )
}

export default AnotherNotComp