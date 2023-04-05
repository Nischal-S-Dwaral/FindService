import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";
import {mobile} from "../responsive";

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
    opacity: 0
  })}
`;

const Right = styled.div `
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  ${mobile({
    opacity: 0
  })}
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} Navbar component, which is displayed at the top of all the pages
 */
const Navbar = () => {
    {
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
                        <MenuItemText>Sign In/Register</MenuItemText>
                        <MenuItem>
                            <AccountCircleRounded/>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        );
    }
}

export default Navbar;