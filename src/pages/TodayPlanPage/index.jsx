import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import RepeatModal from '../../components/RepeatModal';
import { useState } from 'react';
import postTodayPlan from '../../apis/schedule/postTodayPlan';
import { useNavigate } from 'react-router-dom';

const TodayPlanContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${ORIGINAL_YELLOW};
  outline: none;
  padding: 1rem;

  &:first-child {
    border: 1px solid ${ORIGINAL_YELLOW};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
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
    border-bottom: 1px solid ${ORIGINAL_YELLOW};
    border-right: 1px solid ${ORIGINAL_YELLOW};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
const DateInput = styled(InputStyled)`
  align-self: end;
  width: 50%;
  text-align: end;
  border-left: 1px solid ${ORIGINAL_YELLOW};
  border-bottom-left-radius: 1rem;
`;
const RepeatInput = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 3.5rem;
  border-bottom: 1px solid ${ORIGINAL_YELLOW};
  box-sizing: border-box;
  color: gray;
  padding-left: 1rem;
`;
const FieldSet = styled.div`
  border-bottom: 1px solid ${ORIGINAL_YELLOW};
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
  background-color: ${({ check }) => (check ? ORIGINAL_YELLOW : PASTEL_ORANGE)};
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 1rem;
  flex-shrink: 0;
`;
const RadioInput = styled.input`
  width: 3rem;
  background-color: ${ORIGINAL_YELLOW};
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
  background-color: ${ORIGINAL_YELLOW};
  color: white;
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;
`;

const TodayPlanPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [repeatDays, setRepeatDays] = useState([]);
  const [lastDate, setLastDate] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('주식');
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const interestList = [
    {
      interest: '주식',
      checked: false,
    },
    {
      interest: '어학',
      checked: true,
    },
    {
      interest: '수능',
      checked: false,
    },
    {
      interest: '재테크',
      checked: false,
    },
    {
      interest: '운동',
      checked: false,
    },
    {
      interest: '공무원',
      checked: false,
    },
    {
      interest: '공무원',
      checked: false,
    },
  ];

  const filteredList = interestList.map(({ interest }) => ({
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
      <TodayPlanContainer>
        <InputStyled
          type="text"
          placeholder="계획 제목 추가"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputStyled
          type="text"
          placeholder="세부 계획 추가"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <HalfInputWrapper>
          <HalfInput
            type="time"
            placeholder="시간 설정"
            value={alarmTime}
            onChange={(e) => setAlarmTime(e.target.value)}
          />
          <RepeatInput onClick={() => setShowModal(true)}>
            {repeatDays.length !== 0 ? repeatDays.join(', ') : '반복'}
          </RepeatInput>
        </HalfInputWrapper>
        <FieldSet>
          <Title>관심사 선택</Title>
          <RadioWrapper>
            {filteredList.map(({ interest, checked }) => (
              <Radio
                key={interest}
                check={checked}
                onClick={() => setSelectedInterest(interest)}
              >
                {interest}
              </Radio>
            ))}
          </RadioWrapper>
        </FieldSet>
        <FieldSet>
          <Title>태그 추가</Title>
          <RadioWrapper>
            {tags.map((_, idx) => (
              <RadioInput type="text" onBlur={(e) => handleInputBlur(e, idx)} />
            ))}
            <Radio onClick={() => handlePlusClick()}>+</Radio>
          </RadioWrapper>
        </FieldSet>
        <DateInput
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton onClick={handleFormSubmit}>완료</SubmitButton>
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
