import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { useState } from 'react';

const Title = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: black;
    margin-left: 55px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const InputBox = styled.div`
    font-family: "Roboto", sans-serif;
    font: 20px;
    border-radius: 5px;
    border: 3px solid ${ORIGINAL_YELLOW};
    width: 300px;
    height: 830px;
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

const Month = () => {
    const [Month, setMonth] = useState('');

    return (
        <div>
            <Title>월간 목표</Title>
            <InputBox>
                1월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                2월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                3월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                4월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                5월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                6월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                7월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                8월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                9월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                10월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                11월:<br/>
                <SmallInputBox>
                </SmallInputBox>
                12월:<br/>
                <SmallInputBox>
                </SmallInputBox>
            </InputBox>
        </div>
    );
};

export default Month;
