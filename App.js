import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/Screens/Home';
import colors from './src/constants/colors';
import { Order } from './src/Screens/Order';
import { Profile } from './src/Screens/Profile';
import { Setting } from './src/Screens/Setting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Worker } from './src/Screens/Worker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Setting /> */}
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused , color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Worker') {
              iconName = focused ? 'account-star' : 'account-star-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }

            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle:{borderRadius:20,paddingBottom:8,height:60}
        })}
        >
          <Tab.Screen
            name='Home'
            component={HomeScreen}
          />
          <Tab.Screen
            name='Order'
            component={Order}
          />
          <Tab.Screen
            name='Worker'
            component={Worker}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // padding:30,
  },
});
