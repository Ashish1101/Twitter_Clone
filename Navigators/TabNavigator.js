import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreen from '../Screens/AllScreen'
import Mention from '../Screens/Mention'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Mention" component={Mention} />
    </Tab.Navigator>
  );
}


export default MyTabs
