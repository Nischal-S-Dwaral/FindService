import React from 'react';
import styled from "styled-components";
import {HomeRepairService,AccountCircleRounded, AddCircleOutlined, HomeOutlined, ListAltOutlined} from "@mui/icons-material";

const Container = styled.div `
  flex: 1;
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div `
  padding: 20px;
  color: #555;
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

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <ListItem>
                            <Icon>
                                <HomeOutlined />
                                Home
                            </Icon>
                        </ListItem>
                        <ListItem>
                            <Icon>
                               <AccountCircleRounded />
                                Profile
                            </Icon>
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <ListItem>
                            <Icon>
                                <HomeRepairService />
                                Services
                            </Icon>
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Service Requests</Title>
                    <List>
                        <ListItem>
                            <Icon>
                                <AddCircleOutlined />
                                Create Request
                            </Icon>
                        </ListItem>
                        <ListItem>
                            <Icon>
                                <ListAltOutlined />
                                View Requests
                            </Icon>
                        </ListItem>
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Sidebar;
