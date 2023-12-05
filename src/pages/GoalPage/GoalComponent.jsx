import React from 'react';
import getAddGoal from '../../apis/Goal/getAddGoal';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW } from '../../constants/color';
import { useState } from 'react';
import { SlRocket } from 'react-icons/sl';
import { CgMoreAlt } from 'react-icons/cg';

const GoalComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 10px;
`;

const CompleteBox = styled.button`
  margin-top: -45px;
  margin-left: ${(props) => props.marginLeft || '0'}px;
  font-family: 'MainMedium';
  font-weight: bold;
  font-size: 17px;
  color: ${ORIGINAL_YELLOW};
  border-radius: 20px;
  border: 3px solid ${ORIGINAL_YELLOW};
  background-color: ${({ isClicked }) =>
    isClicked ? ORIGINAL_YELLOW : 'white'};
  width: 70px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GoalBox = styled.div`
  margin-top: 20px;
  font-family: 'MainBold';
  color: ${({ isClicked }) => (isClicked ? 'white' : 'gray')};
  border-radius: 20px;
  border: 3px solid
    ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'lightgray')};
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isClicked }) =>
    isClicked ? ORIGINAL_YELLOW : 'white'};
`;

const DetailGoal = styled.div`
  padding: 15px;
  margin-top: -1px;
  font-family: 'Roboto', sans-serif;
  color: gray;
  border-radius: 20px;
  border: 3px solid lightgray;
  width: 350px;
  height: 250px;
  box-sizing: border-box;
`;

const DetailButton = styled.button`
  margin-top: -2px;
  margin-left: 38%;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  border: 3px solid lightgray;
  width: 80px;
  padding: 4px;
  cursor: pointer;
`;

const ShortHorizontalLine = styled.hr`
  margin-top: -8px;
  margin-left: 43.5%;
  border-top: 2px solid lightgray;
  width: 40px;
`;

const Icon = styled.button`
  cursor: pointer;
  color: white;
  background: none;
  border: none;
  padding: 0;
  margin-top: -44px;
  margin-left: 300px;
  &:hover {
    color: lightgray;
  }
`;

const GoalComponent = ({
  isYearButtonClicked,
  isMonthButtonClicked,
  onDelete,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [marginLeft, setMarginLeft] = useState(0);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [goalData, setGoalData] = useState(null);
  const combinedVisibility = isYearButtonClicked && isMonthButtonClicked;

  useEffect(() => {
    const getData = async () => {
      try {
        // Call the getAddGoal function with the appropriate parameters
        const data = await getAddGoal({
          year: 2023,
          yearGoal: 'exampleGoal',
          monthGoals: 'exampleMonth',
        });
        setGoalData(data); // Set the goal data in the state
      } catch (error) {
        // Handle errors if needed
        console.error('Error fetching goal data:', error);
      }
    };

    getData(); // Call the fetchData function when selectDay changes
  }, []);

  const handleIconClick = () => {
    const shouldDelete = window.confirm('삭제하시겠습니까?');
    if (shouldDelete) {
      onDelete(); // Call the onDelete prop to delete the GoalComponent
    }
  };

  return (
    <GoalComponentBox>
      {goalData.year != null ? (
        <GoalBox isClicked={isCompleted}>
          {isCompleted ? 'C O M P L E T E ! ! !' : goalData.yearGoal}
        </GoalBox>
      ) : (
        <GoalBox isClicked={isCompleted}>
          {isCompleted
            ? 'C O M P L E T E ! ! !'
            : goalData.monthGoals[month - 1]}{' '}
          {/* Assuming monthGoals is an object with a month property */}
        </GoalBox>
      )}
      <Icon onClick={handleIconClick}>
        <CgMoreAlt size={40} />
      </Icon>
      <CompleteBox
        marginLeft={marginLeft}
        onClick={() => {
          setMarginLeft(marginLeft === 0 ? 285 : 0);
          setIsCompleted(!isCompleted);
        }}
      >
        <SlRocket size={30} />
      </CompleteBox>
      {goalData.year != null
        ? null
        : visibleDetail && (
            <DetailGoal>
              {goalData &&
                goalData.monthGoals.map((monthGoal, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && <br />}{' '}
                    {/* Add a line break except for the first item */}
                    {`${index + 1}월\n${monthGoal}`}
                  </React.Fragment>
                ))}
            </DetailGoal>
          ) && (
            <DetailButton onClick={() => setVisibleDetail(!visibleDetail)} />
          ) && <ShortHorizontalLine />}
    </GoalComponentBox>
  );
};

export default GoalComponent;
