import React, {useState} from 'react';
import styled from "styled-components";
import {auth} from "../firebase"
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
          rgba(255,255,255,0.5),
          rgba(255,255,255,0.5)),
  url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsZWFuaW5nJTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div `
  padding: 20px;
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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
    transform-origin: center
  }
`;

const Link = styled.a `
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 1px;
  color: white;
  background-color: white;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Login Page with form
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const signIn = (e) =>{
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email,password)
    .then((userCred) => {
      const user = userCred.user;
      console.log(user);
      navigate("/"); //Go to home
    })
    .catch((error) => {
      console.log(error);
    });
  }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={signIn}>
                    <Input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Username" />
                    <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
                    <Hr/>
                    <Button>REGISTER</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;