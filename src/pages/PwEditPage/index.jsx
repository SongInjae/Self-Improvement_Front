import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import postRegister from '../../apis/auth/register';
import { useRef } from 'react';
import ColorContext from '../../context/SettingColor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingTitle = styled(Header)``;

const PEWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:data:image/svg+xml;base64,%20PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWFycm93LXJpZ2h0Ij48bGluZSB4MT0iNSIgeTE9IjEyIiB4Mj0iMTkiIHkyPSIxMiI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9IjEyIDUgMTkgMTIgMTIgMTkiPjwvcG9seWxpbmU+PC9zdmc+ 750px;
`;

const CurrentPW = styled.div`
  margin: 50px 0px 0px 0px;
`;

const NewPW = styled.div``;

const CheckPW = styled.div`
  margin-bottom: 30px;
`;

const PWTxt = styled.div`
  margin: 0px 0px 15px 0px;
  font-weight: bold;
`;

const CurrentPWBox = styled.input`
  display: flex;
  width: 340px;
  height: 60px;
  border-radius: 20px;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  font-size: 13px;
  border: 1px solid rgba(128, 128, 128, 0);
  margin-bottom: 45px;
  padding-left: 20px;
  outline: none;
`;
const NewPWBox = styled.input`
  display: flex;
  width: 340px;
  height: 60px;
  border-radius: 20px;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  font-size: 13px;
  border: 1px solid rgba(128, 128, 128, 0);
  padding-left: 20px;
  outline: none;
`;

const CheckPWBox = styled.input`
  display: flex;
  width: 340px;
  height: 60px;
  border-radius: 20px;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  font-size: 13px;
  border: 1px solid rgba(128, 128, 128, 0);
  padding-left: 20px;
  outline: none;
`;

const NewPwCautionTxt = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 11px;
  color: rgba(128, 128, 128, 0.8);
  margin-bottom: 45px;
`;
const CheckPwCautionTxtSame = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 11px;
  color: green;
  margin-bottom: 45px;
`;

const CheckPwCautionTxt = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 11px;
  color: red;
  margin-bottom: 45px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 425px;
  height: 100px;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.5);
  border: 2px rgba(128, 128, 128, 0.3);
  margin: 0px 0px 0px 110px;
  font-size: 17px;
  font-weight: bold;
`;

const SaveButton = styled.button`
  width: 80px;
  font-size: 17px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  border: 2px rgba(128, 128, 128, 0.3);
  margin: 0px 110px 0px 0px;
  font-weight: bold;
`;

const PwEditPage = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [validationStatus, setValidationStatus] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { state, action } = useContext(ColorContext);

  const validatePassword = () => {
    // Regular expression for password validation
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(newPassword);

    // Update validation status and return result
    setValidationStatus(isValid);
    return isValid;
  };

  const handleBlur = () => {
    validatePassword();
  };

  const handleCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
    setPasswordMatch(newPassword === e.target.value);
  };

  const navigateToAnotherPage = () => {
    navigate('/setting');
  };

  const [pwd, setPwd] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await postLogin({ email: id, password: pwd });
    navigate('/main');
  };

  return (
    <Wrapper>
      <SettingTitle isKorean title="비밀번호 변경"></SettingTitle>
      <PEWrapper>
        <CurrentPW>
          <PWTxt>현재 비밀번호</PWTxt>
          <CurrentPWBox type="password" id="NowPwTxt"></CurrentPWBox>
        </CurrentPW>
        <NewPW>
          <PWTxt>새 비밀번호</PWTxt>
          <NewPWBox
            id="NewPwTxt"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onBlur={handleBlur}
          />
          <NewPwCautionTxt
            style={{
              color: validationStatus ? 'green' : 'rgba(128, 128, 128, 0.8)',
            }}
          >
            영문/숫자/특수문자 모두 포함 최소 8글자 입니다.
          </NewPwCautionTxt>
        </NewPW>
        <CheckPW>
          <PWTxt>비밀번호 확인</PWTxt>
          <CheckPWBox
            id="CheckPwTxt"
            type="password"
            value={checkPassword}
            onChange={handleCheckPasswordChange}
          />
          {passwordMatch ? (
            <CheckPwCautionTxtSame>
              비밀번호가 일치합니다.
            </CheckPwCautionTxtSame>
          ) : (
            <CheckPwCautionTxt>비밀번호가 일치하지 않습니다.</CheckPwCautionTxt>
          )}
        </CheckPW>
        <Button>
          <CancelButton onClick={navigateToAnotherPage}>취소</CancelButton>
          <SaveButton color={state.color}>저장</SaveButton>
        </Button>
      </PEWrapper>
    </Wrapper>
  );
};

export default PwEditPage;
