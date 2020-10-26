import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../Screens/Home'
import Notification from '../Screens/Notification'
import Message from '../Screens/Message'
import Search from '../Screens/Search'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchBar from '../components/SearchBar'
import Logo from '../components/Logo'
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator()

const MainNavigator = ({navigation}) => {
    return (
       <Stack.Navigator screenOptions={{headerLeft: () => (
           <TouchableOpacity onPress={() => navigation.toggleDrawer() } style={{marginLeft:6 , padding:10}}>
               <Feather name="menu" color='black' size={30} />
           </TouchableOpacity>
       )}}>
           <Stack.Screen name="Home" component={Home} options={{headerTitle: props => <AntDesign name="twitter" style={{alignSelf:'center' , marginRight:50}} size={24} color="#1290ff" />}} />
           <Stack.Screen name="Search" component={Search} options={{headerTitle: props => <SearchBar/>}} />
           <Stack.Screen name="Notification" component={Notification} />
           <Stack.Screen name="Message" component={Message} />
       </Stack.Navigator>
    )
}

export default MainNavigator