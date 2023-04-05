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

  const [deleted, setDeleted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <div>
      {/* <AcceptButton onClick={handleAccept} />
      <RejectButton onClick={handleReject} /> */}
      <AcceptButton onClick={() => setAccepted(true)}>
                                                Accept
      </AcceptButton>
      <RejectButton onClick={() => setRejected(true)}>
                                                Reject
      </RejectButton>
    </div>
  );
};

export default ButtonContainer;
