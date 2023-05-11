import React from 'react';
import styled from "styled-components";
import {DescriptionOutlined, LocationOn} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {getColorCodeForStatus} from "../utils";

const Container = styled.div `
  display: flex;
  height: 100px;
  border: 0.01px groove black;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-bottom: 10px;
  box-shadow: 0 10px 15px rgba(0,0,0,.1);

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.05);
    border: 0.5px solid black;
  }
`;

const LeftContainer = styled.div `
  flex: 0.5;
`;

const RightContainer = styled.div `
  flex: 1;
  margin: 10px;
`;

const RightTopContainer = styled.div `
  top: 1;
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
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
  width: 12%;
`;

const ContentText = styled.div `
  margin-left: 8px;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 45vw;
`;

const SubTitle = styled.h3 `
  font-weight: 700;
  margin-right: 12px;
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
                <RightContainer>
                    <RightTopContainer>
                        <Content>
                          <Title>
                              {item.name}
                          </Title>
                          <Contents background={getColorCodeForStatus(item.approvalStatus)} border="black">
                            <SubTitle>{item.approvalStatus}</SubTitle>
                          </Contents>
                        </Content> 
                        <Content>
                            <LocationOn/>
                            <ContentText>{item.address}</ContentText>
                        </Content>
                        <Content>
                            <DescriptionOutlined/>
                            <ContentText>{item.description}</ContentText>
                        </Content>
                    </RightTopContainer>
                </RightContainer>
            </Container>
        </Link>
    );
};

export default VerifiedSPItem;
