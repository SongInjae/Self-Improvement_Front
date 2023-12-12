import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import MonthGoalList from './MonthGoalList';
import getfindMonthGoal from '../../apis/Goal/getfindMonthGoal';
import deleteMonGoal from '../../apis/Goal/deleteMonGoal';
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
    &:disabled {
        cursor: not-allowed;
        color: lightgray;
    }
`;

const Year = styled.div`
    text-align: center;
    font-size: 20px;
    margin-left: 70px;
    margin-right: 5px;
    margin-top: 10px;
    color: black;
`;

const Month = styled.div`
    text-align: center;
    font-size: 30px;
    margin-left: 0px;
    margin-right: 80px;
    margin-top: 5px;
    color: black;
`;

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const MonthPage = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); 
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); 
    const [monthGoals, setMonthGoals] = useState([]);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const getMonthData = async () => {
            try {
              const monthData = await getfindMonthGoal({month: currentMonth+1, id: userId});
              const filteredMonthData = monthData.filter(data => data.year === currentYear);
              setMonthGoals(filteredMonthData);
            } catch (error) {
              console.error("Error fetching goal data:", error);
            }
          };
        getMonthData();
      }, [currentMonth]);

    const handleMonthChange = (amount) => {
        let newMonth = currentMonth + amount;
        let newYear = currentYear;

        if (newMonth < 0) {
            newMonth = 11; // 0부터 시작하는 인덱스로 변경
            newYear -= 1;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const handleDelete = async (id) => {
        try {
          await deleteMonGoal(id);
          
          const updatedMonthData = await getfindMonthGoal({ month: currentMonth, id: userId});
          setMonthGoals(updatedMonthData);

          console.log(`Month goal with ID ${id} deleted successfully.`);
        } catch (error) {
          console.error('Error deleting month goal:', error);
        }
      };

    console.log('z', monthGoals);
    return (
        <BoxWrapper>
            <IconWrapper>
                <Icon onClick={() => handleMonthChange(-1)}>
                    <CiCircleChevLeft size={40} />
                </Icon>
                <Year>
                    {currentYear}
                </Year>
                <Month>
                    {monthNames[currentMonth]}
                </Month>
                <Icon onClick={() => handleMonthChange(1)}>
                    <CiCircleChevRight size={40} />
                </Icon>
            </IconWrapper>
            <GoalWrapper>
                {monthGoals.length ?
                (<MonthGoalList  monthGoals={monthGoals} onDelete={handleDelete}/>) :
                 (<SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '36%' }} />)}   
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default MonthPage;