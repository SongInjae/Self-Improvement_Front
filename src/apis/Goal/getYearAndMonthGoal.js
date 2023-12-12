import { axiosClient } from '../axiosClient';

const getYearAndMonthGoal = async ({ year, id }) => {
  try {
    const response = await axiosClient.get(`api/getYearAndMonthGoal?year=${year}&userId=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getYearAndMonthGoal;