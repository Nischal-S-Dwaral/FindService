import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import VerifiedSPItem from "../components/VerifiedSPItem";
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
const RejectedSP = () => {

  const [rejectedServiceProviders, setRejectedServiceProviders] = useState([]);
  const status = 'Rejected'

  useEffect(() => {
    const getRejectedServiceProviders = async () => {
        try {
            let requestData = '';
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/serviceProvider/getServiceProviderList?approvalStatus='+status,
                headers: {},
                data : requestData
            };

            const response = await axios.request(config)

            if (response.data.returnCode === "0") {
                setRejectedServiceProviders(response.data.serviceProviderList)
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    getRejectedServiceProviders()
  }, [status]);

    return (
        <Container>
          <Navbar/>
            <Main>
            <Sidebar/>
                <ServiceProviderContainer>
                {
                  rejectedServiceProviders && rejectedServiceProviders.length > 0 && (
                    <>
                  <Contents>
                    <TopDetails>
                      <Title>
                          Verified Service Providers
                      </Title>
                    </TopDetails>
                    <ServiceProviderList>
                        {rejectedServiceProviders.map(item => (
                             <VerifiedSPItem item={item} key={item.id}/>
                        ))}
                    </ServiceProviderList>
                  </Contents>
                  </>
                    )
                  }  
                  {verifiedServiceProviders.length === 0 && (
                    <Title>There are no Verified Service Providers!</Title>
                  )}

                </ServiceProviderContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default RejectedSP;
