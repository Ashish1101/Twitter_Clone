import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer , DarkTheme} from '@react-navigation/native'
import DrawerNavigator from './Navigators/DrawerNavigation'
import { Provider as PaperProvider , DefaultTheme } from 'react-native-paper'



export default function App() {
  return (
    
     <PaperProvider>
       <StatusBar backgroundColor="#0089de" networkActivityIndicatorVisible />
        <NavigationContainer >
           <DrawerNavigator />
        </NavigationContainer>
     </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
