import React, { useContext, useState } from 'react';
import Icon from '../../components/common/Icon';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import ColorContext from '../../context/SettingColor';
import setProfilePicUrl from '../PostUploadPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: blue;
`;

const PageText = styled(Header)``;

const Setting = styled.img`
  width: 32px;
  height: 32px;
  margin: 10px 0px 0px 350px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  border-radius: 30px 0px 30px 0px;
  width: 90%;
  height: 200px;
  border: 3px solid rgba(128, 128, 128, 1);
  margin-top: 10px;
  background-color: rgba(128, 128, 128, 0.2);
`;

const ProfileSet1 = styled.div`
  flex-direction: column;
  display: flex;
  margin: 30px 0px 0px 0px;
  align-items: center;
  width: 150px;
  height: 200px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px 20px;
  border-radius: 50%;
  border: 6px solid white;
`;

const Interest = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin: 5px 0px 5px 0px;
  align-items: center;
`;

const IntText = styled.span`
  width: 60px;
  height: 40px;
  border-radius: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 10px;
  border: 2px solid rgba(0, 0, 0, 0.5);
`;

const ProfileSet2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 5px;
`;

const NickName = styled.div`
  display: flex;
  margin: 10px 7%;
  align-items: center;
  border-radius: 30px;
  width: 100px;
  height: 35px;
  justify-content: center;
  font-size: 18px;
  margin-left: 15px;
  background-color: white;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 180px;
  height: 55px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

const Following = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
`;

const Follower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
`;

const FolText = styled.div`
  margin-top: 4px;
`;

const FolNum = styled.div``;

const Introduce = styled.div`
  display: flex;
  width: 380px;
  height: 28px;
  border-radius: 30px;
  align-items: center;
  background-color: ${ORIGINAL_YELLOW};
  margin: 2px 0px 0px 22.5px;
  font-size: 13px;
  ::before {
    content: 'ㅤㅤ';
  }
`;

const ProBr = styled.div`
  &::before {
    content: '';
    margin: 20px 0px 0px 0px;
    display: block;
    height: 2px;
    background-color: ${ORIGINAL_YELLOW};
  }
`;

const Post = styled.div`
  position: relative;
`;

const SelectPost = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(128, 128, 128, 0.3);
  width: 100%;
  height: 45px;
  justify-content: space-between; /* 양 옆으로 나누기 */
`;

const PlanButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const GoalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const PlanIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  margin: 0px 0px 0px 94px;
`;
const GoalIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  margin: 0px 98px 0px 0px;
`;

const Btm = styled.div`
  position: fixed;
  bottom: 0;
  width: 425px;
  height: 83px;
  background-color: ${ORIGINAL_YELLOW};
`;

const UserPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 425px;
  height: 600px;
  background-color: rgba(128, 128, 128, 0.08);
  flex-direction: column;
`;

const EmptyPost = styled(Icon)`
  opacity: 0.2;
`;

const EmptyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 20px;
  opacity: 0.2;
`;

const WriteButtonPost = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 100%;
  padding: 15px;
  z-index: 0;
  position: absolute;
  bottom: 50px; /* 조정 가능한 값 */
  right: 20px; /* 조정 가능한 값 */
`;

const FolListPage = styled.div`
  width: 425px;
  height: 800px;
  background-color: white;
  right: 237.5px;
  top: 33px;
  opacity: 0.9;
  z-index: 1;
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FLPText = styled.div`
  margin: 30px 0px 0px 0px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const FLPBr = styled.div`
  &::before {
    content: '';
    margin: 10px 0px 10px 0px;
    height: 2px;
    width: 425px;
    background-color: rgba(128, 128, 128, 0.5);
    display: flex;
  }
`;

const FLPTopBar = styled.div`
  &::before {
    content: '';
    margin: 10px 0px 10px 0px;
    height: 5px;
    width: 50px;
    border-radius: 20px;
    background-color: rgba(128, 128, 128, 0.5);
    display: flex;
  }
`;

const FLPList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 425px;
  max-height: 650px;
  background-color: white;
`;

const FLPUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  width: 380px;
  height: 90px;
  margin: 10px;
  border-radius: 20px;
  flex-shrink: 0;
`;

const FLPProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 0px 0px 0px 20px;
`;

const FLPNickName = styled.div`
  margin: 0px 0px 0px 17px;
  font-size: 18px;
`;

const FLPFollowing = styled.div`
  margin: 0px 30px 0px 0px;
  width: 70px;
  height: 35px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: auto;
`;

const FLPFollower = styled.div`
  margin: 0px 30px 0px 0px;
  width: 70px;
  height: 35px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: auto;
`;

const UserPage = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(ColorContext);

  const navigateToAnotherPage = () => {
    navigate('/postupload'); // 이동할 페이지의 경로를 지정
  };

  const handleOptionClick = () => {
    navigate('/setting');
  };

  return (
    <Wrapper>
      <PageText
        isOption={true}
        title="마이 페이지"
        onClick={handleOptionClick}
      ></PageText>
      <ProfileWrapper>
        <ProfileSet1>
          <ProfileImg src={'src/assets/image/profileimg.png'}></ProfileImg>
          <NickName>jxxhyo22</NickName>
        </ProfileSet1>
        <ProfileSet2>
          <Follow>
            <Following>
              <FolNum>20</FolNum>
              <FolText>팔로잉</FolText>
            </Following>
            <Follower>
              <FolNum>20</FolNum>
              <FolText>팔로워</FolText>
            </Follower>
          </Follow>
          <Interest>
            <IntText>코딩</IntText>
            <IntText>토익</IntText>
            <IntText>헬스</IntText>
          </Interest>
        </ProfileSet2>
      </ProfileWrapper>
      <ProBr />
      <Post>
        <SelectPost>
          <PlanButton>
            <PlanIcon name="grid" size="20"></PlanIcon>
          </PlanButton>
          <GoalButton>
            <GoalIcon name="calendar" size="20"></GoalIcon>
          </GoalButton>
        </SelectPost>
        <UserPost>
          <EmptyPost name="camera" size="70"></EmptyPost>
          <EmptyText>게시물 없음</EmptyText>
          <WriteButtonPost
            onClick={navigateToAnotherPage}
            name="plus"
            size="40"
          ></WriteButtonPost>
        </UserPost>
      </Post>
      <FolListPage>
        <FLPTopBar></FLPTopBar>
        <FLPText>팔로잉 목록</FLPText>
        <FLPBr></FLPBr>
        <FLPList>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>songinjae</FLPNickName>
            <FLPFollowing color={state.color}>팔로잉</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>kimhakyoung</FLPNickName>
            <FLPFollowing color={state.color}>팔로우</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>kimhakyoung</FLPNickName>
            <FLPFollowing color={state.color}>팔로잉</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>hellokr</FLPNickName>
            <FLPFollowing color={state.color}>팔로잉</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>ipohe</FLPNickName>
            <FLPFollowing color={state.color}>팔로잉</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>ipohe</FLPNickName>
            <FLPFollowing color={state.color}>팔로잉</FLPFollowing>
          </FLPUser>
          <FLPUser>
            <FLPProfile src="src/assets/image/profileimg.png"></FLPProfile>
            <FLPNickName>ipohe</FLPNickName>
            <FLPFollower color={state.color}>팔로우</FLPFollower>
          </FLPUser>
        </FLPList>
      </FolListPage>

      <Btm></Btm>
    </Wrapper>
  );
};

export default UserPage;
