import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function QuadricepsScreen({navigation}) {
    
    const exercises = [
        'Barbell front squat',
        'Barbell back squat',
        'Barbell hack squat',
        'Barbell lunge',
        'Bulgarian split squat',
        'Dumbbell front squat',
        'Dumbbell lunge',
        'Leg extension machine',
        'Leg press',
        'Pistol squat',
        'Smith machine squat',
        'Step-up',
        'Wall sit',
        'Zercher squat',
        'Reverse lunge',
        'Goblet squat',
        'Sumo squat',
        'Box squat',
        'Single-leg squat',
        'Single-leg press',
        'Sissy squat',
        'Hack squat machine',
        'V-squat',
        'Leg press machine',
        'High bar squat',
        'Low bar squat',
        'Jefferson squat',
        'Leg extension with resistance bands',
        'Leg extension with a stability ball',
        'Dumbbell box step-ups',
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

export default QuadricepsScreen;