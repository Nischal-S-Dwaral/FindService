import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ServiceRequestList from "../components/ServiceRequestList";
import {useDispatch, useSelector} from "react-redux";
import ServiceList from '../components/ServiceList';
import axios from "axios";
import {processSuccess, processVerified} from "../redux/userRedux";
import {mobile} from "../responsive";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import {Link} from "react-router-dom";
import {UnfoldMoreOutlined} from "@material-ui/icons";

const Container = styled.div`
`;

const Main = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const HomeContainer = styled.div`
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
`;

const Title = styled.h1`
  font-weight: 800;
`;

const Contents = styled.div`
  border: ${props => (props.border === "black" ? "3px solid black" : "0.01px groove lightgrey")};
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
`;

const TopContainer = styled.div`
`;

const TopContainerText = styled.p`
  margin: 5px 0;
`;

const SubTitle = styled.h3`
  font-weight: 700;
  margin-right: 10px;
`;

const Hr = styled.hr`
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 2;
  margin: 5px;
`;

const ActionBar = styled.div`
  color: red;
  font-size: small;
  padding: 10px;
`;

const ServiceRequestsTitleContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ServiceRequestsTitle = styled.h1`
  font-weight: 800;
  margin-right: 10px;
`;

const SeeAllServiceRequestsLink = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Home Page of the website
 */
const Home = () => {
    const user = useSelector((state) => state.user.currentUser);
    const spId = user.uid;
    const status = useSelector((state) => state.user.status);
    const dispatch = useDispatch();
    const [serviceProviderStatus, setServiceProviderStatus] = useState(status)

    let action = 'No Action Required';

    useEffect(() => {
        if (serviceProviderStatus !== "Verified") {

            const getServiceProvider = async () => {
                try {
                    let data = '';

                    let config = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: 'http://localhost:8080/api/serviceProvider/findBySPid?id=' + spId,
                        headers: {},
                        data: data
                    };

                    const response = await axios.request(config)

                    if (response.data.returnCode === "0") {
                        dispatch(processVerified(response.data.approvalStatus))
                        setServiceProviderStatus(response.data.approvalStatus)
                        dispatch(processSuccess({
                            uid : response.data.id,
                            email : response.data.email,
                            username : response.data.name,
                            status: response.data.approvalStatus,
                            description: response.data.description
                        }));
                    } else {
                        console.log(response.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            getServiceProvider()
        }
    });

    if (serviceProviderStatus !== 'Verified') {

        console.log("Inside not verified")

        if (serviceProviderStatus === 'Rejected')
            action = 'Your request of registration has been rejected. No Action Required'
        else if (serviceProviderStatus === 'Awaiting Further Details')
            action = 'Please provide the requested details below.'

        return (
            <Container>
                <Navbar/>
                <Main>
                    <HomeContainer>
                        <Contents>
                            <LeftContainer>
                            </LeftContainer>
                            <RightContainer>
                                <SubTitle>Hello, {user.username}</SubTitle>
                                <Hr/>
                            </RightContainer>
                            <TopContainer>
                                <SubTitle>Description</SubTitle>
                                <TopContainerText>{user.description}</TopContainerText>
                                <Hr/>
                                <TopContainerText>Your current registration status is <b>{serviceProviderStatus}</b></TopContainerText>

                            </TopContainer>
                        </Contents>
                        <ActionBar>Action: {action}</ActionBar>
                        <Contents>
                            <SubTitle>More Details</SubTitle>
                            <MoreDetailsCommentSection properties={
                                {
                                    serviceProviderId: spId
                                }
                            }/>
                        </Contents>
                    </HomeContainer>
                </Main>
                <Footer/>
            </Container>
        );
    } else if (serviceProviderStatus === 'Verified') {
        return (
            <Container>
                <Navbar/>
                <Main>
                    <Sidebar/>
                    <HomeContainer>
                        <Title>Our Services</Title>
                        <ServiceList/>
                        <Hr/>
                        <ServiceRequestsTitleContainer>
                            <ServiceRequestsTitle>Service Requests</ServiceRequestsTitle>
                            <Link to="/view/serviceRequests">
                                <SeeAllServiceRequestsLink>
                                    <UnfoldMoreOutlined/>
                                    Show More
                                </SeeAllServiceRequestsLink>
                            </Link>
                        </ServiceRequestsTitleContainer>
                        <ServiceRequestList properties={
                            {
                                height: 35,
                                pageSize: 3
                            }
                        }/>
                    </HomeContainer>
                </Main>
                <Footer/>
            </Container>
        );
    }
};

export default Home;
