import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import NonVerifiedSPList from "../components/NonVerifiedSPList";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ViewServiceProviderContainer = styled.div `
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
 * @returns {JSX.Element} - Home Page of the website
 */
const Home = () => {
    return (
        <Container>
          <Navbar/>
            <Main>
              <Sidebar/>
              <ViewServiceProviderContainer>
                    <TopDetails>
                      <TitleContainer>
                        <Title>Service Providers Approval Pending</Title>
                      </TitleContainer>
                    </TopDetails>
                    <NonVerifiedSPList properties={
                        {
                            height: 80,
                            pageSize: 10
                        }
                    }/>
              </ViewServiceProviderContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Home;
