import React from 'react';
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {serviceRequestDetails} from "../data";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {getColorCodeForStatus} from "../utils";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";

const Container = styled.div ``;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
})}
`;

const Contents = styled.div `
  border: ${props => (props.border === "black" ? "3px solid black": "0.01px groove lightgrey")};
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
`;

const ServiceRequestContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
`;

const TopContainer = styled.div `
`;

const TopContainerText = styled.p `
  margin: 5px 0;
`;

const Title = styled.h1 `
  font-weight: 800;
`;

const SubTitle = styled.h3 `
  font-weight: 700;
  margin-right: 10px;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Page for the customer's service request
 * @constructor
 */
const ServiceRequest = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const data = serviceRequestDetails[id-1];

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ServiceRequestContainer>
                    <Contents>
                        <TopContainer>
                            <Title>Request ID: {id}</Title>
                            <Hr/>
                        </TopContainer>
                        <TopContainer>
                            <SubTitle>Service</SubTitle>
                            <TopContainerText>Name: {data.serviceName}</TopContainerText>
                            <TopContainerText>Category: {data.category}</TopContainerText>
                            <Hr/>
                        </TopContainer>
                        <TopContainer>
                            <SubTitle>Timings</SubTitle>
                            <TopContainerText>Date: {data.date}</TopContainerText>
                            <TopContainerText>Time: {data.time}</TopContainerText>
                            <Hr/>
                        </TopContainer>
                        <TopContainer>
                            <SubTitle>Address</SubTitle>
                            <TopContainerText>{data.address}</TopContainerText>
                            <Hr/>
                        </TopContainer>
                        <TopContainer>
                            <SubTitle>Description</SubTitle>
                            <TopContainerText>{data.description}</TopContainerText>
                        </TopContainer>
                    </Contents>
                    <Contents background={getColorCodeForStatus(data.status)} border="black">
                        <SubTitle>Status: {data.status}</SubTitle>
                    </Contents>
                    <Contents>
                        <SubTitle>Extra Details</SubTitle>
                        <MoreDetailsCommentSection properties={
                            {
                                customerId: data.customerId,
                                customerName: data.customerName,
                                moreDetailsComments: data.moreDetailsComments
                            }
                        }/>
                    </Contents>
                </ServiceRequestContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ServiceRequest;
