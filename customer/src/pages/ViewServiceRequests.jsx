import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ServiceRequestList from "../components/ServiceRequestList";
import {mobile} from "../responsive";

const Container = styled.div `
  margin-bottom: 20px;
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ViewServiceRequestsContainer = styled.div `
  flex: 4;
  margin: 30px;
`;

const TitleContainer = styled.div `
  display: flex;
  align-items: center;
`;

const Title = styled.h1 `
  font-weight: 800;
  margin-bottom: 10px;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - View all the Service Requests of the customer
 */
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
                    <ServiceRequestList properties={
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
