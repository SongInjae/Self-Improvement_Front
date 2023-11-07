import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { useState } from 'react';
import ThreeSeason from './ThreeSeason';
import FourSeason from './FourSeason';
import SixSeason from './SixSeason';

const SeasonBox = styled.div`
    margin-top: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: black;
    margin-left: 55px;
    margin-bottom: 10px;
    margin-right: 10px;
`;

const ComboBox = styled.select`
    width: 100px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const Season = () => {
    const [option, setOption] = useState('4');

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        setOption(selectedOption);
    };

    return (
        <SeasonBox>
            <Container>
                <Title>분기 목표</Title>
                <ComboBox value={option} onChange={handleOptionChange}>
                    <option value="4">4분기</option>
                    <option value="3">3분기</option>
                    <option value="2">2분기</option>
                </ComboBox>
            </Container>
            {option === '4' && <ThreeSeason />}
            {option === '3' && <FourSeason />}
            {option === '2' && <SixSeason />}
        </SeasonBox>
    );
};

export default Season;
