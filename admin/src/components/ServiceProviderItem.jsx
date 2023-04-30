import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const Container = styled.div `
  display: flex;
  height: 200px;
  border: 0.01px groove black;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 15px;
  box-shadow: 0 10px 15px rgba(0,0,0,.1);
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 45vw;
`;

const ContainerText = styled.p `
  margin: 2px 0;
`;

const SubTitle = styled.h2 `
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 25vw;
  font-size: 20px;
`;


/**
 * @author Nischal S D
 * @param item - Each service details
 * @returns {JSX.Element} - Service details card for the service list
 */
const ServiceProviderItem = ({item}) => {
    console.log(item)
    return (
        <Link to={`/service/${item.id}`} style={{ textDecoration: 'none',color: "black" }}>
            <Container>
                <RightContainer>
                    <RightTopContainer>
                        <Title>
                          Service Name: {item.name}
                        </Title>
                        <SubTitle>Description</SubTitle>
                          <ContainerText>{item.description}</ContainerText>
                        <SubTitle> Review Summary</SubTitle>
                          <ContainerText>{item.totalRating}</ContainerText>
                    </RightTopContainer>
                </RightContainer>                
            </Container>
        </Link>
    );
};

export default ServiceProviderItem;
