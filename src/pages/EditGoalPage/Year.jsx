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

const InputBox = styled.input`
    font-family: "Roboto", sans-serif;
    font: 20px;
    border-radius: 5px;
    border: 3px solid ${ORIGINAL_YELLOW};
    width: 320px;
    height: 30px;
    margin-left: 50px;
    margin-bottom: 10px;
`;

const Year = () => {
    const [Year, setYear] = useState('');

    return (
        <div>
            <Title>연간 목표</Title>
            <InputBox/>
        </div>
    );
};

export default Year;
