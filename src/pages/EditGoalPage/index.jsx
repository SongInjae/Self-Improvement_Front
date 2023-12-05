import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Year from './Year';
import Season from './Season';
import Month from './Month';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15%;
`;

const BackButton = styled.button`
    margin-left: 10%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid lightgray;
    padding: 20px 20px;
    cursor: pointer;
`;

const Title = styled.div`
    margin-right: 15%;
    margin-top: 2%;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: black;
`;

const SettingWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 10%;
`;

const SemiTitle = styled.div`
    margin-left: 20%;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: black;
`;

const YearButton = styled.button`
    background-color: ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'white')};
    margin-top: 10px;
    margin-left: 10px;
    width: 115px;
    height: 30px;
    text-align: center;
    border: 0.5px solid gray;
    border-radius: 5px;
    cursor: pointer;
`;

const SeasonButton = styled.button`
    background-color: ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'white')};
    margin-top: 10px;
    margin-left: 10px;
    width: 115px;
    height: 30px;
    text-align: center;
    border: 0.5px solid gray;
    border-radius: 5px;
    cursor: pointer;
`;

const MonthButton = styled.button`
    background-color: ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'white')};
    margin-top: 10px;
    margin-left: 10px;
    width: 115px;
    height: 30px;
    text-align: center;
    border: 0.5px solid gray;
    border-radius: 5px;
    cursor: pointer;
`;

const InstructionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    width: 100%;
`;

const Instruction = styled.div`
    margin-top: 5%;
    margin-left: 2%;
    font-family: "Roboto", sans-serif;
    color: gray;
    font-size: 12px;
    line-height: 1.3;
`;

const HorizontalLine = styled.hr`
    margin-top: 10%;
    border: none;
    border-top: 1px solid lightgray;
    width: 420px;
`;

const ContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 340px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: lightgray;
        border-radius: 4px;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    margin-top: 10px;
    margin-left: 13%;
`;

const DeleteButton = styled.button`
    margin-right: 60px;
    background-color: gray;
    border-radius: 20px;
    border: 1px solid lightgray;
    width: 130px;
    height: 40px;
    text-align: center;
    cursor: pointer;
`;

const SaveButton = styled.button`
    background-color: ${ORIGINAL_YELLOW};
    border-radius: 20px;
    border: 1px solid lightgray;
    width: 130px;
    height: 40px;
    text-align: center;
    cursor: pointer;
`;

const EditGoalPage = () => {
    const [visibleYear, setVisibleYear] = useState(false);
    const [visibleSeason, setVisibleSeason] = useState(false);
    const [visibleMonth, setVisibleMonth] = useState(false);

    const [isYearButtonClicked, setIsYearButtonClicked] = useState(false);
    const [isSeasonButtonClicked, setIsSeasonButtonClicked] = useState(false);
    const [isMonthButtonClicked, setIsMonthButtonClicked] = useState(false);

    return(
        <BoxWrapper>
            <TitleWrapper>
                <BackButton>
                
                </BackButton>
                <Title>목표 수정</Title>
            </TitleWrapper>
            <SettingWrapper>
                <ButtonWrapper>
                    <SemiTitle>목표 설정</SemiTitle>
                    <YearButton 
                        isClicked={isYearButtonClicked}
                        onClick={() => {
                            setIsYearButtonClicked(!isYearButtonClicked);
                            setVisibleYear(!visibleYear)
                        }}
                    >
                        연간 목표
                    </YearButton>
                    <SeasonButton 
                        isClicked={isSeasonButtonClicked}
                        onClick={()=>{
                            setIsSeasonButtonClicked(!isSeasonButtonClicked);
                            setVisibleSeason(!visibleSeason);
                        }}
                    >
                        분기 목표
                    </SeasonButton>
                    <MonthButton 
                        isClicked={isMonthButtonClicked}
                        onClick={()=>{
                            setIsMonthButtonClicked(!isMonthButtonClicked);
                            setVisibleMonth(!visibleMonth)
                        }}
                    >
                        월간 목표
                    </MonthButton>
                </ButtonWrapper>
                <InstructionWrapper>
                    <Instruction>
                        <pre>
                        *연간 목표 선택시<br/>
                        추가한 모든 내용은 연간 목표페이지에서 볼 수<br/>
                        있음.
                        </pre>
                    </Instruction>
                    <Instruction>
                        <pre>
                        *분기 목표 선택시 (연간 목표 선택하지 않은 경우)<br/>
                        추가한 모든 내용은 분기 목표 페이지에서 볼 수<br/>
                        있음.
                        </pre>
                    </Instruction>
                    <Instruction>
                        <pre>
                        *월간 목표 선택시 (연간X, 분기X)<br/>
                        추가한 모든 내용은 월간 목표 페이지에서 볼 수<br/>
                        있음.
                        <br/>
                        </pre>
                    </Instruction>
                </InstructionWrapper>
            </SettingWrapper>
            <HorizontalLine />
            <ContentsBox>
                {visibleYear && <Year/>}
                {visibleSeason && <Season/>}
                {visibleMonth && <Month/>}
                <ButtonBox>
                    <DeleteButton>취소</DeleteButton>
                    <SaveButton>저장</SaveButton>
                </ButtonBox>
            </ContentsBox>
        </BoxWrapper>
    );
}

export default EditGoalPage;