import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Rating from '@mui/material/Rating';
import {useLocation} from "react-router-dom";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

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

    const searchParams = new URLSearchParams(window.location.search);
    const [demoModal, setDemoModal] = useState(false);


    const handleSubmitButtonClick = async (event) => {
        event.preventDefault();
        setDemoModal(true);
    }

    const handleDemoDialogClose = (event) => {
        event.preventDefault();
        setDemoModal(false);
    };

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
                {
                    demoModal &&
                    <Dialog
                        open={demoModal}
                        onClose={handleDemoDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            ALERT
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                This is just a demo!! Functionality disabled..
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                }
            </Main>
            <Footer/>
        </Container>
    );
};

export default Review;
