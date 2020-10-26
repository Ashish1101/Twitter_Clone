import React from 'react'
import {View , TouchableOpacity , StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper'

const CommonScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{flexDirection:'row' , justifyContent:'space-around' , backgroundColor:'#0369a8' , paddingVertical:8}}>
               <TouchableRipple style={style.btn}  onPress={() => navigation.navigate('Home')}>
               <Feather style={style.icon} name="home" size={24} color="white" />
               </TouchableRipple>
               <TouchableRipple style={style.btn} onPress={() => navigation.navigate('Search')}>
                  <Feather style={style.icon} name="search" size={24} color="white" />
               </TouchableRipple>
               <TouchableRipple style={style.btn} onPress={() => navigation.navigate('Notification')}>
                  <Feather style={style.icon} name="bell" size={24} color="white" />
               </TouchableRipple>
               <TouchableRipple style={style.btn} onPress={() => navigation.navigate('Message')}>
                  <Feather style={style.icon} name="message-square" size={24} color="white" />
               </TouchableRipple>
        </View>
    )
}


const style = StyleSheet.create({
    btn: {
        flex:1,
        paddingVertical:10,
        marginHorizontal:4
    },
    icon : {
        alignSelf:'center'
    }
})

export default CommonScreen
