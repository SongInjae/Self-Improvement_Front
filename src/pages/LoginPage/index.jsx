import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { Link } from 'react-router-dom';

export const BoxWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${ORIGINAL_YELLOW};
  font-family: 'MainText';
  display: flex;
  flex-direction: column;
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-sizing: border-box;
`;
const LoginTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  font-family: 'MainLogo';
  font-size: 50px;
  width: 100%;
  text-align: center;
`;
export const LabelTmp = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  width: 60px;
  font-size: 12px;
  text-align: center;
  background-color: white;
  display: inline-block;
`;
export const InputTmp = styled.input`
  border: 1px solid ${ORIGINAL_YELLOW};
  border-radius: 5px;
  width: 260px;
  height: 45px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
`;
export const InputPwd = styled.input`
  width: 260px;
  height: 45px;
  margin-top: 15px;
  border: none;
  background-color: ${ORIGINAL_YELLOW};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  color: white;
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
  accent-color: ${ORIGINAL_YELLOW};
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid ${ORIGINAL_YELLOW};
  border-radius: 2px;
  background-clip: content-box;
  padding: 3px;
  &:checked {
    background-color: ${ORIGINAL_YELLOW};
  }
`;
export const SubmitButton = styled.button`
  width: 190px;
  height: 60px;
  background-color: ${ORIGINAL_YELLOW};
  border: none;
  border-radius: 60px;
  margin: 30px auto 20px;
  color: white;
  font-family: 'MainText';
  font-size: 15px;
  cursor: pointer;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const NoValueText = styled.div`
  color: ${PASTEL_ORANGE};
`;
export const NoValueLink = styled(Link)`
  color: ${ORIGINAL_YELLOW};
  text-decoration: none;
  margin-left: 5px;
`;

const LoginPage = () => {
  return (
    <BoxWrapper>
      <FormBox>
        <LoginTitle>WePlan</LoginTitle>
        <LabelTmp>아이디 입력</LabelTmp>
        <InputTmp type="text" id="input_id" />
        <InputPwd type="password" placeholder="비밀번호 입력" />
        <CheckBoxWrapper>
          <InputCheckBox type="checkbox" id="input_checkbox" />
          <LabelCheckBox htmlFor="input_checkbox">자동로그인</LabelCheckBox>
        </CheckBoxWrapper>
      </FormBox>
      <SubmitButton>로그인</SubmitButton>
      <TextWrapper>
        <NoValueText>회원이 아니신가요?</NoValueText>
        <NoValueLink to="/register">회원가입 하기</NoValueLink>
      </TextWrapper>
    </BoxWrapper>
  );
};

export default LoginPage;
