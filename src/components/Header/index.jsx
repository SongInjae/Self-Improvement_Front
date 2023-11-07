import React from 'react';
import styled from '@emotion/styled';
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
`;
const RightComponent = styled(Component)`
  right: 1rem;
`;
const IconStyled = styled(Icon)`
  cursor: pointer;
`;

const Header = ({ title, isKorean, isPrev, isPlus, isOption }) => {
  const Plus = <IconStyled name="plus-circle" size="1.3rem" />;
  const Option = <IconStyled name="settings" size="1.3rem" />;
  const Prev = <IconStyled name="chevron-left" size="1.5rem" />;

  return (
    <HeaderContainer>
      <LeftComponent>{isPrev && Prev}</LeftComponent>
      <Title isKorean={isKorean}>{title}</Title>
      <RightComponent>
        {isPlus ? Plus : isOption ? Option : null}
      </RightComponent>
    </HeaderContainer>
  );
};

export default Header;
