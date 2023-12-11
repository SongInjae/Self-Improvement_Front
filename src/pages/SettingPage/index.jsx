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

const PublicPrivate = styled(SettingButtonWrapper)`
  margin-top: 40px;
`;

const Logout = styled.button`
  display: flex;
  width: 20.5rem;
  height: 3.5rem;
  border-radius: 20px;
  align-items: center;
  background-color: ${({ color }) => color};
  font-size: 13px;
  border: 0px solid gray;
  margin: 40px 0px 80px 0px;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

const LogoutButton = styled.div`
  font-size: 16px;
`;

const ButtonText = styled.div`
  font-size: 15px;
  margin-left: 20px;
`;

const PPButton = styled.label`
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 30px;
  margin-right: 20px;
`;

const ToggleSwitch = styled.div`
  width: 50px;
  height: 30px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: ${({ isActive }) => (isActive ? 'calc(100% - 27px)' : '5px')};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${({ isActive, color }) => (isActive ? '#CCCCCC' : color)};
  transition: all 0.2s ease-in;
`;
const ToggleInput = styled.input`
  display: none;
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/login');
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
        <PublicPrivate color={state.color}>
          <ButtonText>공개 / 비공개</ButtonText>
          <PPButton>
            <ToggleInput type="checkbox" id="toggle" onClick={handleToggle} />
            <ToggleSwitch htmlFor="toggle" className="toggleSwitch">
              <ToggleButton
                color={state.color}
                isActive={isActive}
                className="toggleButton"
              />
            </ToggleSwitch>
          </PPButton>
        </PublicPrivate>
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

/*        <PublicPrivate color={state.color}>
          <ButtonText>공개 / 비공개</ButtonText>
          <PPButton>
            <ToggleInput type="checkbox" id="toggle" onClick={handleToggle} />
            <ToggleSwitch htmlFor="toggle" className="toggleSwitch">
              <ToggleButton
                color={state.color}
                isActive={isActive}
                className="toggleButton"
              />
            </ToggleSwitch>
          </PPButton>
        </PublicPrivate> */
