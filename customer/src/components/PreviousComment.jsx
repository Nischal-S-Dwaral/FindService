import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";

const Container = styled.div `
  display: flex;
  margin: 10px;
`;

const Details = styled.div `
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const CommenterName = styled.p `
  font-weight: bold;
`;

const CommentTimeStamp = styled.p `
  font-size: 12px;
  color: #645d5d;
`;

const CommentText = styled.p ``;

/**
 * @author Nischal S D
 * @param {item} Each comment
 * @returns {JSX.Element} Comment Component
 */
const PreviousComment = ({item}) => {

    return (
        <Container>
            {
                item && (
                    <>
                        <Details>
                            <AccountCircleRounded/>
                        </Details>
                        <Details>
                            <CommenterName>{item.sender}</CommenterName>
                            <CommentTimeStamp>{item.timestamp}</CommentTimeStamp>
                            <CommentText>{item.commentText}</CommentText>
                        </Details>
                    </>
                )
            }
        </Container>
    );
};

export default PreviousComment;
