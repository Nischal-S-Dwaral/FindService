import React, { useState} from 'react';
import styled from "styled-components";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import {auth} from "../firebase"
import { display } from '@mui/system';

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
  display: grid;
`;

const Input = styled.input `
  flex: 1;

  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Textarea = styled.textarea `
  flex: 1;
  margin: 20px 10px 0 0;
  padding: 10px;
  min-height: 75px
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

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Registration form
 */
function Register() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate('');
  
  
  const signUp = (e) =>{
    e.preventDefault();
    if (password !== confirmPassword) {
           return setError("Passwords do not match")
         }
      else{
    createUserWithEmailAndPassword(auth, email,password)
    .then((userCred) => {
      const user = userCred.user;
      console.log(user);
      navigate("/login"); //Go to login
    })
    .catch((error) => {
      console.log(error);
    });
  }

    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={signUp}>
                    
                    <Input type="text" placeholder="Company Name" />
                    <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                    {/* <Textarea placeholder="Address" /> */}
                    <Input type="text" placeholder="Address Line 1" />
                    <Input type="text" placeholder="Address Line 2" />
                    <div style={{display:"flex"}}>
                      <Input type="text" placeholder="Country" />
                       <Input type="text" placeholder="Postcode" maxLength={8}/>
                    </div>
                    <Textarea placeholder="Description" />
                    <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    <Input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    {error.length > 0 &&  <span style={{color: "red"}}>{error}</span>}
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;