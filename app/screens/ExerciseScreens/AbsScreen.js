import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function AbsScreen({navigation}) {
    
    const exercises = [
        'Ab wheel rollout',
        'Bicycle crunches',
        "Captain's chair leg raise",
        'Cable woodchop',
        'Cable crunch',
        'Decline sit-up',
        'Hanging leg raise',
        'Jackknife sit-up',
        'L-sit',
        'Medicine ball Russian twist',
        'Pallof press',
        'Plank',
        'Reverse crunch',
        'Scissor kick',
        'Side plank',
        'Stability ball crunch',
        'Swiss ball plank',
        'Toe touch crunch',
        'Russian twist with a dumbbell',
        'Standing cable crunch',
        'V-up',
        'Windshield wiper',
        'Weighted sit-up',
        'Standing oblique crunch',
        'Flutter kicks',
        'Hollow body hold',
        'Side plank with rotation',
        'Dragon flag',
        'Dead bug',
        'Hollow rock',
    ];
    
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {exercises.map((exercise, index) => (
              <View style={styles.buttonContainer} key={index}>
                <Text style={styles.buttonText}>{exercise}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scrollView: {
      width: '100%',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    buttonText: {
      color: 'blue',
      fontSize: 17,
    },
  });

export default AbsScreen;