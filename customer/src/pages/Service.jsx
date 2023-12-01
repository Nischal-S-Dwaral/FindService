import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import {LocationOn} from "@material-ui/icons";
import Review from "../components/Review";
import PhotoSlider from "../components/PhotoSlider";
import ServiceRequestForm from "../components/ServiceRequestForm";
import {mobile} from "../responsive";
import {reviewsData, servicesListData} from "../data";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ServiceContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
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
  justify-content: space-around;
  ${mobile({
    alignItems: "flex-start",
  })}
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

const CreateServiceRequestButton = styled.button `
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

const SubTitle = styled.h2 `
  font-weight: 700;
`;

const ReviewGrid = styled.div `
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
  grid-template-rows: repeat({$props.columns}, 1fr);
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service details page
 */
const Service = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const service = servicesListData[id];
    const photos = service.photos;
    const rating = service.numberOfRatings !== "0"
            ? (parseFloat(service.totalRating) / parseFloat(service.numberOfRatings)).toFixed(2)
            : 0.0;
    const reviews = reviewsData[id];

    const getTemplateRows = (reviews) => {
        return Math.ceil(reviews.length / 2);
    }

    const [openServiceRequestModal, setOpenServiceRequestModal] = useState(false);

    return (
        <Container>
            {
                service && (
                    <>
                        {
                            openServiceRequestModal && (
                                <>
                                    <ServiceRequestForm
                                        open={openServiceRequestModal}
                                        onClose={() => setOpenServiceRequestModal(false)}
                                        data={service}
                                    />
                                </>
                            )
                        }
                        {
                            !openServiceRequestModal && (
                                <>
                                    <Navbar/>
                                    <Main>
                                        <Sidebar/>
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
                                                            }/>
                                                        </Rating>
                                                        <Location>
                                                            <LocationOn/>
                                                            <LocationText>{service.location}</LocationText>
                                                        </Location>
                                                    </LeftTopContainer>
                                                    <RightTopContainer>
                                                        <SubTitle>Cost: £{service.price}</SubTitle>
                                                        <CreateServiceRequestButton onClick={() => setOpenServiceRequestModal(true)}>
                                                            Create a service request
                                                        </CreateServiceRequestButton>
                                                    </RightTopContainer>
                                                </TopDetails>
                                            </Contents>
                                            <Contents>
                                                <MiddleContainer>
                                                    <SubTitle>Description</SubTitle>
                                                    <MiddleContainerText>{service.description}</MiddleContainerText>
                                                    <Hr/>
                                                </MiddleContainer>
                                                <MiddleContainer>
                                                    <SubTitle>Timings</SubTitle>
                                                    <MiddleContainerText>{service.availability}</MiddleContainerText>
                                                    <Hr/>
                                                </MiddleContainer>
                                                {
                                                    photos && photos.length > 0 && (
                                                        <>
                                                            <MiddleContainer>
                                                                <SubTitle>Photos</SubTitle>
                                                                <PhotoSlider photos={photos}/>
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
                                                                    <Review key={item.id} item={item}/>
                                                                ))}
                                                            </ReviewGrid>
                                                        </Contents>
                                                    </>
                                                )
                                            }
                                        </ServiceContainer>
                                    </Main>
                                    <Footer/>
                                </>
                            )
                        }
                    </>
                )
            }
        </Container>
    );
};

export default Service;
