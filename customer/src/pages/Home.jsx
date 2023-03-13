import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  flex: 4;
`;

const Home = () => {
    return (
        <Container>
            <h1>This is Home Page</h1>
            <h3>Here the many service categories can be seen etc.</h3>
        </Container>
    );
};

export default Home;
