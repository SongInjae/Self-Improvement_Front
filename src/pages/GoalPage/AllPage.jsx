import React, { useState, useEffect } from 'react';
import getAddGoal from '../../apis/Goal/getAddGoal';
import styled from '@emotion/styled';
import GoalList from './GoalList';
import { SlRocket } from 'react-icons/sl';
import {
    CircularProgressbarWithChildren
  } from "react-circular-progressbar";
  import 'react-circular-progressbar/dist/styles.css';

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

const AllPage = () => {
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

    return (
        <BoxWrapper>
            <HeadBox>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={44}
                        styles={customStyles[0]}
                    >
                        <div style={{ fontSize: 18}}>
                            44%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            All<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={55}
                        styles={customStyles[1]}
                    >
                        <div style={{ fontSize: 18}}>
                            55%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            Year<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
                <ProgressGraph>
                    <CircularProgressbarWithChildren 
                        value={66}
                        styles={customStyles[2]}
                    >
                        <div style={{ fontSize: 18}}>
                            66%<br/>
                        </div>
                        <div style={{ fontSize: 12, marginTop: 5 }}>
                            Month<br/> progress
                        </div>
                    </CircularProgressbarWithChildren>
                </ProgressGraph>
            </HeadBox>
            <HorizontalLine />
            <GoalWrapper>
                {Goals ==null ?
                (<GoalList Goals={Goals} />):
                (<SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '10%' }} />)}
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default AllPage;