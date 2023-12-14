// Example API service for making HTTP requests

const BASE_URL = 'https://api.example.com';

const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API GET request error:', error);
      throw error;
    }
  },

  post: async (endpoint, body) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API POST request error:', error);
      throw error;
    }
  },
};

export default api;
