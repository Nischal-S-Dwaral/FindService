import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {categoryValueToText} from "../data";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {getColorCodeForStatus} from "../utils";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import axios from "axios";

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

    const [serviceRequest, setServiceRequest] = useState({});
    const [serviceCategoryText, setServiceCategoryText] = useState("");

    useEffect(() => {

        const getServiceRequest = async () => {
            try {
                let requestData = '';
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/serviceRequest/getByID?id='+id,
                    headers: { },
                    data : requestData
                };

                const response = await axios.request(config)

                if (response.data.returnCode === "0") {
                    setServiceRequest(response.data.serviceRequest)
                    setServiceCategoryText(categoryValueToText.get(response.data.serviceRequest.serviceCategory))
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getServiceRequest()
    }, [id]);


    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ServiceRequestContainer>
                    {
                        serviceRequest && (
                            <>
                                <Contents>
                                    <TopContainer>
                                        <Title>Request ID: {id}</Title>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Service</SubTitle>
                                        <TopContainerText>Name: {serviceRequest.serviceName}</TopContainerText>
                                        <TopContainerText>Category: {serviceCategoryText}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Timings</SubTitle>
                                        <TopContainerText>Date: {serviceRequest.date}</TopContainerText>
                                        <TopContainerText>Time: {serviceRequest.time}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Address</SubTitle>
                                        <TopContainerText>{serviceRequest.address}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Description</SubTitle>
                                        <TopContainerText>{serviceRequest.description}</TopContainerText>
                                    </TopContainer>
                                </Contents>
                                <Contents background={getColorCodeForStatus(serviceRequest.status)} border="black">
                                    <SubTitle>Status: {serviceRequest.status}</SubTitle>
                                </Contents>
                                <Contents>
                                    <SubTitle>Extra Details</SubTitle>
                                    <MoreDetailsCommentSection properties={
                                        {
                                            customerId: serviceRequest.customerId,
                                            customerName: serviceRequest.customerName,
                                            serviceRequestId: id
                                        }
                                    }/>
                                </Contents>
                            </>
                        )
                    }
                </ServiceRequestContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ServiceRequest;
