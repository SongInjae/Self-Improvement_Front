import { axiosClient } from '../axiosClient';

const deleteMonGoal = async (id) => {
  try {
    const response = await axiosClient.delete(`api/deleteMonGoal/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting month goal:', error);
    throw error; // Re-throw the error to handle it in the calling code if needed
  }
};

export default deleteMonGoal;
