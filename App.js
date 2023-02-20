import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import FeedScreen from './app/screens/FeedScreen';
import MessagesScreen from './app/screens/MessagesScreen';


const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Welcome',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Main',
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Feed" 
          component={FeedScreen}  
        />
        <Stack.Screen 
          name="Messages" 
          component={MessagesScreen} 
        />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: "orange",
    borderRadius: 4,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: 'white'
  },
});

const styler = StyleSheet.create({
  container: {
    flex: 0,
    //backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
