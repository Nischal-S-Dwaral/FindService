import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ServiceRequestList from "../components/ServiceRequestList";
import {Link} from "react-router-dom";
import {UnfoldMoreOutlined} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const HomeContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
`;

const ServiceRequestsTitleContainer = styled.div `
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const ServiceRequestsTitle = styled.h1 `
  font-weight: 800;
  margin-right: 10px ;
`;

const SeeAllServiceRequestsLink = styled.div `
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.5px;
  color: black;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Home Page of the website
 */
const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                    <Categories />
                    <Hr/>
                    <ServiceRequestsTitleContainer>
                        <ServiceRequestsTitle>Service Requests</ServiceRequestsTitle>
                        <Link to="/requests">
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
};

export default Home;
