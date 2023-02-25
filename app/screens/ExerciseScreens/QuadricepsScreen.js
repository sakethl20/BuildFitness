import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function QuadricepsScreen({navigation}) {

  const exercises = [
    'Barbell back squat',
    'Barbell front squat',
    'Barbell hack squat',
    'Barbell lunge',
    'Box squat',
    'Bulgarian split squat',
    'Dumbbell front squat',
    'Dumbbell lunge',
    'Dumbbell box step-ups',
    'Goblet squat',
    'Hack squat machine',
    'High bar squat',
    'Jefferson squat',
    'Leg extension machine',
    'Leg extension with a stability ball',
    'Leg extension with resistance bands',
    'Leg press',
    'Leg press machine',
    'Low bar squat',
    'Pistol squat',
    'Reverse lunge',
    'Single-leg press',
    'Single-leg squat',
    'Sissy squat',
    'Smith machine squat',
    'Step-up',
    'Sumo squat',
    'V-squat',
    'Wall sit',
    'Zercher squat',
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

export default QuadricepsScreen;
