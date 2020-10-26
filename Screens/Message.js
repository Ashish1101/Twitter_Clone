import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'

import CommanScreen from './CommonScreen'
const Message = ({navigation}) => {
    return (
        <View style={{flex:1 , justifyContent:'space-between'}}>
            <View style={{flex:1 , backgroundColor:'grey'}}>
                <Text>Inside Message</Text>
            </View>
            <CommanScreen />
        </View>
    )
}

export default Message
