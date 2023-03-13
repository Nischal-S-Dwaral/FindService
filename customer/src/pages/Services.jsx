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

const ServiceContainer = styled.div `
  flex: 4;
`;
const Services = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ServiceContainer>
                    <h1>This is List of Services Pages</h1>
                    <h3>View all the services available</h3>
                </ServiceContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Services;
