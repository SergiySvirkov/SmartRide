// Example ride service

import api from './api';

const rideService = {
  getRides: async () => {
    try {
      const response = await api.get('rides');
      // Handle logic to process and return rides data
      return response;
    } catch (error) {
      throw error;
    }
  },

  bookRide: async (rideDetails) => {
    try {
      const response = await api.post('book-ride', rideDetails);
      // Handle logic for booking a ride
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default rideService;

