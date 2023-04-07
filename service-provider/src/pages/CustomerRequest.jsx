import React, {useState} from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { customerRequest, NonVerifiedServiceProviderDetails } from "../data";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { getColorCodeForStatus } from "../utils";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import ButtonContainer from '../components/ButtonContainer';
import { GridOverlay } from '@material-ui/data-grid';

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
  const data = customerRequest[id - 1];
  console.log('check data ', data)
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [completed, setCompleted] = useState(false);

  
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
        <CustomerRequestContainer>
          <Contents>

            <RightContainer>
              <SubTitle>Customer Request</SubTitle>
              <TopContainerText>Requested Service Name: {data.serviceName}</TopContainerText>
              <TopContainerText>Category: {data.category}</TopContainerText>
              <TopContainerText>Status: {data.status}</TopContainerText> 
              <Hr />
            </RightContainer>
            <TopContainer>
              <SubTitle>Description</SubTitle>
              <TopContainerText>{data.description}</TopContainerText><Hr />
              <SubTitle>Requested Date</SubTitle>
              <TopContainerText>{data.requestDate}</TopContainerText><Hr />
              <SubTitle>Requested Time</SubTitle>
              <TopContainerText>{data.requestTime}</TopContainerText><Hr />
              <SubTitle>Address</SubTitle>
              <TopContainerText>{data.address}</TopContainerText>
            </TopContainer>
          </Contents>
          <Contents>
            <LeftContainer>
              <SubTitle>Request Action: </SubTitle>
            </LeftContainer>
            <RightContainer>
              <RightTopContainer>
                <div>
                  
                  <Button disabled={(data.status !== 'Pending Review' || data.status === 'Completed' || data.status === 'Rejected')} onClick={() => setAccepted(true)}>
                    Accept
                  </Button>
                  <Button disabled={(data.status === 'Pending Review' || data.status === 'Accepted' || data.status === 'Completed')} onClick={() => setRejected(true)}>
                    Reject
                  </Button>
                  <Button disabled={(data.status !== 'Accepted' || data.status !== 'Pending Review' || data.status === 'Rejected')} onClick={() => setAccepted(true)}>
                    Completed
                  </Button>
                </div>
              </RightTopContainer>
            </RightContainer>
          </Contents>

          <Contents>
            <SubTitle>More Details</SubTitle>
            <MoreDetailsCommentSection properties={
              {
                customerId: data.customerId,
                customerName: data.customerName,
                moreDetailsComments: data.moreDetailsComments
              }
            } />
          </Contents>

        </CustomerRequestContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default CustomerRequest;
