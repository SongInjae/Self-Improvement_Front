import { axiosClient } from '../axiosClient';

const getAddGoal = async ({ year, yearGoal, monthGoals }) => {
  try {
    const response = await axiosClient.get(`api/goal/${year}/${yearGoal}/${monthGoals}`);
    return response.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default getAddGoal;