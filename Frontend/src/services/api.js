import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const userService = {
  async getProfile() {
    try {
      const response = await axios.get(`${API_URL}/users/profile`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  async updateProfile(profileData) {
    try {
      const response = await axios.put(`${API_URL}/users/profile`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};