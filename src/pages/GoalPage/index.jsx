import React, { useState } from 'react';
import styled from '@emotion/styled';
import AllPage from './AllPage';
import YearPage from './YearPage';
import MonthPage from './MonthPage';
import Header from '../../components/Header';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const AllPageButton = styled.button`
    font-family: 'MainMedium';
    width: 140px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const YearPageButton = styled.button`
    font-family: 'MainMedium';
    width: 140px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const MonthPageButton = styled.button`
    font-family: 'MainMedium';
    width: 140px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const HorizontalLine = styled.hr`
    border-top: 1px solid lightgray;
    width: 420px;
`;

const ShortHorizontalLine = styled.hr`
    margin-top: -10px;
    margin-left: ${props => props.marginLeft || '0'}px;
    border-top: 2px solid gray;
    width: 143px;
`;

const ContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px; 
`;

const GoalPage = () => {
    const [visibleAllPage, setVisibleAllPage] = useState(true);
    const [visibleYearPage, setVisibleYearPage] = useState(false);
    const [visibleMonthPage, setVisibleMonthPage] = useState(false);
    const [shortHorizontalLineLeft, setShortHorizontalLineLeft] = useState(0);


    const handleButtonClicked = (page) => {
        // Set the visibility of the pages
        setVisibleAllPage(page === 'all');
        setVisibleYearPage(page === 'year');
        setVisibleMonthPage(page === 'month');

        switch (page) {
            case 'all':
                setShortHorizontalLineLeft(0);
                break;
            case 'year':
                setShortHorizontalLineLeft(140);
                break;
            case 'month':
                setShortHorizontalLineLeft(280);
                break;
        }
    };

    return(
        <BoxWrapper>
            <Header title="PLAN" isPlus />
            <HorizontalLine />
            <ButtonWrapper>
                <AllPageButton 
                    onClick={() => {
                        if (!visibleAllPage) {
                            handleButtonClicked('all');
                        }
                    }}
                >
                    전체
                </AllPageButton>
                <YearPageButton 
                    onClick={() => {
                        if (!visibleYearPage) {
                            handleButtonClicked('year');
                        }
                    }}
                >
                    연간 목표
                </YearPageButton>
                <MonthPageButton 
                    onClick={()=>{
                        if (!visibleMonthPage) {
                            handleButtonClicked('month');
                        }
                    }}
                 >
                    월간 목표
                </MonthPageButton>
            </ButtonWrapper>
            <HorizontalLine />
            <ShortHorizontalLine marginLeft={shortHorizontalLineLeft} />
            <ContentsBox>
                {visibleAllPage && <AllPage/>}
                {visibleYearPage && <YearPage/>}
                {visibleMonthPage && <MonthPage/>}
            </ContentsBox>
        </BoxWrapper>
    );
}

export default GoalPage;