import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  margin-top: 10px;
`;

const ViewServiceRequestsContainer = styled.div `
  flex: 4;
`;

const ViewServiceRequests = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ViewServiceRequestsContainer>
                    <h1>VIEW SERVICE REQUESTS </h1>
                    <h3>List of all the service requests of the customer</h3>
                </ViewServiceRequestsContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ViewServiceRequests;
