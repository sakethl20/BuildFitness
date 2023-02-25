import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function TricepsScreen({navigation}) {
  const exercises = [
    'Close-grip bench press',
    'Decline EZ bar triceps extension',
    'Diamond push-ups',
    'Dips',
    'Cable overhead triceps extension',
    'Cross-body triceps extension',
    'Decline dumbbell triceps extension',
    'Decline skull crushers',
    'EZ bar French press',
    'Floor skull crushers',
    'Incline dumbbell triceps extension',
    'Incline EZ bar triceps extension',
    'Kickbacks',
    'Lying dumbbell triceps extension',
    'Lying EZ bar triceps extension',
    'Lying triceps extensions',
    'Overhead dumbbell triceps extension',
    'Overhead triceps press',
    'Push-downs',
    'Reverse grip push-downs',
    'Seated overhead dumbbell triceps extension',
    'Seated triceps dips',
    'Single arm dumbbell triceps extension',
    'Tate press',
    'Triceps press',
    'Triceps push-up',
    'Weighted bench dips',
    'Zottman triceps extensions',
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for an exercise..."
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
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '90%',
  },
});

export default TricepsScreen;

