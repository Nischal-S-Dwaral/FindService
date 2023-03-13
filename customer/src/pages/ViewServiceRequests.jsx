import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  flex: 4;
`;

const ViewServiceRequests = () => {
    return (
        <Container>
            <h1>VIEW SERVICE REQUESTS </h1>
            <h3>List of all the service requests of the customer</h3>
        </Container>
    );
};

export default ViewServiceRequests;
