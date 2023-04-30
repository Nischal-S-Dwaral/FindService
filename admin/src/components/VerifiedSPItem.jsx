import React from 'react';
import styled from "styled-components";
import {DescriptionOutlined, LocationOn} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {getColorCodeForStatus} from "../utils";

const Container = styled.div `
  display: flex;
  height: 200px;
  border: 0.01px groove black;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 15px;
  box-shadow: 0 10px 15px rgba(0,0,0,.1);

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
    border: 0.5px solid black;
  }
`;

const LeftContainer = styled.div `
  flex: 1;
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

const Content = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;

const Contents = styled.div `
  border: ${props => (props.border === "black" ? "3px solid black": "0.01px groove lightgrey")};
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
  width: 12%;
`;

const ContentText = styled.div `
  margin-left: 5px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 45vw;
`;

const SubTitle = styled.h3 `
  font-weight: 700;
  margin-right: 10px;
`;

/**
 * @author Nischal S D
 * @param item - Each service details
 * @returns {JSX.Element} - Service details card for the service list
 */
const VerifiedSPItem = ({item}) => {
    console.log(item)
    return (
        <Link to={`/serviceprovider/${item.id}`} style={{ textDecoration: 'none',color: "black" }}>
            <Container>
                <LeftContainer>
                    {/* <ImageContainer>
                        <Image src={item.img}/>
                    </ImageContainer> */}
                </LeftContainer>
                <RightContainer>
                    <RightTopContainer>
                        <Title>
                            {item.name}
                        </Title>
                        <Content>
                            <LocationOn/>
                            <ContentText>{item.address}</ContentText>
                        </Content>
                        {/* <Content>
                            <AccessTime/>
                            <ContentText>{item.timings}</ContentText>
                        </Content> */}
                        <Content>
                            <DescriptionOutlined/>
                            <ContentText>{item.description}</ContentText>
                        </Content>
                        <Contents background={getColorCodeForStatus(item.approvalStatus)} border="black">
                          <SubTitle>{item.approvalStatus}</SubTitle>
                        </Contents>
                    </RightTopContainer>
                </RightContainer>
            </Container>
        </Link>
    );
};

export default VerifiedSPItem;
