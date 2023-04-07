import React, {useState} from 'react';
import {useLocation,Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import {LocationOn,Edit} from "@material-ui/icons";
import Review from "../components/Review";
import {serviceDetails} from "../data";
import PhotoSlider from "../components/PhotoSlider";
import ServiceRequest from "../components/ServiceRequest";
import AddService from './AddService';

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
`;

const ServiceContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
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
`;

const LeftTopContainer = styled.div `
  flex: 3;
`;

const Title = styled.h1 `
  font-weight: 800;
`;

const Rating = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const TextRating = styled.div `
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Location = styled.div `
  display: flex;
  align-items: center;
`;

const LocationText = styled.div `
  margin-left: 5px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RightTopContainer = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
`;

const MiddleContainer = styled.div `
`;

const MiddleContainerText = styled.p `
  margin: 5px 0;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const UpdateServiceButton = styled.div `
  
  padding: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

const SubTitle = styled.h2 `
  font-weight: 700;
`;

const ReviewGrid = styled.div `
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat({$props.columns}, 1fr);
`;
const Icon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const IconText = styled.h2 `
  font-weight: bold;
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service details page
 */
const Service = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const data = serviceDetails[id-1];
    const reviews = data.reviews;
    const photos = data.photos;

    const getTemplateRows = (reviews) => {
        return Math.ceil(reviews.length / 2);
    }

    const [openServiceFormModal, setOpenServiceFormModal] = useState(false);
    const navigate = useNavigate();
    return (
        <Container>
           
                        <Navbar/>
                        <Main>
                            <Sidebar/>
                            <ServiceContainer>
                                <Contents>
                                    <TopDetails>
                                        <LeftTopContainer>
                                            <Title>{data.serviceName}</Title>
                                            <Rating>
                                                <TextRating>{data.rating}</TextRating>
                                                <StarRating properties={
                                                    {
                                                        rating: data.rating
                                                    }
                                                }/>
                                            </Rating>
                                            <Location>
                                                <LocationOn/>
                                                <LocationText>{data.location}</LocationText>
                                            </Location>
                                        </LeftTopContainer>
                                        <RightTopContainer>
                                            
                                            
                                            <SubTitle>Cost: £{data.price}</SubTitle>
                                        </RightTopContainer>
                                        <UpdateServiceButton onClick={(e)=> navigate(`/editService/${id}`)}>
                                             <Icon>
                                              <Edit />
                                              Update
                                             </Icon>
                                              
                                            </UpdateServiceButton>
                                    </TopDetails>
                                </Contents>
                                <Contents>
                                    <MiddleContainer>
                                        <SubTitle>Description</SubTitle>
                                        <MiddleContainerText>{data.description}</MiddleContainerText>
                                        <Hr/>
                                    </MiddleContainer>
                                    <MiddleContainer>
                                        <SubTitle>Timings</SubTitle>
                                        <MiddleContainerText>{data.timings}</MiddleContainerText>
                                        <Hr/>
                                    </MiddleContainer>
                                    <MiddleContainer>
                                        <SubTitle>Photos</SubTitle>
                                        <PhotoSlider photos={photos}/>
                                    </MiddleContainer>
                                </Contents>
                                <Contents>
                                    <SubTitle>Reviews & Ratings</SubTitle>
                                    <ReviewGrid rows={getTemplateRows(reviews)}>
                                        {reviews.map(item => (
                                            <Review key={item.id} item={item}/>
                                        ))}
                                    </ReviewGrid>
                                </Contents>
                            </ServiceContainer>
                        </Main>
                        <Footer/>
              
        </Container>
    );
};

export default Service;
