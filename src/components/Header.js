import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #2c3142;
    margin-top: 0;
`;

const Header = styled.h1`
    color: #cccc00;
    margin: 0;
    padding-top: 1vh;
    padding-bottom: 1vh;
`

const header = () => {

    return (
        <Container>
            <Header>Weather App</Header>
        </Container>
    );

}

export default header;