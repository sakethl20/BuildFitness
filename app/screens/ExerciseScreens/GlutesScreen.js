import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
      
    const [searchQuery, setSearchQuery] = useState('');
      
    const filteredExercises = exercises.filter(exercise =>
      exercise.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const handleSearch = (text) => {
      setSearchQuery(text);
    }
      
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercises"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <ScrollView style={styles.scrollView}>
            {filteredExercises.map((exercise, index) => (
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
      color: 'darkblue',
      fontSize: 17,
    },
    searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: '90%',
    },
  });

export default GlutesScreen;
