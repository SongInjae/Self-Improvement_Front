import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import RepeatModal from '../../components/RepeatModal';
import { useState } from 'react';

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
  box-sizing: border-box;

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
const RepeatInput = styled.div`
  width: 50%;
  height: 3.5rem;
  border-bottom: 1px solid ${ORIGINAL_YELLOW};
  box-sizing: border-box;
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
const Radio = styled.div<{ check?: boolean }>`
  background-color: ${({ check }) => (check ? ORIGINAL_YELLOW : PASTEL_ORANGE)};
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  border-radius: 1rem;
  flex-shrink: 0;
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
  const [showModal, setShowModal] = useState(false);
  const interest_list = [
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
      checked: true,
    },
    {
      interest: '운동',
      checked: true,
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
  return (
    <>
      <TodayPlanContainer>
        <InputStyled type="text" placeholder="계획 제목 추가" />
        <InputStyled type="text" placeholder="세부 계획 추가" />
        <HalfInputWrapper>
          <HalfInput type="time" placeholder="시간 설정" />
          <RepeatInput onClick={() => setShowModal(true)} />
        </HalfInputWrapper>
        <FieldSet>
          <Title>관심사 선택</Title>
          <RadioWrapper>
            {interest_list.map((interest) => (
              <Radio key={interest.interest} check={interest.checked}>
                {interest.interest}
              </Radio>
            ))}
          </RadioWrapper>
        </FieldSet>
        <FieldSet>
          <Title>태그 추가</Title>
          <RadioWrapper>
            <Radio>+</Radio>
          </RadioWrapper>
        </FieldSet>
        <SubmitButton type="submit">완료</SubmitButton>
      </TodayPlanContainer>
      <RepeatModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default TodayPlanPage;
