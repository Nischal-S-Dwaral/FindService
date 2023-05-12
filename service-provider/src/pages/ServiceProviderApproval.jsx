import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import axios from "axios";

const Container = styled.div``;

const ServiceProviderContainer = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  border: ${props => (props.border === "black" ? "3px solid black" : "0.01px groove lightgrey")};
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
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

const RightContainer = styled.div`
  flex: 2;
  margin: 5px;
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
const ServiceProviderApproval = ({id}) => {

    let action = 'No Action Required';

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

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
                    setDataLoaded(true)
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getServiceProvider();
    }, [id]);

    return (
        <Container>
            {
                dataLoaded && (
                    <>
                        <ServiceProviderContainer>
                            <Contents>
                                <LeftContainer>
                                </LeftContainer>
                                <RightContainer>
                                    <SubTitle>Hello, {name}</SubTitle>
                                    <Hr/>
                                </RightContainer>
                                <TopContainer>
                                    <SubTitle>Description</SubTitle>
                                    <TopContainerText>{description}</TopContainerText>
                                    <Hr/>
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
                                }/>
                            </Contents>
                        </ServiceProviderContainer>
                    </>
                )
            }
        </Container>
    );
};

export default ServiceProviderApproval;
