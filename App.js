// File: App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './app/navigation/Tabs';

export default function App() {
  // We will add font loading here later
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}