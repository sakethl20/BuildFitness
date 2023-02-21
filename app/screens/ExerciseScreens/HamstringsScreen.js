import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function HamstringsScreen({navigation}) {
    
    const exercises = [
        'Barbell stiff-legged deadlift',
        'Barbell Romanian deadlift',
        'Barbell good morning',
        'Cable leg curl',
        'Cable pull-through',
        'Deadlift machine',
        'Dumbbell stiff-legged deadlift',
        'Dumbbell Romanian deadlift',
        'Dumbbell good morning',
        'Glute-ham raise',
        'Kettlebell swing',
        'Lying leg curl',
        'Nordic hamstring curl',
        'One-legged Romanian deadlift',
        'Seated leg curl',
        'Single-leg deadlift',
        'Slider leg curl',
        'Smith machine Romanian deadlift',
        'Stability ball hamstring curl',
        'Sumo deadlift',
        'Swiss ball leg curl',
        'Trap bar deadlift',
        'Wide stance squat',
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

export default HamstringsScreen;