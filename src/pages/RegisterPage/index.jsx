import React, { useState } from 'react';

import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
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
import { useRef } from 'react';

const RegisterTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 50px;
  width: 100%;
  text-align: center;
`;
const TagContainer = styled.div`
  border: 1px solid ${ORIGINAL_YELLOW};
  padding: 10px;
  border-radius: 5px;
`;
const Tag = styled.button`
  font-family: 'MainText';
  color: white;
  border-radius: 20px;
  border: none;
  background-color: ${ORIGINAL_YELLOW};
  padding: 5px 10px;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

const RegisterPage = () => {
  const tagArr = [
    '어학',
    '경제',
    '코딩',
    '공무원',
    '수능',
    '운동',
    '창업',
    '버킷리스트',
  ];
  const [tags, setTags] = useState([]);
  const formRef = useRef();
  const { register, handleSubmit } = useForm();

  const handlePwdChange = (e) => {
    e.target.value;
  };
  const handleTagClick = (e) => {
    const newTag = e.target.textContent;

    if (tags.includes(newTag)) {
      setTags(tags.filter((tag) => tag !== newTag));
      return;
    } else if (tags.length >= 3) {
      alert('태그는 3개여야합니다.');
      return;
    } else {
      setTags([...tags, newTag]);
    }
  };

  const handleRegisterSubmit = (data) => {
    postRegister(data);
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    formRef.current.submit();
  };

  return (
    <BoxWrapper>
      <FormBox ref={formRef} onSubmit={handleSubmit(handleRegisterSubmit)}>
        <RegisterTitle>간단 회원가입</RegisterTitle>
        <LabelTmp>아이디 입력</LabelTmp>
        <InputTmp {...register('email')} type="text" id="input_id" />
        <InputPwd
          type="password"
          placeholder="비밀번호 입력"
          onChange={handlePwdChange}
        />
        <InputPwd
          {...register('password')}
          type="password"
          placeholder="비밀번호 확인"
        />
        <LabelTmp>닉네임 입력</LabelTmp>
        <InputTmp {...register('name')} type="text" id="input_nickName" />
        <LabelTmp>관심사 입력</LabelTmp>
        <TagContainer>
          {tagArr.map((tag, idx) => (
            <Tag
              key={idx}
              onClick={handleTagClick}
              style={{
                backgroundColor: tags.includes(tag)
                  ? PASTEL_ORANGE
                  : ORIGINAL_YELLOW,
              }}
            >
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </FormBox>
      <SubmitButton onClick={handleSubmitButtonClick}>
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
