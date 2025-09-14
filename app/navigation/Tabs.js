// File: app/navigation/Tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, MapTrifold, Book, Wind } from 'phosphor-react-native';

import DashboardScreen from '../screens/DashboardScreen';
import MapScreen from '../screens/MapScreen';
import LogbookScreen from '../screens/LogbookScreen';
import WaterWiseScreen from '../screens/WaterWiseScreen';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hides the title header for a cleaner look
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
        tabBarIcon: ({ color, size }) => (<House color={color} size={size} weight="fill" />)
      }}/>
      <Tab.Screen name="Map" component={MapScreen} options={{
        tabBarIcon: ({ color, size }) => (<MapTrifold color={color} size={size} weight="fill" />)
      }}/>
      <Tab.Screen name="Logbook" component={LogbookScreen} options={{
        tabBarIcon: ({ color, size }) => (<Book color={color} size={size} weight="fill" />)
      }}/>
      <Tab.Screen name="WaterWise" component={WaterWiseScreen} options={{
        tabBarIcon: ({ color, size }) => (<Wind color={color} size={size} weight="fill" />)
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;