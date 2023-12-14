// RideHistoryScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RideCard from '../../services/components/RideCard';

const RideHistoryScreen = () => {
  // Add logic to fetch and display user's ride history

  const rideHistory = [
    { id: '1', title: 'Work Commute', details: 'From Home to Office', time: '2023-01-01 08:00 AM' },
    { id: '2', title: 'City Tour', details: 'Exploring the city landmarks', time: '2023-02-15 02:00 PM' },
    // Add more ride history entries as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride History</Text>
      <FlatList
        data={rideHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RideCard ride={item} />}
      />
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

export default RideHistoryScreen;
