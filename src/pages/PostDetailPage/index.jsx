import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import UserInfo from '../../components/UserInfo';
import Header from '../../components/Header';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import getBoardDetail from '../../apis/board/getBoardDetail';

const PostDetailContainer = styled.div``;
const HeaderStyled = styled(Header)`
  border-bottom: 1px solid gray;
`;
const UserInfoStyled = styled(UserInfo)`
  padding: 1rem;
`;
const PostImg = styled.img`
  width: 100%;
  height: 30rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;
const PostSnsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0 1rem;
`;
const PostLikeWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const PostLikeText = styled.div``;
const PostCommentWrapper = styled.div``;
const PostContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0 1rem;
`;
const PostNickname = styled.div`
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'MainMedium';
`;
const PostContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostDetailPage = () => {
  const [post, setPost] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getBoardDetailAPI = async () => {
      const data = await getBoardDetail({ articleId: id });
      setPost(data);
    };

    getBoardDetailAPI();
  }, []);

  return (
    <PostDetailContainer>
      <HeaderStyled title="피드" isPrev isKorean />
      <UserInfoStyled />
      <PostImg src={post?.imageUrl} />
      <PostSnsWrapper>
        <PostLikeWrapper>
          <FaRegHeart />
          <PostLikeText>{post?.likeCount}</PostLikeText>
        </PostLikeWrapper>
        <PostCommentWrapper>
          <FaRegComment />
        </PostCommentWrapper>
      </PostSnsWrapper>
      <PostContentWrapper>
        <PostNickname>인재dk1234</PostNickname>
        <PostContent>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </PostContent>
      </PostContentWrapper>
    </PostDetailContainer>
  );
};

export default PostDetailPage;
