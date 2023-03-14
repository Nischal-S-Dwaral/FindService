import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ServiceRequests from "../components/ServiceRequests";
import {Link} from "react-router-dom";
import {UnfoldMoreOutlined} from "@material-ui/icons";

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

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                    <Categories />
                    <ServiceRequestsTitleContainer>
                        <ServiceRequestsTitle>Service Requests</ServiceRequestsTitle>
                        <Link to="/view/serviceRequests">
                            <SeeAllServiceRequestsLink>
                                <UnfoldMoreOutlined/>
                                Show More
                            </SeeAllServiceRequestsLink>
                        </Link>
                    </ServiceRequestsTitleContainer>
                    <ServiceRequests properties={
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
};

export default Home;
