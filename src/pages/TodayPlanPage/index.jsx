import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import RepeatModal from '../../components/RepeatModal';
import Header from '../../components/Header';
import { INTEREST_LIST } from '../../constants/interest';
import postTodayPlan from '../../apis/schedule/postTodayPlan';
import { transformDate } from '../../utils/transform';
import ColorContext from '../../context/SettingColor';

const TodayPlanContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputStyled = styled.input`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${({ color }) => color};
  outline: none;
  padding: 1rem;

  &:nth-child(2) {
    border: 1px solid ${({ color }) => color};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
const HalfInputWrapper = styled.div`
  display: flex;
`;
const HalfInput = styled(InputStyled)`
  width: 50%;
  height: 3.5rem;

  &:first-child {
    border: none;
    border-bottom: 1px solid ${({ color }) => color};
    border-right: 1px solid ${({ color }) => color};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
const DateInput = styled(InputStyled)`
  align-self: center;
  bottom: 0.5rem;
  width: 50%;
  text-align: center;
  border: none;
  font-size: 0.7rem;
  padding-top: 0;
  font-family: 'MainTitle';
`;
const RepeatInput = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 3.5rem;
  border-bottom: 1px solid ${({ color }) => color};
  box-sizing: border-box;
  color: gray;
  padding-left: 1rem;
`;
const FieldSet = styled.div`
  border-bottom: 1px solid ${({ color }) => color};
  padding: 1rem;
`;
const Title = styled.div``;
const RadioWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  overflow-x: auto;
  margin-top: 0.5rem;
`;
const Radio = styled.div`
  background-color: ${({ color }) => color};
  opacity: ${({ check }) => (check ? '1' : '0.4')};
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 1rem;
  flex-shrink: 0;
`;
const RadioInput = styled.input`
  width: 3rem;
  background-color: ${({ color }) => color};
  padding: 0 1rem;
  color: white;
  font-size: 0.8rem;
  border-radius: 1rem;
  border: none;
  outline: none;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
  align-self: center;
  margin-top: 1rem;
`;
const SubmitButton = styled.button`
  align-self: end;
  width: 5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;
`;

const TodayPlanPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(ColorContext);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [repeatDays, setRepeatDays] = useState([]);
  const [lastDate, setLastDate] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('주식');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(transformDate(new Date()));

  const filteredList = INTEREST_LIST.map(({ interest }) => ({
    interest,
    checked: interest === selectedInterest,
  }));

  const handlePlusClick = () => {
    setTags((prevState) => {
      const newState = [...prevState];
      newState.push('');
      return newState;
    });
  };

  const handleInputBlur = (e, idx) => {
    setTags((prevState) => {
      const newState = [...prevState];
      newState[idx] = e.target.value;
      return newState;
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title || !detail) {
      setError('제목과 세부사항은 필수입니다.'); //TODO Toast구현;
      return;
    }

    await postTodayPlan({
      title,
      detail,
      alarmTime,
      repeatDays,
      lastDate,
      selectedInterest,
      tags,
      date,
    });
    navigate('/main');
  };

  return (
    <>
      <Header title="TODAY PLAN" isPrev />
      <TodayPlanContainer>
        <DateInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <InputStyled
          type="text"
          placeholder="계획 제목 추가"
          value={title}
          color={state.color}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="세부 계획 추가"
          value={detail}
          color={state.color}
          onChange={(e) => setDetail(e.target.value)}
        />
        <HalfInputWrapper>
          <HalfInput
            type="time"
            placeholder="시간 설정"
            value={alarmTime}
            color={state.color}
            onChange={(e) => setAlarmTime(e.target.value)}
          />
          <RepeatInput color={state.color} onClick={() => setShowModal(true)}>
            {repeatDays.length !== 0 ? repeatDays.join(', ') : '반복'}
          </RepeatInput>
        </HalfInputWrapper>
        <FieldSet color={state.color}>
          <Title>관심사 선택</Title>
          <RadioWrapper>
            {filteredList.map(({ interest, checked }) => (
              <Radio
                key={interest}
                check={checked}
                color={state.color}
                onClick={() => setSelectedInterest(interest)}
              >
                {interest}
              </Radio>
            ))}
          </RadioWrapper>
        </FieldSet>
        <FieldSet color={state.color}>
          <Title>태그 추가</Title>
          <RadioWrapper>
            {tags.map((_, idx) => (
              <RadioInput
                key={idx}
                type="text"
                color={state.color}
                onBlur={(e) => handleInputBlur(e, idx)}
              />
            ))}
            <Radio color={state.color} onClick={() => handlePlusClick()}>
              +
            </Radio>
          </RadioWrapper>
        </FieldSet>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton color={state.color} onClick={handleFormSubmit}>
          완료
        </SubmitButton>
      </TodayPlanContainer>
      <RepeatModal
        showModal={showModal}
        setShowModal={setShowModal}
        repeatDays={repeatDays}
        setRepeatDays={setRepeatDays}
        lastDate={lastDate}
        setLastDate={setLastDate}
      />
    </>
  );
};

export default TodayPlanPage;
