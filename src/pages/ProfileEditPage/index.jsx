import React, { useState, useContext, useEffect } from 'react';
import Icon from '../../components/common/Icon';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import putProfileEdit from '../../apis/profileedit/putprofileedit';
import getProfileEdit from '../../apis/profileedit/getprofileedit';
import ColorContext from '../../context/SettingColor';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SettingTitle = styled(Header)``;

const Picture = styled.div`
  display: flex;
  margin: 20px 0px 0px 0px;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const ProfilePic = styled.img`
  border-radius: 100%;
  width: 170px;
  height: 170px;
  border: 4px solid rgba(128, 128, 128, 0.2);
`;

const AddPicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 7px solid ${({ color }) => color};
  border-radius: 100%;
  position: absolute;
  top: 125px;
  right: -5px;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 380px;
  height: 360px;
  border-radius: 15px;

  margin-bottom: 30px;
  background-color: rgba(128, 128, 128, 0.2);
`;

const Nickname = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 150px;
`;

const NmSet = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 50px;
`;

const NmText = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  background-color: white;
  width: 60px;
  height: 30px;
`;

const NmInput = styled.input`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  width: 200px;
  height: 45px;
  outline: none;
  padding-left: 10px;
`;

const NmCheck = styled.button`
  width: 90px;
  border-radius: 10px;
  height: 50px;
  margin: 10px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  font-weight: bold;
`;

const NmLimit = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 11px;
  color: rgba(128, 128, 128, 0.8);
`;

const NmOverlap = styled.div`
  margin-top: 10px;
  margin-left: 2px;
  font-size: 11px;
  color: red;
`;

const Interest = styled.div`
  width: 330px;
  height: 100px;
  margin-top: 20px;
`;

const IntText = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  width: 100px;
  height: 30px;
`;

const IntSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 65px;
  border-radius: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 10px; /* 스크롤바 너비 */
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.02); /* 스크롤바 트랙 배경색 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.2); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 모양 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ color }) => color}; /* 스크롤바에 호버될 때의 색상 */
  }
`;

const Introduction = styled.div`
  display: flex;
  width: 330px;
  height: 100px;
  flex-direction: column;
  margin-top: 30px;
`;

const IntroText = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 90px;
  background-color: white;
  height: 30px;
`;

const IntroInput = styled.input`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  width: 315px;
  height: 40px;
  outline: none;
  padding-left: 10px;
`;

const Button = styled.div`
  display: flex;
`;

const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.2);
  border: 2px rgba(128, 128, 128, 0.3);
  margin: 0px 40px 0px 0px;
  font-weight: bold;
  cursor: pointer;
`;

const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  border: 2px rgba(128, 128, 128, 0.3);
  font-weight: bold;
  cursor: pointer;
`;

const InputFile = styled.input`
  display: none;
`;

const ProfileEditPage = () => {
  const { state } = useContext(ColorContext);
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [nickname, setNickname] = useState('');
  const [intro, setIntro] = useState('');
  const [imageTmp, setImageTmp] = useState('');

  useEffect(() => {
    const getprofile = async () => {
      const data = await getProfileEdit();
      setProfilePicUrl(data.myProfileImageUrl);
      setImageTmp(data.myProfileImageUrl);
      setNickname(data.memberName);
      setIntro(data.selfIntroduction);
    };
    getprofile();
  }, []);

  useEffect(() => {
    const getprofile = getProfileEdit();
    console.log(getprofile);
    setProfilePicUrl(getprofile.myProfileImageURL);
    setNickname(getprofile.memberName);
    setIntro(getprofile.selfIntroduction);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicUrl(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setImageTmp(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const navigateToAnotherPage = () => {
    navigate('/setting'); // 이동할 페이지의 경로를 지정
  };

  const handleNicknameChange = (event) => {
    const validInput = event.target.value.replace(
      /[^a-zA-Z0-9ㄱ-ㅎ가-힣]/g,
      '',
    );

    setNickname(validInput);
  };

  const handleIntroChange = (event) => {
    const validInput = event.target.value;
    setIntro(validInput);
  };

  const [isNicknameOverlapped, setIsNicknameOverlapped] = useState(false);

  const handleNicknameCheck = async () => {
    try {
      const response = await putProfileEdit({ memberName: nickname });
      if (response.status === 200) {
        setIsNicknameOverlapped(false);
      } else {
        setIsNicknameOverlapped(true);
      }
    } catch (error) {
      console.error('Error checking nickname:', error);
    }
  };

  const handleSave = async () => {
    try {
      await putProfileEdit({
        memberName: nickname,
        profileImageUrl: profilePicUrl,
        selfIntroduction: intro,
      });

      navigate('/setting');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <Wrapper>
      <SettingTitle isKorean title="프로필 수정"></SettingTitle>
      <Picture>
        <ProfilePic src={imageTmp}></ProfilePic>
        <AddPicButton color={state.color}>
          <label htmlFor="fileUpload">
            <Icon name="plus" size="30"></Icon>
          </label>
          <InputFile
            type="file"
            id="fileUpload"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </AddPicButton>
      </Picture>
      <EditWrapper>
        <Nickname>
          <NmText>닉네임</NmText>
          <NmSet>
            <NmInput
              type="text"
              maxLength={10}
              value={nickname}
              onChange={handleNicknameChange}
            />
            <NmCheck color={state.color} onClick={handleNicknameCheck}>
              중복 확인
            </NmCheck>
          </NmSet>
          <NmLimit>한글/영어/숫자로 이루어진 최대 10글자만 가능합니다.</NmLimit>
          {isNicknameOverlapped && <NmOverlap>닉네임이 중복 됩니다.</NmOverlap>}
        </Nickname>

        <Introduction>
          <IntroText>한 줄 소개</IntroText>
          <IntroInput
            type="text"
            maxLength={20}
            onChange={handleIntroChange}
            value={intro}
          ></IntroInput>
        </Introduction>
      </EditWrapper>
      <Button>
        <CancelButton onClick={navigateToAnotherPage}>취소</CancelButton>
        <SaveButton color={state.color} onClick={() => handleSave()}>
          저장
        </SaveButton>
      </Button>
    </Wrapper>
  );
};

export default ProfileEditPage;
