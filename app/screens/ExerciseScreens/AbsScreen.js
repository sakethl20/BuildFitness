import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

function AbsScreen({navigation}) {
    
    const exercises = [
        'Ab wheel rollout',
        'Bicycle crunches',
        "Captain's chair leg raise",
        'Cable crunch',
        'Cable woodchop',
        'Decline sit-up',
        'Dead bug',
        'Dragon flag',
        'Flutter kicks',
        'Hanging leg raise',
        'Hollow body hold',
        'Hollow rock',
        'Jackknife sit-up',
        'L-sit',
        'Medicine ball Russian twist',
        'Pallof press',
        'Plank',
        'Reverse crunch',
        'Russian twist with a dumbbell',
        'Scissor kick',
        'Scapular retraction',
        'Side plank',
        'Side plank with rotation',
        'Stability ball crunch',
        'Standing cable crunch',
        'Standing oblique crunch',
        'Swiss ball plank',
        'Toe touch crunch',
        'V-up',
        'Weighted sit-up',
        'Windshield wiper',
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
        color: 'blue',
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

export default AbsScreen;