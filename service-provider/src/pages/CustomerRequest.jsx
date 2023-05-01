import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import axios from "axios";
import MoreDetailsRequestSection from "../components/MoreDetailsRequestSection";
import { useSelector } from "react-redux";
import { updateRequestStatus } from '../api/Request';

const Container = styled.div``;

const Main = styled.div`
  display: flex;
  ${mobile({
  flexDirection: "column",
})}
`;

const Contents = styled.div`
  border: ${props => (props.border === "black" ? "3px solid black" : "0.01px groove lightgrey")};
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
`;

const CustomerRequestContainer = styled.div`
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
`;

const TopContainer = styled.div`
`;

const TopContainerText = styled.p`
  margin: 5px 0;
`;

const SubTitle = styled.h3`
  font-weight: 700;
  margin-right: 10px;
`;

const Hr = styled.hr`
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  width: 25vw;
  height: 100%;
  overflow: hidden;
  border-radius: 15px 0 0 15px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RightContainer = styled.div`
  flex: 2;
  margin: 5px;
`;

const RightTopContainer = styled.div`
  top: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;

const ContentText = styled.div`
  margin-left: 5px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 45vw;
`;
const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 16px;
  margin: 0 8px;
  cursor: pointer;
  &:disabled{
    background-color: gray;
  }
  ${mobile({
  width: "100%",
})}
`;


/**
 * @author Nischal S D
 * @returns {JSX.Element} - Page for the customer's service request
 * @constructor
 */
const CustomerRequest = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  //const data = customerRequest[id - 1];
  //const cust = customer[0];//hardcoded for now, should be mapped from custId of request
  const user = useSelector((state) => state.user.currentUser);

  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [serviceRequest,setServiceRequest] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
   
    const getRequestDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/serviceRequest/getByID?id=${id}`
        );
        if (response.data.returnCode === "0") {
          setServiceRequest(response.data.serviceRequest)
          setStatus(response.data.serviceRequest.status)
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getRequestDetails()
  
  },[status,id]);
  
  const updateRequest = async (statusText) => {
    const apiResponse = await updateRequestStatus({
      "serviceRequestId": id,
      "updatedStatus": statusText
    })
    if (apiResponse != null) {
      setStatus(status);
    } else {
      console.log("Error while getting more details")
    } 
  }
  


  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
        {serviceRequest.serviceName && <>
        <CustomerRequestContainer>
          <Contents>

            <RightContainer>
              <SubTitle>Customer Request</SubTitle>
              <TopContainerText>Requested Service Name: {serviceRequest.serviceName}</TopContainerText>
              <TopContainerText>Category: {serviceRequest.serviceCategory}</TopContainerText>
              <TopContainerText>Status: <b>{status}</b></TopContainerText> 
              <Hr />
            </RightContainer>
            <TopContainer>
            <SubTitle>Customer Details</SubTitle>
            <TopContainerText>Name: {serviceRequest.customerName}</TopContainerText>
           
              <SubTitle>Description</SubTitle>
              <TopContainerText>{serviceRequest.description}</TopContainerText>
              <SubTitle>Requested Date</SubTitle>
              <TopContainerText>{serviceRequest.date}</TopContainerText>
              <SubTitle>Requested Time</SubTitle>
              <TopContainerText>{serviceRequest.time}</TopContainerText>
              <SubTitle>Address</SubTitle>
              <TopContainerText>{serviceRequest.address}</TopContainerText>
              <SubTitle>Price</SubTitle>
              <TopContainerText>{serviceRequest.price}</TopContainerText>
            </TopContainer>
          </Contents>
          <Contents>
            <LeftContainer>
              <SubTitle>Request Action: </SubTitle>
            </LeftContainer>
            <RightContainer>
              <RightTopContainer>
                <div>
                  
                  <Button disabled={(serviceRequest.status === 'Accepted'|| serviceRequest.status === 'Completed' || serviceRequest.status === 'Rejected')} 
                  onClick={() => updateRequest("Accepted")}>
                    Accept
                  </Button>
                  <Button disabled={( serviceRequest.status === 'Accepted' || serviceRequest.status === 'Completed')}
                   onClick={() => updateRequest("Rejected")}>
                    Reject
                  </Button>
                  <Button disabled={(serviceRequest.status === 'Pending' || serviceRequest.status === 'Rejected')} 
                  onClick={() => updateRequest("Completed")}>
                    Completed
                  </Button>
                </div>
              </RightTopContainer>
            </RightContainer>
          </Contents>

           <Contents>
            <SubTitle>More Details</SubTitle>
            <MoreDetailsRequestSection properties={
              {
                serviceRequestId: id,
                serviceProviderName: user.username
              }
            } />
          </Contents> 

        </CustomerRequestContainer>
        </>
        }
      </Main>
      <Footer />
    </Container>
  );
};

export default CustomerRequest;
