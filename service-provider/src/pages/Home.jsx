import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ServiceRequestList from "../components/ServiceRequestList";
import ServiceItem from "../components/ServiceItem";
import {Link} from "react-router-dom";
import {UnfoldMoreOutlined} from "@material-ui/icons";
import {serviceDetails, serviceProvider} from "../data";
import PreApproval from '../components/PreApproval';
import ServiceProviderApproval from './ServiceProviderApproval';

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
`;

const HomeContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
`;

const ServiceRequestsTitleContainer = styled.div `
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ServiceRequestsTitle = styled.h1 `
  font-weight: 800;
  padding: 0 15px 0 30px;
`;

const SeeAllServiceRequestsLink = styled.div `
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
const ServiceList = styled.div `
`;
const Title = styled.h1 `
  font-weight: 800;
  padding: 0 30px;
  margin-top: 30px;
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} - Home Page of the website
 */
const Home = () => {
  const currentSP = serviceProvider[1]; //get current logged in SP status
  const status = currentSP.status;
  const spId = currentSP.id;
  
  if(status!=="Approved") {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                  
                  
                  <ServiceProviderApproval id={spId} />
                    
                    
                </HomeContainer>
            </Main>
            <Footer/>
        </Container>
    );
  }
  else{
 return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                  
                  
                  <Title>Our Services</Title>
                    <ServiceList>
                        {serviceDetails.map(item => (
                            <ServiceItem item={item} key={item.id}/>
                        ))}
                    </ServiceList>
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
