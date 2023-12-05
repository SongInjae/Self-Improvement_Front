import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';

const InputBox = styled.div`
    font-family: "Roboto", sans-serif;
    font: 20px;
    border-radius: 5px;
    border: 3px solid ${ORIGINAL_YELLOW};
    width: 300px;
    height: 280px;
    margin-left: 50px;
    margin-bottom: 10px;
    padding: 10px;
`;

const SmallInputBox = styled.input`
    font-family: "Roboto", sans-serif;
    font: 20px;
    border: none;
    border-bottom: 3px solid lightgray;
    width: 270px;
    height: 30px;
    margin: 10px;
`;
const TwoMonth = () => {
    return (
        <InputBox>
                1~3월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                4~6월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                7~9월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                10~12월:<br/>
                <SmallInputBox>
                </SmallInputBox>
            </InputBox>
    );
};

export default TwoMonth;
