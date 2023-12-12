import { axiosClient } from '../axiosClient';

const getfindYearGoal = async ({ year, id }) => {
  try {
    const response = await axiosClient.get(`api/findYearGoals?year=${year}&userId=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getfindYearGoal;