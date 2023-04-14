import React from 'react';
import styled from "styled-components";
import {
    HomeRepairService,
    HomeOutlined,
    ListAltOutlined,
    CircleNotifications
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {mobile} from "../responsive";

const Container = styled.div `
  flex: 1;
  overflow: hidden;
  overflow-y: hidden;
`;

const Wrapper = styled.div `
  padding: 20px;
  color: #555;
  background-color: rgb(251, 251, 255);
  top: 50px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  ${mobile({
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px 0 0 0"
  })}
`;

const Menu = styled.div `
  margin-bottom: 20px;
`;

const Title = styled.h3 `
  font-size: 13px;
  color: rgb(187,186,186);
`;

const List = styled.ul `
  list-style: none; 
  padding: 5px;
`;

const ListItem = styled.li `
  padding: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: rgb(240, 240, 255);
  }
  
  &:active {
    background-color: rgb(240, 240, 255);
  }
`;

const Icon =  styled.div `
  margin-right: 5px;
  font-size: 14px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  text-indent: 5px;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} Sidebar component, which is displayed on the left side of all the pages
 */
const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <Link to="/" style={{ textDecoration: 'none',color: "black" }}>
                            <ListItem>
                                <Icon>
                                    <HomeOutlined />
                                    Home
                                </Icon>
                            </ListItem>
                        </Link>
                        <Link to="/notifications" style={{ textDecoration: 'none',color: "black" }}>
                            <ListItem>
                                <Icon>
                                    <CircleNotifications />
                                    Notifications
                                </Icon>
                            </ListItem>
                        </Link>
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <Link to="/services" style={{ textDecoration: 'none',color: "black" }}>
                            <ListItem>
                                <Icon>
                                    <HomeRepairService />
                                    Services
                                </Icon>
                            </ListItem>
                        </Link>
                        <Link to="/requests" style={{ textDecoration: 'none',color: "black" }}>
                            <ListItem>
                                <Icon>
                                    <ListAltOutlined />
                                    View Requests
                                </Icon>
                            </ListItem>
                        </Link>
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Sidebar;
