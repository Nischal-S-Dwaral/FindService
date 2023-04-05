import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {VerifiedServiceProviderDetails} from "../data";
import {mobile} from "../responsive";
import VerifiedSPItem from "../components/VerifiedSPItem";

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

const ServiceProviderList = styled.div `
`;

const Contents = styled.div `
  border: 0.01px groove lightgrey;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
`;

const TopDetails = styled.div `
  margin-bottom: 10px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service list page
 */
const VerifiedSP = () => {

    return (
        <Container>
          <Navbar/>
            <Main>
            <Sidebar/>
                <ServiceProviderContainer>
                  <Contents>
                    <TopDetails>
                      <Title>
                          Verified Service Providers
                      </Title>
                    </TopDetails>
                    <ServiceProviderList>
                        {VerifiedServiceProviderDetails.map(item => (
                             <VerifiedSPItem item={item} key={item.id}/>
                        ))}
                    </ServiceProviderList>
                  </Contents>
                </ServiceProviderContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default VerifiedSP;
