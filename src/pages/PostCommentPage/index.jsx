import styled from '@emotion/styled';
import React, { useState } from 'react';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillSendFill } from 'react-icons/bs';
import { useLocation, useParams } from 'react-router-dom';
import postBoardComment from '../../apis/board/postBoardComment';

const PostCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const HeaderStyled = styled(Header)`
  border-bottom: 1px solid gray;
`;
const UserCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  height: calc(100% - 16rem);
  margin: 1rem auto;
  overflow: auto;
`;
const UserCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const UserComment = styled.div``;
const SendCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;
const SendInput = styled.input`
  flex-grow: 1;
  height: 2rem;
  padding-left: 1rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
`;
const SendButton = styled(BsFillSendFill)`
  cursor: pointer;
`;
const NoInfo = styled.div`
  color: gray;
  text-align: center;
`;

const PostCommentPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [comments, setComments] = useState(state);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const postBoardCommentAPI = async () => {
      const data = await postBoardComment({
        articleId: id,
        comment: newComment,
      });
      setComments(data);
      console.log(data);
    };
    postBoardCommentAPI();
    setNewComment('');
  };

  return (
    <PostCommentContainer>
      <HeaderStyled title="댓글" isPrev isKorean />
      <UserCommentWrapper>
        {comments.length ? (
          comments.map(
            ({ content, commentAuthor, commentAuthorProfileImageUrl }) => (
              <UserCommentItem>
                <UserInfo
                  userName={commentAuthor}
                  userProfileUrl={commentAuthorProfileImageUrl}
                />
                <UserComment>{content}</UserComment>
              </UserCommentItem>
            ),
          )
        ) : (
          <NoInfo>댓글이 없습니다.</NoInfo>
        )}
      </UserCommentWrapper>
      <SendCommentWrapper>
        <FaUserCircle />
        <SendInput
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <SendButton onClick={handleSubmitComment} />
      </SendCommentWrapper>
    </PostCommentContainer>
  );
};

export default PostCommentPage;
