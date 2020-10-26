import React from 'react'
import {createDrawerNavigator , DrawerItem , DrawerContentScrollView} from '@react-navigation/drawer'
import MainNavigator from './MainNavigator'
import {View , StyleSheet} from 'react-native'
import {StatusBar} from 'expo-status-bar'

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';

const DrawerNative = createDrawerNavigator()


function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={
            styles.drawerContent
          }
        >
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={{
                uri:
                  'https://instagram.fdel25-1.fna.fbcdn.net/v/t51.2885-19/s320x320/119190021_1455153064686875_6596187654548491253_n.jpg?_nc_ht=instagram.fdel25-1.fna.fbcdn.net&_nc_ohc=Q9tzVTXZqV4AX-1ux5n&oh=574af635e004204cd6769baa7511bd85&oe=5FAEF81A',
              }}
              size={50}
            />
            <Title style={styles.title}>Ashish</Title>
            <Caption style={styles.caption}>@ashish98</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  166
                </Paragraph>
                <Caption style={styles.caption}>Folowers</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="format-list-numbered" size={24} color="black" />
              )}
              label="Account"
              onPress={() => console.log('Account')}
            />
            <DrawerItem
             
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => console.log('bookmarks')}
            />
             <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="bolt" size={size} style={{marginLeft:5}} color={color} />
              )}
              label="  Profile"
              onPress={() => console.log('profile')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={false} />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>RTL</Text>
                <View pointerEvents="none">
                  <Switch value={false} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    );
  }


const DrawerNavigator = () => {
    return (
        <DrawerNative.Navigator initialRouteName="Main"  drawerStyle={{
            width: 240,
            
          }} drawerContent={(props) => <DrawerContent {...props}/>} >
            <DrawerNative.Screen name="Main" component={MainNavigator} />
        </DrawerNative.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
   
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
    
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
  

export default DrawerNavigator