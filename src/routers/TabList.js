import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../styleGlobal';

import Informations from '../pages/Information';
import Home from '../pages/Home';
import Test from '../pages/TestsVocation';

const Tab = createBottomTabNavigator();

const TabList = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Information') {
            iconName = focused ? 'information-circle' : 'information-circle';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Test') {
            iconName = focused ? 'bookmarks' : 'bookmarks';
          }

          return <Ionicons name={iconName} size={27} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          backgroundColor: '#167b8d',
        },
        activeTintColor: '#ffbe4a',
        inactiveTintColor: '#000000',
      }}
      style={styles.barTab}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Information" component={Informations} />
    </Tab.Navigator>
  );
};

const obj = {
  tabStyle: styles.barTab,
};

export default TabList;
