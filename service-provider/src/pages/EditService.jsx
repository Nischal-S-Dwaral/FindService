import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import axios from "axios";
import { updateService } from "../api/Services"

const Main = styled.div`
  display: flex;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 60%;
  background-color: #f5f1f1;
  flex: 4;
  margin: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
`;

const Input = styled.input`
  flex: 1;
  margin: 5px 10px 0 0;
  padding: 10px;
`;
const Textarea = styled.textarea`
  flex: 1;
  margin: 5px 10px 0 0;
  padding: 10px;
  min-height: 75px
`;


const Button = styled.button`
width: 50%;
border: none;
padding: 15px 20px;
background-color: #787e78;
color: black;
cursor: pointer;
margin: 10px;
transition: all 0.5s ease 0s;
  &:hover {
    transform: scale(1.1);
  }
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option`
`;

const Label = styled.label`
  margin: 20px 10px 0 0;
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service details page
 */
const EditService = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [service, setService] = useState({});

  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [serviceAvailability, setServiceAvailability] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceLocations, setServiceLocations] = useState("");

  useEffect(() => {

    const getService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/service/findById?id=${id}`
        );
        if (response.data.returnCode === "0") {
          setService(response.data);
          setServiceAvailability(response.data.availability)
          setServiceLocations(response.data.location)
            setServicePrice(response.data.price)
            setServiceDesc(response.data.description)
            setServiceTitle(response.data.name)
            
        } else {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getService()
  }, [id]);


  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();

    const apiResponse = await updateService({
      "serviceId": id,
      "location": serviceLocations,
      "description": serviceDesc,
      "price": servicePrice,
      "availability": serviceAvailability
    })
    if (apiResponse != null) {
      console.log("Service added successfully!")
      navigate(`/`)
    } else {
      console.log("Error while getting more details")
    }
  }

  return (

    <Container>
      {
        service && (
          <>
            <Navbar />
            <Main>
              <Sidebar />
              <Wrapper>
                <Title>Fill up the details to create new service</Title>
                <Form>
                  <Label>Service Title </Label>            <Input type="text" disabled defaultValue={service.name} />
                  <Label>Service Description</Label>            <Textarea type="text" defaultValue={service.description} onChange={(e) => setServiceDesc(e.target.value)} />
                  <Label>Availability</Label> <Input type="text" defaultValue={service.availability} onChange={(e) => setServiceAvailability(e.target.value)} />
                  <Label>Price</Label> <Input type="text" defaultValue={service.price} onChange={(e) => setServicePrice(e.target.value)} />
                  <Label>Location</Label> <Input type="text" defaultValue={service.location} onChange={(e) => setServiceLocations(e.target.value)} />
                  <div style={{ display: 'flex', padding: '10px' }}>
                    <Button onClick={handleSubmitButtonClick}>Save</Button>
                    <Button onClick={(e) => navigate(`/service/${id}`)}>Cancel</Button>
                  </div>

                </Form>
              </Wrapper>
            </Main>
          </>
        )}
    </Container>
  );
};

export default EditService;
