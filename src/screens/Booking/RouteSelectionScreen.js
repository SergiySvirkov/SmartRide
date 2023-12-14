// RouteSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import RouteCard from '../../services/components/RouteCard';

const RouteSelectionScreen = ({ route, navigation }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const routes = [
    { id: '1', name: 'Downtown Loop', duration: '30 mins' },
    { id: '2', name: 'City Explorer', duration: '45 mins' },
    // Add more route options as needed
  ];

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
  };

  const handleContinue = () => {
    if (selectedRoute) {
      // Navigate to the ride details screen with the selected route and vehicle
      navigation.navigate('RideDetails', { selectedRoute, selectedVehicle: route.params?.selectedVehicle });
    } else {
      // Handle case where no route is selected, e.g., show an error message
      console.error('No route selected');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Route</Text>
      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectRoute(item)}>
            <RouteCard route={item} isSelected={selectedRoute?.id === item.id} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default RouteSelectionScreen;

