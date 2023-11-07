import styled from '@emotion/styled';
import React from 'react';
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
const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${ORIGINAL_YELLOW};
`;

const RepeatModal = ({ showModal, setShowModal }) => {
  const days = [
    {
      value: 'monday',
      text: '월요일',
    },
    {
      value: 'tuesday',
      text: '화요일',
    },
    {
      value: 'wednesday',
      text: '수요일',
    },
    {
      value: 'thursday',
      text: '목요일',
    },
    {
      value: 'friday',
      text: '금요일',
    },
    {
      value: 'saturday',
      text: '토요일',
    },
    {
      value: 'sunday',
      text: '일요일',
    },
  ];

  const handleBackGroundClick = (e) => {
    e.stopPropagation();
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
                />
                <DayLabel htmlFor={item.value} />
                <span>{item.text}</span>
              </Days>
            ))}
          </DaysWrapper>
          <DateWrapper>
            <label htmlFor="data">종료일</label>
            <input type="date" id="date" />
          </DateWrapper>
        </ContentWrapper>
        <SubmitButton type="button" onClick={handleBackGroundClick}>
          확인
        </SubmitButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default RepeatModal;
