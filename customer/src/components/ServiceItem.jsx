import React from 'react';
import styled from "styled-components";
import {AccessTime, DescriptionOutlined, LocationOn} from "@material-ui/icons";
import StarRating from "./StarRating";
import {CurrencyPound} from "@mui/icons-material";

const Container = styled.div `
  display: flex;
  height: 200px;
  border: 0.2px groove black;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 15px;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
    border: 0.5px solid black;
  }
`;

const LeftContainer = styled.div `
  flex: 1;
`;

const ImageContainer = styled.div `
  width: 25vw;
  height: 100%;
  overflow: hidden;
  border-radius: 15px 0 0 15px;
`;

const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const RightContainer = styled.div `
  flex: 2;
  margin: 15px;
`;

const RightTopContainer = styled.div `
  top: 0;
`;

const Title = styled.h2 `
    margin-bottom: 5px;
`;

const Content = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;

const ContentText = styled.div `
  margin-left: 5px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Description = styled.p `
  margin-left: 5px;
  font-size: 16px;
  width: 45vw;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ServiceItem = ({item}) => {
    console.log(item)
    return (
        <Container>
            <LeftContainer>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
            </LeftContainer>
            <RightContainer>
                <RightTopContainer>
                    <Title>
                        {item.serviceName}
                    </Title>
                    <Content>
                        <StarRating properties={
                            {
                                rating: item.rating
                            }
                        }/>
                    </Content>
                    <Content>
                        <LocationOn/>
                        <ContentText>{item.location}</ContentText>
                    </Content>
                    <Content>
                        <AccessTime/>
                        <ContentText>{item.timings}</ContentText>
                    </Content>
                    <Content>
                        <DescriptionOutlined/>
                        <Description>{item.description}</Description>
                    </Content>
                    <Content>
                        <CurrencyPound/>
                        <ContentText>{item.price}</ContentText>
                    </Content>
                </RightTopContainer>
            </RightContainer>
        </Container>
    );
};

export default ServiceItem;
