import React from 'react';
import styled from "styled-components";

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
          rgba(255,255,255,0.5), 
          rgba(255,255,255,0.5)),
  url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60") 
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div `
  padding: 20px;
  width: 40%;
  background-color: black;
  color: white;
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span `
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button `
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: forestgreen;
  color: black;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 15px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;