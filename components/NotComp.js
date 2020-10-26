import React from 'react'
import {View} from 'react-native'
import {Card , Paragraph , Avatar , Title} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NotComp = ({image , name , message , info}) => {
    return (
       <View>
            <Card style={{borderBottomWidth:0.2}}>
               <Card.Content style={{flexDirection:'row'}}>
               <View style={{flex:3}}>
               <MaterialCommunityIcons style={{marginLeft:35}} name="star-four-points" size={40} color="#961ad9" />
               </View>
                <View style={{flex:9}}>
                   <Avatar.Image size={60} source={{uri:image}} />
                 <Paragraph style={{fontSize:15, fontWeight:'400'}}>{info}<Title style={{fontSize:18}}>{name}</Title></Paragraph>
                 <Paragraph>{message}</Paragraph>
                </View>
               </Card.Content>
            </Card>
       </View>
    )
}

export default NotComp
