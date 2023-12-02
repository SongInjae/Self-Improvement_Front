import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ORIGINAL_YELLOW } from '../../constants';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ showModal }) => (showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 2rem;
  background-color: white;
  border-radius: 2rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Days = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const DayInput = styled.input`
  display: none;

  &:checked + label::after {
    content: '✔';
    font-size: 0.5rem;
    color: ${ORIGINAL_YELLOW};
  }
`;
const DayLabel = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  background-color: #f3f3f3;
  border-radius: 0.25rem;
  box-sizing: border-box;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
`;
const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${ORIGINAL_YELLOW};
`;

const RepeatModal = ({
  showModal,
  setShowModal,
  repeatDays,
  setRepeatDays,
  lastDate,
  setLastDate,
}) => {
  const [error, setError] = useState('');
  const days = [
    {
      value: '월',
      text: '월요일',
    },
    {
      value: '화',
      text: '화요일',
    },
    {
      value: '수',
      text: '수요일',
    },
    {
      value: '목',
      text: '목요일',
    },
    {
      value: '금',
      text: '금요일',
    },
    {
      value: '토',
      text: '토요일',
    },
    {
      value: '일',
      text: '일요일',
    },
  ];

  const handleCheckBoxChange = (e) => {
    setRepeatDays((prevState) => {
      const newState = [...prevState];
      if (newState.includes(e.target.value)) {
        return newState.filter((option) => option !== e.target.value);
      } else {
        newState.push(e.target.value);
        return newState;
      }
    });
  };

  const handleBackGroundClick = (e) => {
    e.stopPropagation();
    if (repeatDays.length === 0 && lastDate !== '') {
      setError('모두 선택하거나, 모두 선택하지 않아야합니다.');
      return;
    }
    if (repeatDays.length !== 0 && lastDate === '') {
      setError('모두 선택하거나, 모두 선택하지 않아야합니다.');
      return;
    }
    setShowModal(false);
  };

  return (
    <ModalBackground showModal={showModal}>
      <ModalContainer>
        <ContentWrapper>
          <DaysWrapper>
            {days.map((item) => (
              <Days key={item.value}>
                <DayInput
                  type="checkbox"
                  name="day"
                  value={item.value}
                  id={item.value}
                  onChange={handleCheckBoxChange}
                />
                <DayLabel htmlFor={item.value} />
                <span>{item.text}</span>
              </Days>
            ))}
          </DaysWrapper>
          <DateWrapper>
            <label htmlFor="data">종료일</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setLastDate(e.target.value)}
            />
          </DateWrapper>
        </ContentWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="button" onClick={handleBackGroundClick}>
          확인
        </SubmitButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default RepeatModal;
