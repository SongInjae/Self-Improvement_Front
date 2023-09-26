import React from 'react';
import styled from '@emotion/styled';
import { original_yellow, pastel_orange } from '../../constants';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${original_yellow};
  font-family: 'MainText';
  display: flex;
  flex-direction: column;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-sizing: border-box;
`;
const LoginTitle = styled.div`
  margin-top: 35px;
  margin-bottom: 80px;
  font-family: 'MainLogo';
  font-size: 50px;
  width: 100%;
  text-align: center;
`;
const LabelId = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  width: 80px;
  text-align: center;
  background-color: white;
  display: inline-block;
`;
const InputId = styled.input`
  border: 1px solid ${original_yellow};
  border-radius: 5px;
  width: 260px;
  height: 45px;
  padding: 10px;
  box-sizing: border-box;
`;
const InputPwd = styled.input`
  width: 260px;
  height: 45px;
  margin-top: 15px;
  border: none;
  background-color: ${original_yellow};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &::placeholder {
    font-family: 'MainText';
    color: white;
  }
`;
const CheckBoxWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;
const LabelCheckBox = styled.label`
  margin-left: 5px;
`;
const InputCheckBox = styled.input`
  accent-color: ${original_yellow};
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${original_yellow};
  border-radius: 2px;
  background-clip: content-box;
  padding: 3px;
  &:checked {
    background-color: ${original_yellow};
  }
`;
const LoginButton = styled.button`
  width: 190px;
  height: 60px;
  background-color: ${original_yellow};
  border: none;
  border-radius: 60px;
  margin: 40px auto 15px;
  color: white;
  font-family: 'MainText';
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const NoMemberText = styled.div`
  color: ${pastel_orange};
`;
const SignUpLink = styled(Link)`
  color: ${original_yellow};
  text-decoration: none;
  margin-left: 5px;
`;

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <LoginTitle>WePlan</LoginTitle>
        <LabelId>아이디 입력</LabelId>
        <InputId type="text" id="input_id" />
        <InputPwd type="password" placeholder="비밀번호 입력" />
        <CheckBoxWrapper>
          <InputCheckBox type="checkbox" id="input_checkbox" />
          <LabelCheckBox for="input_checkbox">자동로그인</LabelCheckBox>
        </CheckBoxWrapper>
      </LoginBox>
      <LoginButton>로그인</LoginButton>
      <TextWrapper>
        <NoMemberText>회원이 아니신가요?</NoMemberText>
        <SignUpLink>회원가입 하기</SignUpLink>
      </TextWrapper>
    </LoginWrapper>
  );
};

export default LoginPage;
