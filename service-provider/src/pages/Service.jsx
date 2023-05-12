import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import { LocationOn, Edit } from "@material-ui/icons";
import Review from "../components/Review";
import PhotoSlider from "../components/PhotoSlider";
import axios from "axios";
import {mobile} from "../responsive";

const Container = styled.div`
`;

const Main = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ServiceContainer = styled.div`
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
`;

const Contents = styled.div`
  border: 0.01px groove lightgrey;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
`;

const TopDetails = styled.div`
  margin-bottom: 10px;
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const LeftTopContainer = styled.div`
  flex: 3;
`;

const Title = styled.h1`
  font-weight: 800;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const TextRating = styled.div`
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.div`
  margin-left: 5px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RightTopContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
`;

const MiddleContainer = styled.div`
`;

const MiddleContainerText = styled.p`
  margin: 5px 0;
`;

const Hr = styled.hr`
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const UpdateServiceButton = styled.div`
  color: blue;
  padding: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

const SubTitle = styled.h2`
  font-weight: 700;
`;

const ReviewGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat({$props.columns}, 1fr);
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const IconText = styled.h2`
  font-weight: bold;
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service details page
 */
const Service = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [service, setService] = useState({});
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0.0);

  useEffect(() => {
   
    const getService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/service/findById?id=${id}`
        );
        if (response.data.returnCode === "0") {
          setService(response.data);
          /**
           * Setting the photos array
           */
          console.log(response.data);
          setPhotos(response.data.photos);
          setRating(response.data.numberOfRatings !== "0"
            ? parseFloat(response.data.totalRating) / parseFloat(response.data.numberOfRatings)
            : 0.0
          )
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getService()

    /**
     * Get the reviews list
     */
    const getReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/review/getReviewList?serviceId=${id}`
        );
        if (response.data.returnCode === "0") {
          setReviews(response.data.reviews);
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getReviews()
  },[id]);
console.log(service.name);
  const getTemplateRows = (reviews) => {
    return Math.ceil(reviews.length / 2);
  }

  const [openServiceRequestModal, setOpenServiceRequestModal] = useState(false);


  return (
    <Container>
      {
        service && (
          <>
              <Navbar />
                  <Main>
                    <Sidebar />
                    <ServiceContainer>
                      <Contents>
                        <TopDetails>
                          <LeftTopContainer>
                            <Title>{service.name}</Title>
                            <Rating>
                              <TextRating>{rating}</TextRating>
                              <StarRating properties={
                                {
                                  rating: rating
                                }
                              } />
                            </Rating>
                            <Location>
                              <LocationOn />
                              <LocationText>{service.location}</LocationText>
                            </Location>
                          </LeftTopContainer>
                          <RightTopContainer>
                            <SubTitle>Cost: £{service.price}</SubTitle>
                          </RightTopContainer>
                          <UpdateServiceButton onClick={(e) => navigate(`/editService/${id}`)}>
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
                          <MiddleContainerText>{service.description}</MiddleContainerText>
                          <Hr />
                        </MiddleContainer>
                        <MiddleContainer>
                          <SubTitle>Timings</SubTitle>
                          <MiddleContainerText>{service.availability}</MiddleContainerText>
                          <Hr />
                        </MiddleContainer>
                       
                        {
                          photos && photos.length > 0 && (
                            <>
                              <MiddleContainer>
                                <SubTitle>Photos</SubTitle>
                                <PhotoSlider photos={photos} />
                              </MiddleContainer>
                            </>
                          )
                        }
                      </Contents>
                       {
                        reviews && reviews.length > 0 && (
                          <>
                            <Contents>
                              <SubTitle>Reviews & Ratings</SubTitle>
                              <ReviewGrid rows={getTemplateRows(reviews)}>
                                {reviews.map(item => (
                                  <Review key={item.id} item={item} />
                                ))}
                              </ReviewGrid>
                            </Contents>
                          </>
                        )
                      } 

                    </ServiceContainer>
                  </Main>
                  <Footer />
          </>
        )
      }
    </Container>
  );
};

export default Service;
