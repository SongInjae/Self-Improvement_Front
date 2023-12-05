import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { Link } from 'react-router-dom';
import AllPage from './AllPage';
import YearPage from './YearPage';
import SeasonPage from './SeasonPage';
import MonthPage from './MonthPage';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15%;
`;

const Title = styled.div`
    margin-left: 15%;
    margin-top: 2%;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-family: 'MainLogo';
    font-size: 30px;
    color: black;
`;

const AddButton = styled.button`
    margin-right: 8%;
    background-color: ${ORIGINAL_YELLOW};
    border-radius: 25px;
    border: 1px solid ${ORIGINAL_YELLOW};
    padding: 20px 20px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const AllPageButton = styled.button`
    width: 105px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const YearPageButton = styled.button`
    width: 105px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const SeasonPageButton = styled.button`
    width: 105px;
    height: 30px;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: white;
`;

const MonthPageButton = styled.button`
    width: 105px;
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
    border-top: 3px solid gray;
    width: 108px;
`;

const ContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px; 
`;

const GoalPage = () => {
    const [visibleAllPage, setVisibleAllPage] = useState(true);
    const [visibleYearPage, setVisibleYearPage] = useState(false);
    const [visibleSeasonPage, setVisibleSeasonPage] = useState(false);
    const [visibleMonthPage, setVisibleMonthPage] = useState(false);
    const [shortHorizontalLineLeft, setShortHorizontalLineLeft] = useState(0);


    const handleButtonClicked = (page) => {
        // Set the visibility of the pages
        setVisibleAllPage(page === 'all');
        setVisibleYearPage(page === 'year');
        setVisibleSeasonPage(page === 'season');
        setVisibleMonthPage(page === 'month');

        switch (page) {
            case 'all':
                setShortHorizontalLineLeft(0);
                break;
            case 'year':
                setShortHorizontalLineLeft(105);
                break;
            case 'season':
                setShortHorizontalLineLeft(210);
                break;
            case 'month':
                setShortHorizontalLineLeft(315);
                break;
        }
    };

    return(
        <BoxWrapper>
            <TitleWrapper>
                <Title>PLAN</Title>
                <AddButton>
                
                </AddButton>
            </TitleWrapper>
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
                <SeasonPageButton 
                    onClick={()=>{
                        if (!visibleSeasonPage) {
                            handleButtonClicked('season');
                        }
                    }}
                >
                    분기 목표
                </SeasonPageButton>
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
                {visibleSeasonPage && <SeasonPage/>}
                {visibleMonthPage && <MonthPage/>}
            </ContentsBox>
        </BoxWrapper>
    );
}

export default GoalPage;