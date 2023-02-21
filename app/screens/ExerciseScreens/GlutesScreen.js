import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function GlutesScreen({navigation}) {
    
    const exercises = [
        'Barbell glute bridge',
        'Barbell hip thrust',
        'Bodyweight hip thrust',
        'Bulgarian split squat',
        'Cable kickback',
        'Cable pull-through',
        'Clamshell',
        'Curtsy lunge',
        'Deadlift',
        'Dumbbell lunge',
        'Fire hydrant',
        'Frog pump',
        'Glute machine',
        'Glute march',
        'Glute squeeze',
        'Good morning',
        'Hip abductor machine',
        'Hip extension machine',
        'Hip thrust machine',
        'Kickback machine',
        'Kneeling leg lift',
        'Leg curl machine',
        'Leg press',
        'Lunge',
        'Nordic hamstring curl',
        'Reverse hyperextension',
        'Seated leg curl',
        'Single-leg deadlift',
        'Single-leg glute bridge',
        'Single-leg squat',
        'Smith machine squat',
        'Split squat',
        'Step-up',
        'Stiff-legged deadlift',
        'Sumo deadlift',
        'Supermans',
        'Swiss ball hip thrust',
        'Wall sit',
        'Wide stance squat'
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

export default GlutesScreen;