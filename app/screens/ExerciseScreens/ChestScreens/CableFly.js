import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

function CableFly(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={{uri: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/cable-cross-over.gif"}} />
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Muscles Worked:</Text>
                <Text style={styles.text}>- Pectoralis Major (Chest)</Text>
                <Text style={styles.text}>- Anterior Deltoids (Shoulders)</Text>
                <Text style={styles.text}>- Biceps Brachii</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Equipment:</Text>
                <Text style={styles.text}>- Cable machine</Text>
                <Text style={styles.text}>- D-handles</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                <Text style={styles.text}>
                    1. Set the handles of the cable machine at chest height.
                </Text>
                <Text style={styles.text}>
                    2. Stand in the middle of the cable machine, facing away from it with a handle in each hand.
                </Text>
                <Text style={styles.text}>
                    3. Step forward with one foot, keeping your elbows slightly bent and your palms facing each other.
                </Text>
                <Text style={styles.text}>
                    4. Bring your hands together in front of your chest by squeezing your chest muscles.</Text>
                <Text style={styles.text}>
                    5. Slowly release your hands back to the starting position.
                </Text>
                <Text style={styles.text}>
                    6. Repeat for the desired number of repetitions.
                </Text>
            </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: '100%',
        height: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionContainer: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 5,
    },
});

export default CableFly;
