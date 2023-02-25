import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

function BarbellDeclineBenchPress(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={{uri: "http://newlife.com.cy/wp-content/uploads/2019/11/00331301-Barbell-Decline-Bench-Press_Chest_360.gif"}} /> 
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Muscles Worked:</Text>
            <Text style={styles.text}>- Lower Pectoralis Major (Chest)</Text>
            <Text style={styles.text}>- Anterior Deltoids (Shoulders)</Text>
            <Text style={styles.text}>- Triceps Brachii</Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Equipment:</Text>
            <Text style={styles.text}>- Barbell</Text>
            <Text style={styles.text}>- Decline Bench</Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Instructions:</Text>
            <Text style={styles.text}>
            1. Lie face-up on a decline bench with your feet secured at the top end of the bench.
            </Text>
            <Text style={styles.text}>
            2. Grasp the barbell with your hands slightly wider than shoulder-width apart.
            </Text>
            <Text style={styles.text}>
            3. Lower the barbell to your lower chest while keeping your elbows at a 45-degree angle.
            </Text>
            <Text style={styles.text}>4. Press the barbell back up to the starting position, exhaling as you do so.</Text>
            <Text style={styles.text}>5. Repeat for the desired number of repetitions.</Text>
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

export default BarbellDeclineBenchPress;
