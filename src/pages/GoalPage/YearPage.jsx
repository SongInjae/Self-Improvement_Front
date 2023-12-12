import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import YearGoalList from './YearGoalList';
import getfindYearGoal from '../../apis/Goal/getfindYearGoal';
import getYearAndMonthGoal from '../../apis/Goal/getYearAndMonthGoal';
import deleteYearGoal from '../../apis/Goal/deleteYearGoal';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { SlRocket } from 'react-icons/sl';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const GoalWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    height: 370px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: lightgray;
        border-radius: 4px;
    }
`;

const IconWrapper = styled.div`
    margin-left: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    color: Gainsboro;
`;

const Icon = styled.button`
    cursor: pointer;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    &:hover {
        color: #000; /* 마우스 오버 시 색상 변경 가능 */
    }
`;

const Year = styled.div`
    text-align: center;
    font-size: 30px;
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 8px;
    color: black;
`;

const YearPage = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [yearGoals, setYearGoals] = useState([]);
    const [monthGoals, setMonthGoals] = useState([]);
    const userId = localStorage.getItem('userId');


    useEffect(() => {
        const getYearData = async () => {
          try {
            const yearData = await getfindYearGoal({year: currentYear, id: userId});
            setYearGoals(yearData);
          } catch (error) {
            console.error("Error fetching goal data:", error);
          }
        };
        const getMonthData = async () => {
            try {
              const monthData = await getYearAndMonthGoal({year: currentYear, id: userId});
              setMonthGoals(monthData);
            } catch (error) {
              console.error("Error fetching goal data:", error);
            }
          };
        getYearData();
        getMonthData();
      }, [currentYear]);

      const combinedGoals = yearGoals && yearGoals.map((yearGoal) => {
        const matchingMonthGoals = monthGoals ? monthGoals.filter(
          (monthGoal) => {
            console.log('checkt', yearGoal, monthGoal);
            return monthGoal.id === yearGoal.id}
        ):[];
        return { ...yearGoal, matchingMonthGoals };
      });

    const handleYearChange = (amount) => {
        const newYear = currentYear + amount;
        setCurrentYear(newYear);
    };

    const deleteCombinedGoal = async (id) => {
      try {
        // Call the API to delete the combined goal
        await deleteYearGoal(id);
  
        // Assuming you need to update state after deletion
        // Fetch the updated year goals after deletion and set the state
        const updatedYearData = await getfindYearGoal({ year: currentYear, id: userId});
        setYearGoals(updatedYearData);
        
        console.log(`Successfully deleted combined goal with ID ${id}`);
      } catch (error) {
        console.error('Error deleting combined goal:', error);
        // Handle the error, e.g., show a notification to the user
      }
    };

console.log(combinedGoals);
    return (
        <BoxWrapper>
            <IconWrapper>
                <Icon onClick={() => handleYearChange(-1)}>
                    <CiCircleChevLeft size={40} />
                </Icon>
                <Year>{currentYear}</Year>
                <Icon onClick={() => handleYearChange(1)}>
                    <CiCircleChevRight size={40} />
                </Icon>
            </IconWrapper>
            <GoalWrapper>
                {yearGoals?.length ?
                (<YearGoalList  combinedGoals={yearGoals} onDelete={deleteCombinedGoal} />):
                (<SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '36%' }} />)}
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default YearPage;