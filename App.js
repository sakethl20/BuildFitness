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

import BarbellBenchPress from './app/screens/ExerciseScreens/ChestScreens/BarbellBenchPress';
import BarbellDeclineBenchPress from './app/screens/ExerciseScreens/ChestScreens/BarbellDeclineBenchPress';
import BarbellInclineBenchPress from './app/screens/ExerciseScreens/ChestScreens/BarbellInclineBenchPress';
import BarbellPullover from './app/screens/ExerciseScreens/ChestScreens/BarbellPullover';
import CableCrossover from './app/screens/ExerciseScreens/ChestScreens/CableCrossover';
import CableFly from './app/screens/ExerciseScreens/ChestScreens/CableFly.js';
import CloseGripPushUps from './app/screens/ExerciseScreens/ChestScreens/CloseGripPushUps.js';
import DeclineBenchPressMachine from './app/screens/ExerciseScreens/ChestScreens/DeclineBenchPressMachine';
import DeclineCableFly from './app/screens/ExerciseScreens/ChestScreens/DeclineCableFly.js';
import DeclineCablePress from './app/screens/ExerciseScreens/ChestScreens/DeclineCablePress';
import DeclineDumbellFly from './app/screens/ExerciseScreens/ChestScreens/DeclineDumbbellFly.js';
import DeclineDumbellPress from './app/screens/ExerciseScreens/ChestScreens/DeclineDumbbellPress.js';
import DiamondPushUps from './app/screens/ExerciseScreens/ChestScreens/DiamondPushUps.js';
import Dips from './app/screens/ExerciseScreens/ChestScreens/Dips.js';
import DumbellBenchPress from './app/screens/ExerciseScreens/ChestScreens/DumbbellBenchPress.js';
import DumbellDeclineBenchPress from './app/screens/ExerciseScreens/ChestScreens/DumbbellDeclineBenchPress.js';
import DumbellFly from './app/screens/ExerciseScreens/ChestScreens/DumbbellFly.js';
import DumbellInclineBenchPress from './app/screens/ExerciseScreens/ChestScreens/DumbbellInclineBenchPress.js';
import DumbellPullover from './app/screens/ExerciseScreens/ChestScreens/DumbbellPullover.js';
import ExplosivePushUps from './app/screens/ExerciseScreens/ChestScreens/ExplosivePushUps.js';
import InclineBenchPressMachine from './app/screens/ExerciseScreens/ChestScreens/InclineBenchPressMachine.js';
import InclineCableFly from './app/screens/ExerciseScreens/ChestScreens/InclineCableFly.js';
import InclineCablePress from './app/screens/ExerciseScreens/ChestScreens/InclineCablePress.js';
import InclineDumbellFly from './app/screens/ExerciseScreens/ChestScreens/InclineDumbbellFly.js';
import InclineDumbellPress from './app/screens/ExerciseScreens/ChestScreens/InclineDumbbellPress.js';
import MachineFly from './app/screens/ExerciseScreens/ChestScreens/MachineFly.js';
import MedicineBallChestPress from './app/screens/ExerciseScreens/ChestScreens/MedicineBallChestPass.js';
import PlyometricPushUps from './app/screens/ExerciseScreens/ChestScreens/PlyometricPushUps.js';
import PushUps from './app/screens/ExerciseScreens/ChestScreens/PushUps.js';
import SingleArmCableCrossover from './app/screens/ExerciseScreens/ChestScreens/SingleArmCableCrossover.js';
import SingleArmCableFly from './app/screens/ExerciseScreens/ChestScreens/SingleArmCableFly.js';
import SingleArmDumbellBenchPress from './app/screens/ExerciseScreens/ChestScreens/SingleArmDumbbellBenchPress.js';
import SingleArmDumbellFly from './app/screens/ExerciseScreens/ChestScreens/SingleArmDumbbellBenchPress.js';
import SwissBallDumbellPress from './app/screens/ExerciseScreens/ChestScreens/SingleArmDumbbellFly.js';
import WideGripPushUps from './app/screens/ExerciseScreens/ChestScreens/WideGripPushUps.js';

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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
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
              backgroundColor: 'coral',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Barbell bench press" 
          component={BarbellBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Barbell decline bench press" 
          component={BarbellDeclineBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Barbell incline bench press" 
          component={BarbellInclineBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Barbell pullover" 
          component={BarbellPullover} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Cable crossover" 
          component={CableCrossover} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Cable fly" 
          component={CableFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Decline bench press machine" 
          component={DeclineBenchPressMachine} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Decline cable fly" 
          component={DeclineCableFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Decline cable press" 
          component={DeclineCablePress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Decline dumbbell fly" 
          component={DeclineDumbellFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Decline dumbbell press" 
          component={DeclineDumbellPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dips" 
          component={Dips} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dumbbell bench press" 
          component={DumbellBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dumbbell decline bench press" 
          component={DumbellDeclineBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dumbbell fly" 
          component={DumbellFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dumbbell incline bench press" 
          component={DumbellInclineBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Dumbbell pullover" 
          component={DumbellPullover} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Explosive push-ups" 
          component={ExplosivePushUps} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Incline bench press machine" 
          component={InclineBenchPressMachine} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Incline cable fly" 
          component={InclineCableFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Incline cable press" 
          component={InclineCablePress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Incline dumbbell fly" 
          component={InclineDumbellFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Incline dumbbell press" 
          component={InclineDumbellPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Machine fly" 
          component={MachineFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Medicine ball chest press" 
          component={MedicineBallChestPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Plyometric push-ups" 
          component={PlyometricPushUps} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Push-ups" 
          component={InclineCableFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Single-arm cable crossover" 
          component={SingleArmCableCrossover} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Single-arm cable fly" 
          component={SingleArmCableFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Single-arm dumbbell bench press" 
          component={SingleArmDumbellBenchPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Single-arm dumbbell fly" 
          component={SingleArmDumbellFly} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Swiss ball dumbbell press" 
          component={SwissBallDumbellPress} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Wide grip push-ups" 
          component={WideGripPushUps} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Close grip push-ups" 
          component={CloseGripPushUps} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Diamond push-ups" 
          component={DiamondPushUps} 
          options={{
            headerStyle: {
              backgroundColor: 'lightsalmon',
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

