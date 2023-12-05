import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Icon from '../common/Icon';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3rem;
  padding: 1rem 0;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-family: ${({ isKorean }) => (isKorean ? 'MainLight' : 'MainTitle')};
`;

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
`;

const LeftComponent = styled(Component)`
  left: 1rem;
  cursor: ${({ isPrev }) => (isPrev ? 'pointer' : 'default')};
`;

const RightComponent = styled(Component)`
  right: -8.5rem;
  cursor: ${({ isOption }) => (isOption ? 'pointer' : 'default')};
`;

const IconStyled = styled(Icon)`
  cursor: pointer;
`;

const Header = ({ title, isKorean, isPrev, isPlus, isOption, onClick }) => {
  const navigate = useNavigate();

  const handlePrevClick = () => {
    // Prev 아이콘이 클릭되었을 때 GoalPage로 이동
    navigate(-1);
  };

  const handlePlusClick = () => {
    // Plus 아이콘이 클릭되었을 때 AddGoalPage로 이동
    navigate('/addgoal');
  };

  const Plus = (
    <IconStyled name="plus-circle" size="1.3rem" onClick={handlePlusClick} />
  );
  const Option = <IconStyled name="settings" size="1.5rem" onClick={onClick} />;
  const Prev = (
    <IconStyled name="chevron-left" size="1.5rem" onClick={handlePrevClick} />
  );

  return (
    <HeaderContainer>
      <LeftComponent isPrev={isPrev}>{isPrev && Prev}</LeftComponent>
      <Title isKorean={isKorean}>{title}</Title>
      <RightComponent>
        {isPlus ? Plus : isOption ? Option : null}
      </RightComponent>
    </HeaderContainer>
  );
};
export default Header;
