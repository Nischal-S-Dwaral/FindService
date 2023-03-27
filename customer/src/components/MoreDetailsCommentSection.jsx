import React from 'react';
import styled from "styled-components";
import PreviousComment from "./PreviousComment";

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

    const previousMoreDetailsComments = properties.moreDetailsComments

    return (
        <Container>
            <Main>
                <PreviousCommentsContainer>
                    {previousMoreDetailsComments.map(item => (
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
                            placeholder="Please provide your comment..."/>
                        <Button>SUBMIT COMMENT</Button>
                    </AddCommentForm>
                </AddCommentContainer>
            </Main>
        </Container>
    );
};

export default MoreDetailsCommentSection;
