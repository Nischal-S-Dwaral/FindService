import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";
import {CalendarMonthOutlined} from "@mui/icons-material";
import StarRating from "./StarRating";
import {mobile} from "../responsive";

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
  flex: 1;
`;

const DetailsText = styled.p `
  margin-left: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${mobile({
    width: "30vw",
  })}
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

/**
 * @author Nischal S D
 * @param item - Each review object
 * @returns {JSX.Element} One review card component
 */
const Review = ({item}) => {
    return (
        <Container>
            <Details>
                <Name>
                    <AccountCircleRounded/>
                    <DetailsText>{item.customerName}</DetailsText>
                </Name>
                <Date>
                    <CalendarMonthOutlined/>
                    <DetailsText>{item.timeStamp}</DetailsText>
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
