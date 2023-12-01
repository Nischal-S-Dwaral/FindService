import React, {useState} from 'react';
import styled from "styled-components";
import PreviousComment from "./PreviousComment";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {serviceRequestComments} from "../data";

const Container = styled.div ``;

const Main = styled.div `
  display: flex;
  flex-direction: column;
`;

const PreviousCommentsContainer = styled.div `
  display: flex;
  flex-direction: column;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
`;

const AddCommentContainer = styled.div `
  margin: 10px;
`;

const AddCommentForm = styled.div `
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea `
  width: 100%;
  height: 10vh;
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

/**
 * @author Nischal S D
 * @param {properties} - The customer ID, name and the list of communications happened
 * @returns {JSX.Element} - The comment section type more details section
 */
const MoreDetailsCommentSection = ({properties}) => {

    const serviceRequestId = properties.serviceRequestId
    const [commentText, setCommentText] = useState("");
    const [demoModal, setDemoModal] = useState(false);

    const moreDetailsComments = serviceRequestComments[serviceRequestId];

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
            <Main>
                <PreviousCommentsContainer>
                    {moreDetailsComments.map(item => (
                        <>
                            <PreviousComment key={item.id} item={item}/>
                            <Hr/>
                        </>
                    ))}
                </PreviousCommentsContainer>
                <AddCommentContainer>
                    <AddCommentForm>
                        <TextArea
                            id="comment" cols={40} rows={10}
                            name="commentText"
                            placeholder="Please provide your comment..."
                            onChange={(e)=> setCommentText(e.target.value)}
                        />
                        <Button onClick={handleSubmitButtonClick}>SUBMIT COMMENT</Button>
                    </AddCommentForm>
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
                </AddCommentContainer>
            </Main>
        </Container>
    );
};

export default MoreDetailsCommentSection;
