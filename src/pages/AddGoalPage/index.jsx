import React, { useState } from 'react';
import postCreateYearGoal from '../../apis/Goal/postCreateYearGoal';
import postCreateMonGoal from '../../apis/Goal/postCreateMonGoal'
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW } from '../../constants/color';
import Header from '../../components/Header';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin-left: 5%;
  display: flex;
  margin-top: 3%;
`;

const SemiTitle = styled.div`
  margin-left: 10%;
  margin-top: 5%;
  font-family: 'MainMedium';
  color: black;
`;

const YearButton = styled.button`
  background-color: white;
  margin-top: 10px;
  margin-left: 10px;
  width: 180px;
  height: 70px;
  text-align: center;
  border: 2px solid
    ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'lightgray')};
  border-radius: 40px;
  cursor: pointer;
  font-family: 'MainMedium';
`;

const MonthButton = styled.button`
  background-color: white;
  margin-top: 10px;
  margin-left: 10px;
  width: 180px;
  height: 70px;
  text-align: center;
  border: 2px solid
    ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'lightgray')};
  border-radius: 40px;
  cursor: pointer;
  font-family: 'MainMedium';
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
  height: 370px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
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
  margin-bottom: 10px;
  background-color: Gainsboro;
  border-radius: 20px;
  border: 1px solid Gainsboro;
  width: 130px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.25);
`;

const SaveButton = styled.button`
  background-color: ${ORIGINAL_YELLOW};
  margin-bottom: 10px;
  border-radius: 20px;
  border: 1px solid ${ORIGINAL_YELLOW};
  width: 130px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.25);
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  color: black;
  margin-left: 55px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const CounterButton = styled.button`
  background-color: white;
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YearInputBox = styled.input`
  font-family: 'Roboto', sans-serif;
  font: 40px;
  border: 3px;
  background-color: white;
  width: 320px;
  height: 40px;
  margin-left: 50px;
  margin-bottom: 10px;
  padding-left: 10px;
  outline: none;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.25);
`;

const MonthInputBox = styled.div`
  font-family: 'Roboto', sans-serif;
  font: 20px;
  width: 310px;
  height: 830px;
  margin-left: 50px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0px 2px 3.84px rgba(0, 0, 0, 0.25);
`;

const SmallInputBox = styled.input`
  font-family: 'Roboto', sans-serif;
  font: 20px;
  border: none;
  border-bottom: 3px solid lightgray;
  width: 290px;
  height: 30px;
  margin: 10px;
  outline: none;
`;

const AddGoalPage = () => {
  const navigate = useNavigate();

  const [year, setYear] = useState(2023);
  const [yearGoal, setYearGoal] = useState('');
  const [monthGoals, setMonthGoals] = useState(Array(12).fill(''));
  const [nextId, setNextId] = useState(1);
  const [yearIsDone, setYearIsDone]=useState(false);
  const [monthIsDone, setMonthIsDone]=useState(false);

  const [visibleYear, setVisibleYear] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(false);

  const [isYearButtonClicked, setIsYearButtonClicked] = useState(false);
  const [isMonthButtonClicked, setIsMonthButtonClicked] = useState(false);

  const handleIncrement = () => {
    setYear(parseInt(year, 10) + 1);
  };

  const handleDecrement = () => {
    setYear(parseInt(year, 10) - 1);
  };

  const handleForSubmit = async (e) => {
    e.preventDefault();

    try {
      // 연간 목표만 저장
      if (isYearButtonClicked) {
        const result1 = await postCreateYearGoal({
          id: nextId,
          year: year,
          yearGoal: yearGoal,
          isDone: yearIsDone,
        });
  
        console.log('Result from server (Year Goal):', result1);
      }
  
      // 월간 목표만 저장
      if (isMonthButtonClicked) {
        for (let month = 1; month <= 12; month++) {
          const result2 = await postCreateMonGoal({
            id: nextId,
            year: year,
            month: month,
            monGoal: monthGoals[month - 1],
            isDone: monthIsDone,
          });
  
          console.log('Result from server (Month Goal):', result2);
        }
      }
      
      setNextId((prevId) => prevId + 1);

      // 성공적으로 서버에 저장되었다면 페이지 이동
      navigate('/goal');
    } catch (error) {
      console.error('목표 제출 중 오류:', error);
      console.log('자세한 Axios 응답:', error.response);
      // 에러가 발생했을 경우 처리
    }
  };

  return (
    <BoxWrapper>
      <Header title="목표 추가" isKorean isPrev />
      <SettingWrapper>
        <SemiTitle>목표 설정</SemiTitle>
        <ButtonWrapper>
          <YearButton
            isClicked={isYearButtonClicked}
            onClick={() => {
              setIsYearButtonClicked(!isYearButtonClicked);
              setVisibleYear(!visibleYear);
            }}
          >
            연간 목표
          </YearButton>
          <MonthButton
            isClicked={isMonthButtonClicked}
            onClick={() => {
              setIsMonthButtonClicked(!isMonthButtonClicked);
              setVisibleMonth(!visibleMonth);
            }}
          >
            월간 목표
          </MonthButton>
        </ButtonWrapper>
      </SettingWrapper>
      <HorizontalLine />
      <ContentsBox>
        {visibleYear && (
          <div>
            <TitleBox>
              <Title>연간 목표</Title>
              <CounterBox>
                <CounterButton onClick={handleDecrement}>-</CounterButton>
                {year}
                <CounterButton onClick={handleIncrement}>+</CounterButton>
              </CounterBox>
            </TitleBox>
            <YearInputBox
              type="text"
              value={yearGoal}
              onChange={(e) => setYearGoal(e.target.value)} // onChange 추가
            />
          </div>
        )}
        {visibleMonth && (
          <div>
            <TitleBox>
              <Title>월간 목표</Title>
              <CounterBox>
                <CounterButton onClick={handleDecrement}>-</CounterButton>
                {year}
                <CounterButton onClick={handleIncrement}>+</CounterButton>
              </CounterBox>
            </TitleBox>
            <MonthInputBox>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month, index) => (
                <React.Fragment key={index}>
                  {month}월:
                  <br />
                  <SmallInputBox
                    value={monthGoals[month - 1]} // value 추가
                    onChange={(e) => {
                      const newMonthGoals = [...monthGoals];
                      newMonthGoals[index] = e.target.value;
                      setMonthGoals(newMonthGoals);
                    }} // onChange 추가
                  />
                </React.Fragment>
              ))}
            </MonthInputBox>
          </div>
        )}
        <ButtonBox>
          <DeleteButton
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </DeleteButton>
          <SaveButton onClick={handleForSubmit}>저장</SaveButton>
        </ButtonBox>
      </ContentsBox>
    </BoxWrapper>
  );
};

export default AddGoalPage;
