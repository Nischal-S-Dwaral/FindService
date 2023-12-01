import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";
import {CircleNotifications} from "@mui/icons-material";
import {Badge} from "@material-ui/core";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const Container =styled.div `
  height: 60px;
  background-color: black;
  ${mobile({
    height: "50px",
    display: "flex"
  })}
`;

const Wrapper = styled.div `
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div `
  flex: 1;
  align-items: center;
  display: flex;
`;

const Icon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const IconText = styled.h2 `
  font-weight: bold;
`;

const Logo = styled.h1 `
  font-weight: bold;
  color: white;
  ${mobile({
    opacity: 0,
    width: "40px"
  })}
`;

const Right = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 3
  })}
`

const MenuItem = styled.div `
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  font-weight: bold;
`;

const MenuItemText = styled.div `
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  font-weight: bold;
`;

const ProfileDropdown = styled.div `
  position: absolute;
  top: 65px;
  right: 2px;
  background-color: #e0dbdb;
  border-radius: 10px;
  padding: 10px 15px;
  width: 250px;
  color: black;
  border: 1px solid #837272;
  z-index: 1;
  display: flex;
  flex-direction: column;
  
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? "visible" : "hidden")};
  transform: ${props => (props.active ? "translateY(0)" : "translateY(-20px)")};
  transition: 0.5s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: -12px;
    right: 18px;
    height: 20px;
    width: 20px;
    background-color: #e0dbdb;
    transform: rotate(45deg);
    border-left: 1px solid #837272;
    border-top: 1px solid #837272;
  }
`;

const DropdownTopContainer = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LetterImage = styled.div `
  flex: 1;
  height: 60px;
  width: 60px;
  background-color: #e8cba7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-right: 10px;
`;

const DropdownRightContainer = styled.div `
  flex: 2;
  display: flex;
  flex-direction: column;
  white-space: normal;
  overflow: hidden;
`;

const UserName = styled.h3 ``;

const UserEmail = styled.p ``;

const Button = styled.button `
  width: 100%;
  border: none;
  padding: 10px 10px;
  background-color: #e30903;
  color: black;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.5s ease;
  font-size: 16px;

  &:hover {
    transform: scale(1.1);
    transform-origin: center;
    color: white;
  }
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} Navbar component, which is displayed at the top of all the pages
 */
const Navbar = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const notifications = 5
    const [demoModal, setDemoModal] = useState(false);

    const handleLogoutButtonClick = (event) => {
        event.preventDefault();
        setDemoModal(true);
    }

    const handleDemoDialogClose = (event) => {
        event.preventDefault();
        setDemoModal(false);
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Icon>
                        <IconText>FS</IconText>
                    </Icon>
                    <Logo>FIND A SERVICE</Logo>
                </Left>
                <Right>
                    <Link to="/notifications" style={{ textDecoration: 'none',color: "black" }}>
                        <MenuItem>
                            <Badge badgeContent={notifications} color="primary" overlap="rectangular">
                                <CircleNotifications/>
                            </Badge>
                        </MenuItem>
                    </Link>
                    <MenuItemText>Hello, Demo</MenuItemText>
                    <MenuItem>
                        <AccountCircleRounded onClick={() => {setOpenDropdown(!openDropdown)}}/>
                        <ProfileDropdown active={openDropdown}>
                            <DropdownTopContainer>
                                <LetterImage>D</LetterImage>
                                <DropdownRightContainer>
                                    <UserName>Demo</UserName>
                                    <UserEmail>demo@gmail.com</UserEmail>
                                </DropdownRightContainer>
                            </DropdownTopContainer>
                            <Button onClick={handleLogoutButtonClick}>LOGOUT</Button>
                        </ProfileDropdown>
                    </MenuItem>
                </Right>
                {
                    demoModal &&
                    <Dialog
                        open={demoModal}
                        onClose={handleDemoDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            ALERT
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                This is just a demo!! Functionality disabled..
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                }
            </Wrapper>
        </Container>
    );
}

export default Navbar;