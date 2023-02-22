import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from './FeedScreen';
import MessagesScreen from './MessagesScreen';

const Tab = createBottomTabNavigator();
function DetailsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
            name="Feed" 
            component={FeedScreen} 
            options={{
                title: 'Workouts',
                headerStyle: {
                backgroundColor: 'orange',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        />
        <Tab.Screen 
            name="Messages" 
            component={MessagesScreen} 
            options={{
                title: 'Profile',
                headerStyle: {
                backgroundColor: 'orange',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        />
    </Tab.Navigator>
  );
}

export default DetailsScreen;