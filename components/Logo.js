import React from 'react'
import {View} from 'react-native'
import {Avatar} from 'react-native-paper'

const Logo = () => {
    return (
        <View>
            <Avatar.Image size={32} source={require('../assets/splash.png')} />
        </View>
    )
}

export default Logo
