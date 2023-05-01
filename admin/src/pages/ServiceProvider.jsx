import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import ServiceProviderItem from "../components/ServiceProviderItem";
import {useLocation} from "react-router-dom";
import axios from "axios";

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
    console.log('serviceprovider id --> ', id)

    const [services, setServices] = useState([]);
    const [serviceProvider, setServiceProviderName] = useState([]);

    const handleDelete = async (event) => {
      event.preventDefault(); // prevents the refresh of the page
      const url = `http://localhost:8080/api/serviceProvider/delete?id=${id}`;
      
            fetch(url, {
              method: 'DELETE'
            })
            .then(response => {
              // handle the response
              console.log('deleted')
              window.location.reload();
            })
            .catch(error => {
              // handle the error
              console.log(error);
            });  
    }

    useEffect(() => {

    const getServices = async () => {
          try {
              let requestData = '';
              let config = {
                  method: 'get',
                  maxBodyLength: Infinity,
                  url: 'http://localhost:8080/api/service/getServiceListByServiceProvider?serviceProviderId='+id,
                  headers: { },
                  data : requestData
              };

              const response = await axios.request(config)

              if (response.data.returnCode === "0") {
                  setServices(response.data.serviceList)
                  setServiceProviderName(response.data.serviceProviderName)
                  console.log('service provider name ', response.data.serviceProviderName)
              } else {
                  console.log(response.data);
              }
          } catch (error) {
              console.log(error);
          }
      }
      getServices()
  }, [id]);

    return (
        <Container>
            <Navbar/>
            <Main>
            <Sidebar/>
                <ServiceProviderContainer>
                  {
                    services && services.length > 0 && (
                      <Contents>
                        <TopDetails>
                            <LeftTopContainer>
                                <Title>Service Provider - {serviceProvider}</Title>
                            </LeftTopContainer>
                            <RightTopContainer>
                              <DeleteButton onClick={handleDelete} >
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
                    )
                  } 
                  {
                    services.length === 0 && (
                      <Title>There are no services for Service Provider {services.serviceProviderId}</Title>
                    )
                  }
                </ServiceProviderContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ServiceProvider;
