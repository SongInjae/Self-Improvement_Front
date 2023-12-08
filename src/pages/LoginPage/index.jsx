import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants/color';
import { Link, useNavigate } from 'react-router-dom';
import postLogin from '../../apis/auth/login';

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${ORIGINAL_YELLOW};
  font-family: 'MainText';
`;
export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem;
  border: 1px solid;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;
const LoginTitle = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: 'MainLogo';
  font-size: 50px;
  text-align: center;
`;
export const LabelTmp = styled.label`
  display: inline-block;
  position: relative;
  top: 0.5rem;
  right: 5.5rem;
  width: 3.5rem;
  font-size: 0.7rem;
  text-align: center;
  background-color: white;
`;
export const InputTmp = styled.input`
  width: 16rem;
  height: 3rem;
  margin: 0 0.5rem;
  padding: 1rem;
  border: 1px solid ${ORIGINAL_YELLOW};
  border-radius: 0.5rem;
  box-sizing: border-box;
  outline: none;
  font-family: 'MainText';
  color: ${ORIGINAL_YELLOW};
`;
export const InputPwd = styled(InputTmp)`
  margin-top: 1rem;
  border: none;
  color: white;
  background-color: ${ORIGINAL_YELLOW};
  box-sizing: border-box;

  &::placeholder {
    font-family: 'MainText';
    color: white;
  }
`;
const CheckBoxWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const LabelCheckBox = styled.label`
  margin-left: 0.25rem;
`;
const InputCheckBox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${ORIGINAL_YELLOW};
  appearance: none;
  border: 2px solid ${ORIGINAL_YELLOW};
  border-radius: 2px;
  background-clip: content-box;
  padding: 3px;

  &:checked {
    background-color: ${ORIGINAL_YELLOW};
  }
`;
export const SubmitButton = styled.button`
  width: 12rem;
  height: 4rem;
  margin: 2rem auto;
  background-color: ${ORIGINAL_YELLOW};
  border: none;
  border-radius: 5rem;
  color: white;
  font-family: 'MainText';
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
  margin-left: 0.25rem;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await postLogin({ email: id, password: pwd });
    navigate('/main');
  };

  return (
    <BoxWrapper>
      <FormBox>
        <LoginTitle>WePlan</LoginTitle>
        <LabelTmp>아이디 입력</LabelTmp>
        <InputTmp
          type="text"
          id="input_id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputPwd
          type="password"
          placeholder="비밀번호 입력"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <CheckBoxWrapper>
          <InputCheckBox type="checkbox" id="input_checkbox" />
          <LabelCheckBox htmlFor="input_checkbox">자동로그인</LabelCheckBox>
        </CheckBoxWrapper>
      </FormBox>
      <SubmitButton onClick={handleFormSubmit}>로그인</SubmitButton>
      <TextWrapper>
        <NoValueText>회원이 아니신가요?</NoValueText>
        <NoValueLink to="/register">회원가입 하기</NoValueLink>
      </TextWrapper>
    </BoxWrapper>
  );
};

export default LoginPage;
