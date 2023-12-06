import React, { useState, useRef, useContext } from 'react';
import Icon from '../../components/common/Icon';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants/color';
import ColorContext from '../../context/SettingColor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;S
`;

const SettingTitle = styled(Header)``;

const PEWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  margin: 80px 0px 0px 35px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pic = styled.div`
  width: 330px;
  height: 200px;
`;

const Check = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.3);
  border: 2px rgba(128, 128, 128, 0.3);
  margin: 0px 0px 0px 280px;
`;

const PostText = styled.div`
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  font-size: 18px;
`;

const PostBox = styled.textarea`
  width: 330px;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.1);
  font-size: 16px;
  border: 3px solid rgba(128, 128, 128, 0.6);
  margin: 0px 0px 50px 0px;
  vertical-align: top;
  resize: none;
  outline: none;
`;

const Tag = styled.div`
  width: 330px;
  height: 200px;
  margin-bottom: 40px;
`;

const TagText = styled.div`
  margin: 0px 0px 15px 0px;
  font-weight: bold;
  font-size: 18px;
`;

const PicText = styled.div`
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  font-size: 18px;
`;

const Sel_Pic = styled.div`
  display: flex;
  width: 330px;
  height: 90px;
  flex-direction: row;
  margin-top: 10px;
`;

const PicBox = styled.div`
  display: flex;
  width: 85px;
  height: 85px;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  border: 3px solid rgba(128, 128, 128, 0.6);
  margin: 0px 20px 40px 0px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  position: relative;
`;

const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  position: absolute;
  top: 3px;
  right: 3px;
`;
const CautionTxt = styled.div``;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 425px;
  height: 100px;
`;

const CancelButton = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.5);
  border: 2px rgba(128, 128, 128, 0.3);
  font-size: 17px;
  font-weight: bold;
`;

const SaveButton = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  border: 2px rgba(128, 128, 128, 0.3);
  font-size: 17px;
  font-weight: bold;
  margin-left: 30px;
`;

const AddPicButton = styled.div``;

const InputFile = styled.input``;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  padding: 0 10px;
  border: 2px solid rgba(128, 128, 128, 0.3);
  border-radius: 10px;
  width: 330px;
  height: 70px;
  overscroll-x: auto;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: ${ORIGINAL_YELLOW};
  border-radius: 5px;
  color: white;
  font-size: 15px;
  width: auto;
  min-width: 50px;
  height: 30px;
`;

const Text = styled.span``;

const TagButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 100%;
  border: none;
  margin-left: 5px;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  height: 30px;
`;

const PostUploadPage = () => {
  const navigate = useNavigate();
  const { state, action } = useContext(ColorContext);

  const navigateToAnotherPage = () => {
    navigate('/user'); // 이동할 페이지의 경로를 지정
  };

  const [pics, setPics] = useState([]);

  const addPic = (event) => {
    const file = event.target.files[0];

    if (file && pics.length < 3) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const placeholderImageUrl = e.target.result;

        setPics((prevPics) => [
          ...prevPics,
          <PicBox key={prevPics.length}>
            <img src={placeholderImageUrl} alt={`Pic ${prevPics.length + 1}`} />
            <DeleteButton
              color={state.color}
              onClick={() => removePic(prevPics.length)}
            >
              x
            </DeleteButton>
          </PicBox>,
        ]);
      };

      reader.readAsDataURL(file);
    } else if (pics.length >= 3) {
      alert('사진 추가는 최대 3개까지만 가능합니다.');
    }
  };

  const removePic = (index) => {
    // Function to remove a picture based on its index
    setPics((prevPics) => {
      const newPics = [...prevPics];
      newPics.splice(index, 1);
      return newPics;
    });
  };

  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setTagList(filteredTagList);
  };

  const fileInputRef = useRef(null);

  // Icon을 클릭했을 때 파일 입력이 열리도록 하는 함수
  const openFileInput = () => {
    // 현재 DOM 요소를 얻기 위해 current 속성을 사용합니다
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <SettingTitle title="게시물 업로드">게시물 업로드</SettingTitle>
      <PEWrapper>
        <Post>
          <PostText>게시글 작성</PostText>
          <PostBox maxLength={200}></PostBox>
          <CautionTxt></CautionTxt>
        </Post>
        <Tag>
          <TagText>태그 추가</TagText>
          <TagBox>
            {tagList.map((tagItem, index) => {
              return (
                <TagItem key={index}>
                  <Text>{tagItem}</Text>
                  <TagButton onClick={deleteTagItem}>x</TagButton>
                </TagItem>
              );
            })}
            <TagInput
              type="text"
              placeholder=""
              tabIndex={2}
              onChange={(e) => setTagItem(e.target.value)}
              value={tagItem}
              maxLength={5}
              onKeyPress={onKeyPress}
            />
          </TagBox>
        </Tag>
        <Pic>
          <PicText>사진 추가</PicText>
          <AddPicButton>
            <Icon
              for="file"
              name="plus-square"
              size="40"
              onClick={openFileInput}
            ></Icon>
            <InputFile
              type="file"
              id="file"
              accept="image/*"
              onChange={addPic}
              ref={fileInputRef}
              style={{ display: 'none' }}
              multiple
            />
          </AddPicButton>
          <Sel_Pic>{pics}</Sel_Pic>
        </Pic>
      </PEWrapper>
      <Button>
        <CancelButton onClick={navigateToAnotherPage}>취소</CancelButton>
        <SaveButton color={state.color}>게시</SaveButton>
      </Button>
    </Wrapper>
  );
};

export default PostUploadPage;