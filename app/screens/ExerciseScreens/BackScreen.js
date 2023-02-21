import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function BackScreen({navigation}) {
    
    const exercises = [
        'Barbell bent-over row',
        'Barbell deadlift',
        'Barbell shrug',
        'Bent-over dumbbell row',
        'Chin-up',
        'Close grip lat pull-down',
        'Deadlift machine',
        'Dumbbell deadlift',
        'Dumbbell row',
        'Inverted row',
        'Lat pull-down',
        'One-arm dumbbell row',
        'Pull-up',
        'Rack pull',
        'Seated cable row',
        'T-bar row',
        'Upright row',
        'Weighted chin-up',
        'Barbell pull-over',
        'Dumbbell pull-over',
        'Cable seated row',
        'Cable bent-over row',
        'Cable straight-arm pull-down',
        'Seated reverse fly',
        'Standing reverse fly',
        'Dumbbell shrug',
        'Cable face pull',
        'Single-arm dumbbell row',
        'Assisted pull-up',
        'Bodyweight row',
        'Reverse grip bent-over row',
        'Meadows row',
        'Kroc row',
        'One-arm lat pull-down',
        'Behind the back lat pull-down',
        'Hammer strength row',
        'Bent-over Smith machine row',
        'Band pull-apart',
        'Superman',
        'Scapular retraction'
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
export default BackScreen;