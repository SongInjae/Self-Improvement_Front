import React, { useContext, useState } from 'react';
import Icon from '../../components/common/Icon';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants/color';
import { Github } from '@uiw/react-color';
import ColorContext from '../../context/SettingColor';
import logout from '../../apis/auth/logout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SettingTitle = styled(Header)`
  width: 100%;
  cursor: ${({ isPrev }) => (isPrev ? 'pointer' : 'default')};
`;

const SettingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  width: 100%;
  height: 100%;
`;

const SettingButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 60px;
  border-radius: 20px;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  font-size: 13px;
  border: 1px solid gray;
  margin-bottom: 40px;
  font-weight: bold;
`;

const ButtonText = styled.div`
  font-size: 15px;
  margin-left: 20px;
`;

const NextIcon = styled(Icon)`
  margin-right: 20px;
  cursor: pointer;
`;

const ColorChoiceIcon = styled(Icon)`
  margin-right: 18px;
  border-radius: 100%;
  border: 3px solid ${({ color }) => color};
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const ColorChoice = styled(Github)``;

const SettingPage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [hex, setHex] = useState(ORIGINAL_YELLOW);
  const [showSketch, setShowSketch] = useState(false);
  const [selectedColor, setSelectedColor] = useState(PASTEL_ORANGE);
  const { state, action } = useContext(ColorContext);

  const handlePrevClick = () => {
    navigate('/user');
  };

  const ProfieClick = () => {
    navigate('/profileedit');
  };

  const PwClick = () => {
    navigate('/pwedit');
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleColorChoiceClick = () => {
    setShowSketch(!showSketch);
  };

  const handleColorChange = (color) => {
    const selectedColor = color.hex;
    setHex(selectedColor);
    setSelectedColor(selectedColor);
    action.setColor(selectedColor);
    localStorage.setItem('mainColor', selectedColor);
  };

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Wrapper>
      <SettingTitle
        isKorean
        title="설정"
        isPrev
        onClick={handlePrevClick}
      ></SettingTitle>
      <SettingWrapper>
        <SettingButtonWrapper>
          <ButtonText>프로필 수정</ButtonText>
          <NextIcon name="arrow-right" t size="25" onClick={ProfieClick} />
        </SettingButtonWrapper>
        <SettingButtonWrapper>
          <ButtonText>비밀번호 변경</ButtonText>
          <NextIcon name="arrow-right" t size="25" onClick={PwClick} />
        </SettingButtonWrapper>
        <SettingButtonWrapper>
          <ButtonText>테마 색상 변경</ButtonText>
          <ColorChoiceIcon
            name="triangle"
            selectedColor={selectedColor} // 추가: 선택된 컬러 상태 전달
            onClick={handleColorChoiceClick}
            color={state.color}
          />
        </SettingButtonWrapper>
        <SettingButtonWrapper>
          <ButtonText>로그아웃</ButtonText>
          <NextIcon name="arrow-right" t size="25" onClick={handleLogout} />
        </SettingButtonWrapper>
        {showSketch && (
          <ColorChoice
            onChange={handleColorChange} // 업데이트: 색상 변경 핸들러 추가
          />
        )}
      </SettingWrapper>
    </Wrapper>
  );
};
export default SettingPage;
