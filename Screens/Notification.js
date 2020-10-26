import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import CommonScreen from './CommonScreen'
import MyTabs from '../Navigators/TabNavigator'
const Notification = ({navigation}) => {
    return (
        <View style={{flex:1 , justifyContent:'space-between'}}>
            <MyTabs />
            <CommonScreen />
        </View>
    )
}

export default Notification
