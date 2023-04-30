import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import axios from "axios";

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

const ServiceProviderContainer = styled.div`
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
const ActionBar = styled.div`
  color: red;
  font-size: small;
  padding: 10px;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Page for the customer's service request
 * @constructor
 */
const ServiceProviderApproval = ({ id }) => {

  var action = 'No Action Required'

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  if (status === 'Rejected')
    action = 'Your request of registeration has been rejected. No Action Required'
  else if (status === 'Awaiting Further Details')
    action = 'Please provide the requested details below.'

  useEffect(() => {
    const getServiceProvider = async () => {
      try {
        let data = '';

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/api/serviceProvider/findBySPid?id=' + id,
          headers: {},
          data: data
        };

        const response = await axios.request(config)

        if (response.data.returnCode === "0") {
          setName(response.data.name);
          setDescription(response.data.description);
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

  return (
    <Container>


      <ServiceProviderContainer>
        <Contents>
          <LeftContainer>
            {/* <ImageContainer>
                                <Image src={data.img}/>
                            </ImageContainer> */}
          </LeftContainer>
          <RightContainer>
            {/* <SubTitle>Service Provider</SubTitle> */}
            <SubTitle>Hello, {name}</SubTitle>
            {/* <TopContainerText>Name: {data.spName}</TopContainerText> */}
            <Hr />
          </RightContainer>
          <TopContainer>
            <SubTitle>Description</SubTitle>
            <TopContainerText>{description}</TopContainerText>
            <Hr />
            <TopContainerText>Your current registration status is <b>{status}</b></TopContainerText>

          </TopContainer>
        </Contents>
        
        <ActionBar>Action: {action}</ActionBar>

        <Contents>
          <SubTitle>More Details</SubTitle>
          <MoreDetailsCommentSection properties={
            {
              serviceProviderId: id,
              servicerProviderName: name
              
            }
          } />
        </Contents>

      </ServiceProviderContainer>


    </Container>
  );
};

export default ServiceProviderApproval;
