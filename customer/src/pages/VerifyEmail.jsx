import React, {useEffect} from 'react';
import styled from "styled-components";
import {auth} from "../firebase"
import {processSuccess} from "../redux/userRedux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {applyActionCode, onAuthStateChanged} from 'firebase/auth';


const Container = styled.div ``;

const Title = styled.h1 `
`;
const VerifyEmail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log("Inside the Verify email")

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const oobCode = searchParams.get('oobCode');

        async function verifyEmail() {
            try {
                await applyActionCode(auth, oobCode);
                alert('Your email has been verified!');

                // Listen for changes in the user's authentication state
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // The user is signed in, update your Redux state
                        dispatch(processSuccess({
                            uid: user.uid,
                            email: user.email,
                            username: user.displayName
                        }));
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }

        if (oobCode) {
            verifyEmail().then(() => {
                navigate("/login", { replace: true });
            });
        }
    });

    return (
        <Container>
            <Title>Verifying your email...</Title>
        </Container>
    );
};

export default VerifyEmail;
