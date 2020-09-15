import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Item from '../pages/Item';
import TabList from './TabList';

const { Navigator, Screen } = createStackNavigator();

function StackList() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Tab" component={TabList} />
        <Screen name="Item" component={Item} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackList;
