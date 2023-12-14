// VehicleSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import VehicleCard from '../../services/components/VehicleCard';

const VehicleSelectionScreen = ({ navigation }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
    { id: '1', type: 'Bus', capacity: 30 },
    { id: '2', type: 'Tram', capacity: 20 },
    // Add more vehicle options as needed
  ];

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleContinue = () => {
    if (selectedVehicle) {
      // Navigate to the route selection screen with the selected vehicle
      navigation.navigate('RouteSelection', { selectedVehicle });
    } else {
      // Handle case where no vehicle is selected, e.g., show an error message
      console.error('No vehicle selected');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Vehicle</Text>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectVehicle(item)}>
            <VehicleCard vehicle={item} isSelected={selectedVehicle?.id === item.id} />
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

export default VehicleSelectionScreen;

