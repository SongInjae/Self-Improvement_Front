import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import YearGoalList from './YearGoalList';
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
    const [Goals, setGoals] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            // Call the getAddGoal function with the appropriate parameters
            const data = await getAddGoal({ year: 2023, yearGoal: 'exampleGoal', monthGoals: 'exampleMonth' });
            setGoals(data); // Set the goal data in the state
          } catch (error) {
            // Handle errors if needed
            console.error("Error fetching goal data:", error);
          }
        };
    
        getData(); // Call the fetchData function when selectDay changes
      }, []);

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handleYearChange = (amount) => {
        const newYear = currentYear + amount;
        setCurrentYear(newYear);
    };


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
                {Goals == null ?
                (<YearGoalList  Goals={Goals} />):
                (<SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '10%' }} />)}
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default YearPage;