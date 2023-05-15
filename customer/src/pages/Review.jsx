import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Rating from '@mui/material/Rating';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
})}
`;

const ReviewContainer = styled.div `
  flex: 4;
  margin: 30px;
  ${mobile({
    padding: "0px",
    marginTop: "10px"
})}
`;

const Title = styled.h1 `
  font-weight: 800;
  margin-bottom: 10px;
`;

const ReviewLeftContainer = styled.div `
  flex: 2;
  flex-direction: column;
`;

const Text = styled.span `
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  ${mobile({
    marginBottom: "10px"
})}
`;

const TextArea = styled.textarea `
  width: 100%;
  height: 10vh;
`;

const SectionContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Button = styled.button `
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 15px;
  transition: all 0.5s ease;
`;

const Review = () => {

    const location = useLocation();
    const serviceId = location.pathname.split("/")[2];
    const [rating, setRating] = useState(0);
    const [commentText, setCommentText] = useState("");
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(window.location.search);
    const notificationId = searchParams.get('nid');

    const handleSubmitButtonClick = async (event) => {
        event.preventDefault(); // prevents the refresh of the page

        async function fetchData() {
            let data = JSON.stringify({
                "serviceId": serviceId,
                "customerName": user.username,
                "rating": rating,
                "comment": commentText,
                "notificationId": notificationId
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/review/add',
                headers: {
                    'Content-Type': 'application/json'
                },
                data : data
            };

            const apiResponse = axios.request(config)
            if (apiResponse != null) {
                navigate("/", { replace: true })
            } else {
                console.log("Error while getting more details")
            }
        }
        fetchData().then(() => setCommentText(""))
    }

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ReviewContainer>
                    <ReviewLeftContainer>
                        <Title>Review for : {serviceId}</Title>
                        <SectionContainer>
                            <Text>Rating</Text>
                            <Rating name="no-value" value={rating} onChange={(event, newValue) => {
                                setRating(newValue);
                            }}/>
                        </SectionContainer>
                        <SectionContainer>
                            <Text>Comment</Text>
                            <TextArea
                                id="comment" cols={40} rows={10}
                                name="commentText"
                                placeholder="Please provide your comment..."
                                onChange={(e)=> setCommentText(e.target.value)}
                            />
                        </SectionContainer>
                        <Button onClick={handleSubmitButtonClick}>SUBMIT COMMENT</Button>
                    </ReviewLeftContainer>
                </ReviewContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Review;
