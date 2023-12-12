import React, { useState, useEffect } from 'react';
import getfindYearGoal from '../../apis/Goal/getfindYearGoal';
import getYearAndMonthGoal from '../../apis/Goal/getYearAndMonthGoal';
import deleteYearGoal from '../../apis/Goal/deleteYearGoal';
import styled from '@emotion/styled';
import YearGoalList from './YearGoalList';
import MonthGoalList from './MonthGoalList';
import { SlRocket } from 'react-icons/sl';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {
    CircularProgressbarWithChildren
  } from "react-circular-progressbar";
  import 'react-circular-progressbar/dist/styles.css';
import getfindMonthGoal from '../../apis/Goal/getfindMonthGoal';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadBox = styled.div`
    display: flex;
`;

const ProgressGraph= styled.div`
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    color: black;
`;

const HorizontalLine = styled.hr`
    border-top: 1px solid lightgray;
    width: 420px;
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

const progressBarSize = 100;

const customStyles = [
    // Styles for the first progress bar (All progress)
    {
        trail: {
            stroke: 'lightgray',
            strokeWidth: 8,
        },
        path: {
            stroke: '#6A5ACD', // Customize the color for the first progress bar
            strokeWidth: 8,
            strokeLinecap: 'round',
        },
        text: {
            fill: 'black',
            fontSize: '20px',
        },
        root: {
            width: progressBarSize,
            height: progressBarSize,
        },
    },
    // Styles for the second progress bar (Year progress)
    {
        trail: {
            stroke: 'lightgray',
            strokeWidth: 8,
        },
        path: {
            stroke: 'orange', // Customize the color for the second progress bar
            strokeWidth: 8,
            strokeLinecap: 'round',
        },
        text: {
            fill: 'black',
            fontSize: '20px',
        },
        root: {
            width: progressBarSize,
            height: progressBarSize,
        },
    },
    // Styles for the third progress bar (Month progress)
    {
        trail: {
            stroke: 'lightgray',
            strokeWidth: 8,
        },
        path: {
            stroke: 'green', // Customize the color for the third progress bar
            strokeWidth: 8,
            strokeLinecap: 'round',
        },
        text: {
            fill: 'black',
            fontSize: '20px',
        },
        root: {
            width: progressBarSize,
            height: progressBarSize,
        },
    },
];

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

const AllPage = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [yearGoals, setYearGoals] = useState([]);
    const [monthGoals, setMonthGoals] = useState([]);
    const [onlyMonthGoals, setOnlyMonthGoals] = useState([]);

    const [completedCount, setCompletedCount] = useState(0);
    const [allPercent, setAllPercent]=useState(0);
    const [yearPercent, setYearPercent]=useState(0); 
    const [monthPercent, setMonthPercent]=useState(0);

    const userId = localStorage.getItem('userId');

    console.log(yearGoals, onlyMonthGoals);

    const handleYearChange = (amount) => {
        const newYear = currentYear + amount;
        setCurrentYear(newYear);
    };

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
            (monthGoal) => monthGoal.id === yearGoal.id
        ):[];
        return { ...yearGoal, matchingMonthGoals };
    });

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

    useEffect(() => {
        const calculatePercentages = () => {
            if (yearGoals && yearGoals.length > 0) {
                const completedYearGoals = yearGoals.filter(goal => goal.IsDone).length;
                const yearPercentage = (completedYearGoals / yearGoals.length) * 100;
                setYearPercent(yearPercentage);
                setCompletedCount((prevState) => prevState + completedYearGoals);
            } else setYearPercent(0);

            if (monthGoals && monthGoals.length > 0) {
                const completedMonthGoals = monthGoals.filter(goal => goal.monIsDone).length;
                const monthPercentage = (completedMonthGoals / monthGoals.length) * 100;
                setMonthPercent(monthPercentage);
                setCompletedCount((prevState) => prevState + completedMonthGoals);
            } else setMonthPercent(0);

            if(yearGoals?.length > 0 || monthGoals?.length > 0) {
                const allPercentage = (completedCount / (yearGoals?.length + monthGoals?.length)) * 100;
                setAllPercent(allPercentage);
            } else {
                setAllPercent(0);
            }
        };
    
        calculatePercentages();
    }, [yearGoals, monthGoals]);

    return (
        <BoxWrapper>
            <HeadBox>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={allPercent}
                        styles={customStyles[0]}
                    >
                        <div style={{ fontSize: 18}}>
                            {allPercent}%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            All<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={yearPercent}
                        styles={customStyles[1]}
                    >
                        <div style={{ fontSize: 18}}>
                            {yearPercent}%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            Year<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={monthPercent}
                        styles={customStyles[2]}
                    >
                        <div style={{ fontSize: 18}}>
                            {monthPercent}%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            Month<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
            </HeadBox>
            <HorizontalLine />
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
            {
                (combinedGoals && !onlyMonthGoals) ? (
                    // yearGoals가 있고 monthGoals가 없을 때
                    <YearGoalList combinedGoals={combinedGoals} onDelete={deleteCombinedGoal}/>
                ) : (!combinedGoals && onlyMonthGoals) ? (
                    // yearGoals가 없고 monthGoals가 있을 때
                    <MonthGoalList monthGoals={onlyMonthGoals} setmonthGoals={setOnlyMonthGoals}/>
                ) : (combinedGoals && onlyMonthGoals) ? (
                    // yearGoals와 monthGoals가 둘 다 있을 때
                    <>
                    <YearGoalList combinedGoals={combinedGoals} onDelete={deleteCombinedGoal}/>
                    <MonthGoalList monthGoals={onlyMonthGoals} setmonthGoals={setOnlyMonthGoals}/>
                    </>
                ) : (
                    // yearGoals와 monthGoals가 둘 다 없을 때
                    <SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '10%' }} />
                )
            }
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default AllPage;