import React from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView } from 'react-native';

function BicepsScreen({navigation}) {
    
    const exercises = [
        'Alternating dumbbell curls',
        'Barbell biceps curls',
        'Cable curls',
        'Chin-ups',
        'Concentration curls',
        'Cross-body hammer curls',
        'Decline dumbbell curls',
        'Drag curls',
        'EZ-bar curls',
        'Forearm curls',
        'Hammer curls',
        'Incline dumbbell curls',
        'Incline hammer curls',
        'Incline seated biceps curls',
        'Isometric curls',
        'Kettlebell curls',
        'Lying biceps curls',
        'Machine biceps curls',
        'Preacher curls',
        'Reverse barbell curls',
        'Reverse cable curls',
        'Reverse dumbbell curls',
        'Seated dumbbell curls',
        'Seated hammer curls',
        'Standing cable curls',
        'Standing dumbbell curls',
        'Zottman curls'
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
export default BicepsScreen;