import React from 'react';
import styled from "styled-components";
import {AccountCircleRounded} from "@material-ui/icons";

const Container =styled.div `
  height: 60px;
  background-color: black;
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
                        <MenuItem>Sign In/Register</MenuItem>
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