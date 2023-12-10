import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import UserInfo from '../../components/UserInfo';
import Header from '../../components/Header';
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import getBoardDetail from '../../apis/board/getBoardDetail';
import postBoardLike from '../../apis/board/postBoardLike';

const PostDetailContainer = styled.div`
  height: calc(100% - 5rem);
  overflow: auto;
`;
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
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0 1rem;
`;
const PostSnsItemWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`;
const PostSnsText = styled.div``;
const PostContentWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 0 1rem;
`;
const PostNickname = styled.div`
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'MainMedium';
`;
const PostTag = styled.div`
  margin-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const PostContent = styled.div`
  padding: 0 1rem;
  white-space: pre-wrap;
`;

const PostDetailPage = () => {
  const [post, setPost] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBoardDetailAPI = async () => {
      const data = await getBoardDetail({ articleId: id });
      setPost(data);
    };

    getBoardDetailAPI();
  }, []);

  const handleLikeClick = () => {
    postBoardLike({ articleId: id });
    setPost((prevState) => {
      const newState = Object.assign({}, prevState);
      if (prevState.isLiked === false) newState.likeCount++;
      else newState.likeCount--;
      newState.isLiked = !prevState.isLiked;
      return newState;
    });
  };

  return (
    <PostDetailContainer>
      <HeaderStyled title="피드" isPrev isKorean />
      <UserInfoStyled
        userId={post?.authorId}
        userName={post?.author}
        userProfileUrl={post?.authorProfileImageUrl}
      />
      <PostImg src={post?.imageUrl} />
      <PostSnsWrapper>
        <PostSnsItemWrapper onClick={handleLikeClick}>
          {post.isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
          <PostSnsText>{post?.likeCount}</PostSnsText>
        </PostSnsItemWrapper>
        <PostSnsItemWrapper
          onClick={() => navigate('comment', { state: post?.comments })}
        >
          <FaRegComment />
          <PostSnsText>{post?.comments?.length}</PostSnsText>
        </PostSnsItemWrapper>
      </PostSnsWrapper>
      <PostContentWrapper>
        <PostNickname>{post?.author}</PostNickname>
        <PostTag>{post?.tag?.map((tag) => `#${tag} `)}</PostTag>
      </PostContentWrapper>
      <PostContent>{post?.content}</PostContent>
    </PostDetailContainer>
  );
};

export default PostDetailPage;
