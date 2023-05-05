import React, {useEffect,useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ServiceRequestList from "../components/ServiceRequestList";
import {Link} from "react-router-dom";
import {UnfoldMoreOutlined} from "@material-ui/icons";
import ServiceProviderApproval from './ServiceProviderApproval';
import {useSelector} from "react-redux";
import ServiceList from '../components/ServiceList';
import axios from "axios";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
`;

const HomeContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 15px;
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
  const user = useSelector((state) => state.user.currentUser);
  const status = user.status;
  const spId = user.uid;

  const [approvalStatus, setStatus] = useState('');

  useEffect(() => {
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
          setStatus(response.data.approvalStatus);
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getServiceProvider();
  });

 
  if(approvalStatus !== 'Verified') {
    return (
        <Container>
            <Navbar/>
            <Main>
               
                <HomeContainer>
                  
                  
                  <ServiceProviderApproval id={spId} />
                    
                    
                </HomeContainer>
            </Main>
            <Footer/>
        </Container>
    );
  }
else if(approvalStatus === 'Verified'){
 return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <HomeContainer>
                  
                  
                  <Title>Our Services</Title>
                    <ServiceList />
                    
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
