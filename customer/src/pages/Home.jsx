import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  margin-top: 10px;
`;

const HomeContainer = styled.div `
  flex: 4;
`;

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                    <h1>This is Home Page</h1>
                    <h3>Here the many service categories can be seen etc.</h3>
                </HomeContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Home;
