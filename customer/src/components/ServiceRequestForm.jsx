import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {categoryValueToText} from "../data";
import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const Container = styled.div `
  background-color: rgba(0,0,0,0.3);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div `
  padding: 20px;
  width: 28vw;
  ${mobile({
    width: "70vw"
  })}
  background-color: black;
  color: white;
  height: 88vh;
  border-radius: 15px;
  box-shadow: 0 0 18px 0 rgba(0,0,0,0.75)
`;

const Header = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const CloseButton = styled.div `
  color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1000;
  cursor: pointer;
`;

const Form = styled.form `
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 20px
`;

const Label = styled.label `
`;

const Input = styled.input `
  margin: 2px 0 10px 0;
  padding: 10px;
  width: 100%;
`;

const TextArea = styled.textarea `
  margin: 2px 0 10px 0;
  padding: 10px;
  width: 100%;
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
    background-color: lawngreen;
  }
`;

const LabelWithInput = styled.div `
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

/**
 * @author Nischal S D
 * @param open
 * @param onClose
 * @param data -
 * @returns {JSX.Element|null} - Modal component which contains the form for creating the service request
 */
const ServiceRequestForm = ({ open, onClose, data }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    let categoryText = categoryValueToText.get(data.category)
    const [demoModal, setDemoModal] = useState(false);

    const handleTimeChange = (event) => {
        const timeValue = event.target.value;
        const amPm = timeValue.slice(-2);
        const time = timeValue.slice(0, -3);
        setTime(time + ":" + amPm);
    };

    const handleCreateButtonClick = async (event) => {
        event.preventDefault(); // prevents the refresh of the page
        setDemoModal(true);
    }

    if (!open) {
        return null;
    }

    const handleDemoDialogClose = (event) => {
        event.preventDefault();
        setDemoModal(false);
    };

    return (
        <Container onClick={onClose}>
            <Wrapper onClick={(e) => {
                e.stopPropagation();}
            }>
                <Header>
                    <Title>Create a Service Request</Title>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </Header>
                <Form id="serviceRequestForm">
                    <LabelWithInput>
                        <Label htmlFor="serviceName">Service Name</Label>
                        <Input id="serviceName" type="text" value={data.name} disabled={true}/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" type="text" value={categoryText} disabled={true}/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="requestDate">Select Date</Label>
                        <Input id="requestDate" type="date"
                               min={new Date().toISOString().slice(0, 10)}
                               onChange={(e)=> setDate(e.target.value)}
                        />
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="requestTime">Select Time</Label>
                        <Input id="requestTime" type="time"
                               onChange={handleTimeChange}
                        />
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" type="text"
                               placeholder="Please provide complete address"
                               onChange={(e)=> setAddress(e.target.value)}
                        />
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="description">Description</Label>
                        <TextArea
                            id="description" cols={40} rows={10}
                            name="descriptionText" form="serviceRequestForm"
                            placeholder="Please provide clear description..."
                            onChange={(e)=> setDescription(e.target.value)}
                        />
                    </LabelWithInput>
                    <Button onClick={handleCreateButtonClick}>CREATE</Button>
                </Form>
            </Wrapper>
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
        </Container>
    );
};

export default ServiceRequestForm;