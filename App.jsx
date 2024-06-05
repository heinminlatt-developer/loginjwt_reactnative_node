import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import UserScreen from './src/screens/UserScreen';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
const StackNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        statusBarColor: 'orange',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <Icon
              name="menu"
              size={30}
              color="#900"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          );
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={StackNav} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="User" component={UserScreen} /> */}
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({});
