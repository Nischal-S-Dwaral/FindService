import React from 'react';
import styled from "styled-components";

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
const ServiceRequest = ({ open, onClose, data }) => {
    if (!open) {
        return null;
    }
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
                        <Input id="serviceName" type="text" value={data.serviceName} disabled={true}/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" type="text" value="Electrical Repairs" disabled={true}/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="requestDate">Select Date</Label>
                        <Input id="requestDate" type="date" min={new Date().toISOString().slice(0, 10)}/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="requestTime">Select Time</Label>
                        <Input id="requestTime" type="time"/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" type="text" placeholder="Please provide complete address"/>
                    </LabelWithInput>
                    <LabelWithInput>
                        <Label htmlFor="description">Description</Label>
                        <TextArea
                            id="description" cols={40} rows={10}
                            name="descriptionText" form="serviceRequestForm"
                            placeholder="Please provide clear description..."/>
                    </LabelWithInput>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default ServiceRequest;
