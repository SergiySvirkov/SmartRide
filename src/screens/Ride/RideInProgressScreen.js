// RideInProgressScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView from '../../services/components/MapView';

const RideInProgressScreen = () => {
  // Add logic to fetch and display information about the ongoing ride

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride in Progress</Text>
      <MapView />
      <Button title="End Ride" onPress={() => console.log('End Ride')} />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RideInProgressScreen;

