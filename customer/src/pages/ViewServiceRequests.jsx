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
`;

const TitleContainer = styled.div `
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;
  ${mobile({
    margin: "10px 0",
  })}
`;

const Title = styled.h1 `
  font-weight: 800;
  padding: 0 15px 0 30px;
  ${mobile({
    padding: "0 0 0 20px",
  })}
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
