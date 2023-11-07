import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { useState } from 'react';

const GoalComponentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const CompleteBox = styled.button`
    margin-top: -45px;
    margin-left: ${props => props.marginLeft || '0'}px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: gray;
    border-radius: 20px;
    border: 3px solid gray;
    background-color: white;
    width: 70px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const GoalBox = styled.div`
    margin-top: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: gray;
    border-radius: 20px;
    border: 3px solid lightgray;
    width: 350px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DetailGoal = styled.div`
    padding: 15px;
    margin-top: -1px;
    font-family: "Roboto", sans-serif;
    color: gray;
    border-radius: 20px;
    border: 3px solid lightgray;
    width: 350px;
    height: 250px;
    box-sizing: border-box;
`;

const SeasonButton = styled.button`
    margin-left: 10px;
    background-color: ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'white')};
    border-radius: 15px;
    border: 3px solid lightgray;
    width: 50px;
    height: 20px;
    font-size: 10px;
    cursor: pointer;
`;

const MonthButton = styled.button`
    margin-left: 10px;
    background-color: ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'white')};
    border-radius: 15px;
    border: 3px solid lightgray;
    width: 50px;
    height: 20px;
    font-size: 10px;
    cursor: pointer;
`;

const DetailButton = styled.button`
    margin-top: -2px;
    margin-left: 38%;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    border: 3px solid lightgray;
    width: 80px;
    padding: 4px;
    cursor: pointer;
`;

const ShortHorizontalLine = styled.hr`
    margin-top: -8px;
    margin-left: 43.5%;
    border-top: 2px solid lightgray;
    width: 40px;
`;

const GoalComponent = () => {
    const [marginLeft, setMarginLeft] = useState(0);
    
    const [visibleDetail, setVisibleDetail] = useState(false);

    const [isSeasonButtonClicked, setIsSeasonButtonClicked] = useState(true);
    const [isMonthButtonClicked, setIsMonthButtonClicked] = useState(false);

    return (
        <GoalComponentBox>
            
            <GoalBox>토익 800점 이상</GoalBox>
            <CompleteBox
                marginLeft={marginLeft}
                onClick={() => {
                    // Toggle marginLeft on CompleteBox click
                    setMarginLeft(marginLeft === 0 ? 285 : 0);
                }}
            >
                2023
            </CompleteBox>
            {visibleDetail &&
            <DetailGoal>
                <SeasonButton 
                    isClicked={isSeasonButtonClicked}
                    onClick={() => {
                        setIsSeasonButtonClicked(true);
                        setIsMonthButtonClicked(false);
                    }}
                >
                    분기
                </SeasonButton>
                <MonthButton 
                    isClicked={isMonthButtonClicked}
                    onClick={()=>{
                        setIsSeasonButtonClicked(false);
                        setIsMonthButtonClicked(true);
                    }}
                >
                    월간
                </MonthButton><br/><br/>
                1~3월<br/>
                토익 800점이상<br/><br/>
                4~6월<br/>
                토익 800점이상<br/><br/>
                7~9월<br/>
                토익 800점이상<br/><br/>
                10~12월<br/>
                토익 800점이상
            </DetailGoal>
            }                     
            <DetailButton
                onClick={() => {
                    setVisibleDetail(!visibleDetail)
                }}
            >
            </DetailButton>
            <ShortHorizontalLine />
        </GoalComponentBox>
    );
};

export default GoalComponent;
