import React,{useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {serviceProvidersDetails} from "../data";
import {mobile} from "../responsive";
import ServiceProviderItem from "../components/ServiceProviderItem";
import {useLocation} from "react-router-dom";

const Container = styled.div `
`;
const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ServiceProviderContainer = styled.div `
  flex: 4;
  margin: 30px;
  ${mobile({
    padding: "0px",
    marginTop: "10px"
  })}
`;

const Title = styled.h1 `
  font-weight: 800;
  padding: 0 15px 0 30px;
  ${mobile({
    padding: "0 0 0 20px",
  })}
`;

const ServiceList = styled.div `
`;

const DeleteButton = styled.button `
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  ${mobile({
    width: "100%",
  })}
`;

const RightTopContainer = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    alignItems: "flex-start",
  })}
`;

const LeftTopContainer = styled.div `
  flex: 3;
`;

const TopDetails = styled.div `
  margin-bottom: 10px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Contents = styled.div `
  border: 0.01px groove lightgrey;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
`;


/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service list page
 */
const ServiceProvider = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const data = serviceProvidersDetails[id-1];
    const services = data.services;

    console.log("service provider ----> ")
    
    const [deleted, setDeleted] = useState(false);

    console.log("deleted00000" + deleted)

    return (
        <Container>
            <Navbar/>
            <Main>
            <Sidebar/>
                <ServiceProviderContainer>
                    <Contents>
                        <TopDetails>
                            <LeftTopContainer>
                                <Title>Service Provider -  {data.name}</Title>
                            </LeftTopContainer>
                            <RightTopContainer>
                                <DeleteButton onClick={() => setDeleted(true)}>
                                                Delete
                                </DeleteButton>
                            </RightTopContainer>
                        </TopDetails>
                        <ServiceList>
                                {services.map(item => (
                                    <ServiceProviderItem item={item} key={item.id}/>
                                ))}
                        </ServiceList>
                    </Contents>
                    {/* <Title>
                        Service Provider - {data.name}
                    </Title>
                    <DeleteButton onClick={() => setOpenServiceRequestModal(true)}>
                                                Delete
                    </DeleteButton> */}
                    
                </ServiceProviderContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ServiceProvider;
