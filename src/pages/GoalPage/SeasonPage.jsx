import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { useState } from 'react';
import GoalComponent from './GoalComponent';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeadBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProgressGraph= styled.div`
    margin: 10%;
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    color: black;
`;

const Date= styled.div`
    margin: 10%;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'MainLogo';
    font-size: 30px;
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

const SeasonPage = () => {

    return (
        <BoxWrapper>
            <HeadBox>
                <ProgressGraph>
                    분기 원형 그래프
                </ProgressGraph>
                <Date>
                    2023년 11월 5일 (일)
                </Date>
            </HeadBox>
            <HorizontalLine />
            <GoalWrapper>
                <GoalComponent />
            </GoalWrapper>
        </BoxWrapper>
    );
};

export default SeasonPage;
