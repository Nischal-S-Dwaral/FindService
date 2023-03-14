import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ServiceRequests from "../components/ServiceRequests";

const Container = styled.div `
  margin-bottom: 20px;
`;

const Main = styled.div `
  display: flex;
`;

const ViewServiceRequestsContainer = styled.div `
  flex: 4;
`;

const TitleContainer = styled.div `
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1 `
  font-weight: 800;
  padding: 0 15px 0 30px;
`;

const ViewServiceRequests = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ViewServiceRequestsContainer>
                    <TitleContainer>
                        <Title>Service Requests</Title>
                    </TitleContainer>
                    <ServiceRequests properties={
                        {
                            height: 80,
                            pageSize: 10
                        }
                    }/>
                </ViewServiceRequestsContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ViewServiceRequests;
