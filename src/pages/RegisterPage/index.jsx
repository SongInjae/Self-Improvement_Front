import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  BoxWrapper,
  FormBox,
  LabelTmp,
  InputTmp,
  InputPwd,
  SubmitButton,
  TextWrapper,
  NoValueText,
  NoValueLink,
} from '../LoginPage';
import postRegister from '../../apis/auth/register';
import { useNavigate } from 'react-router-dom';
import {
  validateName,
  validatePwdCheck,
  validatePwd,
} from '../../utils/validate';
import { AUTH } from '../../constants/errorMessage';

const RegisterTitle = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-align: center;
`;

const ErrorMessage = styled.p`
  align-self: flex-start;
  margin-top: 0.5rem;
  color: red;
  font-size: 0.5rem;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [nickName, setNickName] = useState('');

  const [pwdError, setPwdError] = useState('');
  const [pwdCheckError, setPwdCheckError] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const checkValidation = async () => {
    if (!validatePwd(pwd)) {
      setPwdError(AUTH.PASSWORD);
    } else {
      setPwdError('');
    }

    if (!validateName(nickName)) {
      setNickNameError(AUTH.NINK_NAME);
    } else {
      setNickNameError('');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await checkValidation();
    if (pwdError || pwdCheckError || nickNameError) return;

    try {
      await postRegister({ email: id, password: pwd, name: nickName });
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BoxWrapper>
      <FormBox>
        <RegisterTitle>간단 회원가입</RegisterTitle>
        <LabelTmp htmlFor="input_id">아이디 입력</LabelTmp>
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
        {pwdError && <ErrorMessage>{pwdError}</ErrorMessage>}
        <InputPwd
          type="password"
          placeholder="비밀번호 확인"
          onChange={(e) =>
            setPwdCheckError(validatePwdCheck(e.target.value, pwd))
          }
        />
        {pwdCheckError && <ErrorMessage>{pwdCheckError}</ErrorMessage>}
        <LabelTmp htmlFor="input_nickName">닉네임 입력</LabelTmp>
        <InputTmp
          type="text"
          id="input_nickName"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        {nickNameError && <ErrorMessage>{nickNameError}</ErrorMessage>}
      </FormBox>
      <SubmitButton
        disabled={!Boolean(id && pwd && nickName)}
        onClick={handleFormSubmit}
      >
        회원가입 하기
      </SubmitButton>
      <TextWrapper>
        <NoValueText>이미 회원이신가요?</NoValueText>
        <NoValueLink to="/login">로그인</NoValueLink>
      </TextWrapper>
    </BoxWrapper>
  );
};

export default RegisterPage;
