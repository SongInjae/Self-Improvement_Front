import { axiosClient } from '../axiosClient';

const getfindMonthGoal = async ({ month, id }) => {
  try {
    const response = await axiosClient.get(`api/findMonthGoals?month=${month}&userId=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getfindMonthGoal;