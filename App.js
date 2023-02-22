import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';
import FeedScreen from './app/screens/FeedScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ChestScreen from './app/screens/ExerciseScreens/ChestScreen'
import BackScreen from './app/screens/ExerciseScreens/BackScreen'
import ShouldersScreen from './app/screens/ExerciseScreens/ShouldersScreen'
import AbsScreen from './app/screens/ExerciseScreens/AbsScreen'
import BicepsScreen from './app/screens/ExerciseScreens/BicepsScreen'
import TricepsScreen from './app/screens/ExerciseScreens/TricepsScreen'
import ForearmsScreen from './app/screens/ExerciseScreens/ForearmsScreen'
import GlutesScreen from './app/screens/ExerciseScreens/GlutesScreen'
import HamstringsScreen from './app/screens/ExerciseScreens/HamstringsScreen'
import QuadricepsScreen from './app/screens/ExerciseScreens/QuadricepsScreen'
import CalvesScreen from './app/screens/ExerciseScreens/CalvesScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
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




        {/* Import main muscle group screens */}
        <Stack.Screen 
          name="Chest" 
          component={ChestScreen} 
          options={{
            title: 'Chest',
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
          name="Back" 
          component={BackScreen} 
          options={{
            title: 'Back',
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
          name="Shoulders" 
          component={ShouldersScreen} 
          options={{
            title: 'Shoulders',
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
          name="Abs" 
          component={AbsScreen} 
          options={{
            title: 'Abs',
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
          name="Biceps" 
          component={BicepsScreen} 
          options={{
            title: 'Biceps',
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
          name="Triceps" 
          component={TricepsScreen}
          options={{
            title: 'Triceps',
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
          name="Forearms" 
          component={ForearmsScreen} 
          options={{
            title: 'Forearms',
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
          name="Glutes" 
          component={GlutesScreen} 
          options={{
            title: 'Glutes',
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
          name="Hamstrings" 
          component={HamstringsScreen} 
          options={{
            title: 'Hamstrings',
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
          name="Quadriceps" 
          component={QuadricepsScreen} 
          options={{
            title: 'Quadriceps',
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
          name="Calves" 
          component={CalvesScreen} 
          options={{
            title: 'Calves',
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
    }</NavigationContainer>
  );
}

