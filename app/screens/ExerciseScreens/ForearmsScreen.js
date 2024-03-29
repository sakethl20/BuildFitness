import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ForearmsScreen({navigation}) {
    const [searchText, setSearchText] = useState('');
    const exercises = [
        'Behind the back wrist curls',
        'Dumbbell finger curl',
        'Dumbbell reverse curl',
        'Dumbbell wrist extension',
        'Dumbbell wrist flexion',
        'Farmer’s walk',
        'Fat grip barbell hold',
        'Finger extension rubber band exercise',
        'Forearm plank',
        'Hand gripper exercises',
        'Iso-hold dumbbell reverse curl',
        'Kettlebell bottoms-up clean',
        'Kettlebell bottoms-up press',
        'Kettlebell farmer’s carry',
        'Kettlebell forearm flip',
        'Kettlebell high pull',
        'Kettlebell waiter’s walk',
        'Plate pinch grip',
        'Reverse grip barbell curl',
        'Reverse grip EZ-bar curl',
        'Reverse grip preacher curl',
        'Rope climb',
        'Seated barbell wrist extension',
        'Seated barbell wrist flexion',
        'Seated one-arm dumbbell wrist curl',
        'Seated palms-up barbell wrist curl',
        'Seated reverse-grip barbell wrist curl',
        'Seated two-arm dumbbell wrist curl',
        'Towel pull-ups',
        'Wrist roller',
        'Zottman curl',
    ];

    const filteredExercises = exercises.filter(exercise => exercise.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                value={searchText}
                onChangeText={text => setSearchText(text)}
                placeholder="Search exercises"
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
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        paddingHorizontal: 10,
        marginBottom: 10,
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
});

export default ForearmsScreen;
