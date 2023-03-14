import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";
import {CalendarMonthOutlined} from "@mui/icons-material";
import StarRating from "./StarRating";

const Container = styled.div `
  margin-top: 5px;
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
  width: 95%;
`;

const Details = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 20px;
`;

const Name = styled.div `
  display: flex;
  align-items: center;
  flex:1;
`;

const Date = styled.div `
  display: flex;
  align-items: center;
  flex: 4;
`;

const DetailsText = styled.p `
  margin-left: 5px;
`;

const RatingText = styled.p `
  margin-right: 7px
`;

const ReviewText = styled.div `
  background-color: rgb(251, 251, 255);
  color: black;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  height: -webkit-calc(100% - 80px);
  overflow: hidden;
`;

const Review = ({item}) => {
    return (
        <Container>
            <Details>
                <Name>
                    <AccountCircleRounded/>
                    <DetailsText>{item.username}</DetailsText>
                </Name>
                <Date>
                    <CalendarMonthOutlined/>
                    <DetailsText>{item.date}</DetailsText>
                </Date>
            </Details>
            <Details>
                <RatingText>Rating:</RatingText>
                <StarRating properties={
                {
                    rating: item.rating
                }
            }/>
            </Details>
            <ReviewText>
                {item.comment}
            </ReviewText>
        </Container>
    );
};

export default Review;
