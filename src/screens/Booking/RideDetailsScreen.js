// RideDetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../services/components/Header';

const RideDetailsScreen = ({ route, navigation }) => {
  const { selectedRoute, selectedVehicle } = route.params;

  const handleStartRide = () => {
    // Add logic to start the ride and navigate to the ride in progress screen
    navigation.navigate('RideInProgress');
  };

  return (
    <View style={styles.container}>
      <Header title="Ride Details" />
      <Text style={styles.title}>Selected Vehicle: {selectedVehicle.type}</Text>
      <Text style={styles.title}>Selected Route: {selectedRoute.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartRide}>
        <Text style={styles.buttonText}>Start Ride</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RideDetailsScreen;
