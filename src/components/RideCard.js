// RideCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RideCard = ({ ride }) => {
  // Assuming ride is an object with relevant details

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ride.title}</Text>
      <Text style={styles.details}>{ride.details}</Text>
      <Text style={styles.time}>{ride.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
});

export default RideCard;

