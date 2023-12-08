import styled from '@emotion/styled';
import React from 'react';
import Drop from '../../assets/image/dropdownArrow.svg';
import { FaFileImage } from 'react-icons/fa6';

const PostBoardContainer = styled.div`
  clear: right;
  width: 100%;
  height: calc(100% - 5rem);
`;
const PostWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
`;
const PostImg = styled.img`
  width: 100%;
  height: 10rem;
`;
const DefaultImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
`;

const PostBoard = () => {
  return (
    <PostBoardContainer>
      <PostWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
        <DefaultImageWrapper>
          <FaFileImage size={'40%'} />
        </DefaultImageWrapper>
      </PostWrapper>
    </PostBoardContainer>
  );
};

export default PostBoard;
