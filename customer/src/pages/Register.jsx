import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

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
  ${mobile({
    width: "85%",
  })}
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Registration form
 */
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notMatchingPassword, setNotMatchingPassword] = useState(false)
    const error = false;
    const errorMessage = "This is an error message";
    const [demoModal, setDemoModal] = useState(false);

    /**
     * function to handle register button click
     */
    const handleRegisterButtonClick = (event) => {
        event.preventDefault(); // prevents the refresh of the page
        setDemoModal(true);
    };

    const handleErrorDialogClose = (event) => {
        event.preventDefault();
    };

    const handleNotMatchingPwdDialogClose = () => {
        setNotMatchingPassword(false);
    };

    const handleDemoDialogClose = (event) => {
        event.preventDefault();
        setDemoModal(false);
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="text" placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input type="email" placeholder="Email"
                           onChange={(e)=> setEmail(e.target.value)}
                    />
                    <Input type="password" placeholder="Password"
                           onChange={(p) => setPassword(p.target.value)}
                    />
                    <Input type="password" placeholder="Confirm Password"
                           onChange={(p) => setConfirmPassword(p.target.value)}
                    />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button
                        onClick={handleRegisterButtonClick}>
                        CREATE
                    </Button>
                    {
                        error &&
                        <Dialog
                            open={error}
                            onClose={handleErrorDialogClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Error while creating account!!"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {errorMessage}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleErrorDialogClose} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    }
                    {
                        notMatchingPassword &&
                        <Dialog
                            open={notMatchingPassword}
                            onClose={handleNotMatchingPwdDialogClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Error while creating account!!"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    {"The passwords don't match!!"}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleNotMatchingPwdDialogClose} autoFocus>
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                    }
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
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;