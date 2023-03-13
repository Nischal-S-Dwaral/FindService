import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  flex: 4;
`;
const Services = () => {
    return (
        <Container>
            <h1>This is List of Services Pages</h1>
            <h3>View all the services available</h3>
        </Container>
    );
};

export default Services;
