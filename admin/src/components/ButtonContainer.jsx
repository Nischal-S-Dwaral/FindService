import React,{useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const AcceptButton = styled.button `
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  ${mobile({
    width: "100%",
  })}
`;

const RejectButton = styled.button `
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  ${mobile({
    width: "100%",
  })}
`;

// Main component that displays the buttons
const ButtonContainer = () => {

  const serviceProviderId = '3q6PJznKMjyAHb6R6g6T'; // replace with the actual review ID
  const statusV = 'Verified'; // replace with the desired review status
  const statusR = 'Rejected';

  const dataR = { serviceProviderId, statusR };
  const dataV = { serviceProviderId, statusV };

  const handleRejectButtonClick = async (event) => {
    event.preventDefault(); // prevents the refresh of the page
    fetch('http://localhost:8080/api/serviceProvider/updateStatus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataR)
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        // handle the error
        console.log(error);
    }); 
  }

  const handleAcceptButtonClick = async (event) => {
    event.preventDefault(); // prevents the refresh of the page
    fetch('http://localhost:8080/api/serviceProvider/updateStatus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataV)
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        // handle the error
        console.log(error);
    }); 
  }

  return (
    <div>
      <AcceptButton onClick={handleAcceptButtonClick}>
                                                Verify
      </AcceptButton>
      <RejectButton onClick={handleRejectButtonClick}>
                                                Reject
      </RejectButton>
    </div>
  );
};

export default ButtonContainer;
