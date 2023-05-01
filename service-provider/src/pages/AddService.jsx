import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import {addService} from "../api/Services"

import {useSelector} from "react-redux";

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
  width: 100%;
  padding: 15px 20px;
  background-color: #dde1dd;
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
const AddService = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser);
    const id = user.uid;

    const [serviceTitle, setServiceTitle] = useState("");
    const [serviceDesc, setServiceDesc] = useState("");
    const [serviceCat, setServiceCat] = useState("");
    const [servicePhotos, setServicePhotos] = useState();
    const [serviceAvailability, setServiceAvailability] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [serviceLocations, setServiceLocations] = useState("");
    const [servicePosition, setServicePosition] = useState("");

    const handleSubmitButtonClick = async (event) => {
        event.preventDefault();

        let bodyFormData = new FormData();
        bodyFormData.append("title", serviceTitle);
        bodyFormData.append("description", serviceDesc);
        bodyFormData.append("category", serviceCat);
        bodyFormData.append("serviceProviderId", id);
        bodyFormData.append("availability", serviceAvailability);
        bodyFormData.append("price", servicePrice);
        bodyFormData.append("location", serviceLocations);
        bodyFormData.append("position", servicePosition);

        for (let i = 0; i < servicePhotos.length; i++) {
            bodyFormData.append("photos", servicePhotos[i])
        }

        const apiResponse = await addService(bodyFormData)
        if (apiResponse != null) {
            console.log("Service added successfully!")
            navigate(`/`)
        } else {
            console.log("Error while getting more details")
        }

    }

    useEffect(() => {
        const getServiceProvider = async () => {
            try {
                let data = '';

                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/serviceProvider/findBySPid?id=' + id,
                    headers: {},
                    data: data
                };

                const response = await axios.request(config)

                if (response.data.returnCode === "0") {
                    console.log(response.data);
                    setServiceLocations(response.data.address);
                    setServicePosition(response.data.position);
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getServiceProvider();
    });

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <Wrapper>
                    {serviceLocations && (
                        <>
                            <Title>Fill up the details to create new service</Title>
                            <Form>
                                <Label>Service Title </Label> <Input type="text"
                                                                     onChange={(e) => setServiceTitle(e.target.value)}/>
                                <Label>Service Description</Label> <Textarea type="text"
                                                                             onChange={(e) => setServiceDesc(e.target.value)}/>
                                <Label>Category</Label>
                                <Select onChange={(e) => setServiceCat(e.target.value)}>
                                    <Option disabled selected>Service Category</Option>
                                    <Option value="cleaning">Cleaning</Option>
                                    <Option value="babySitting">Baby Sitting</Option>
                                    <Option value="pestControl">Pest Control</Option>
                                    <Option value="plumbing">Plumbing</Option>
                                    <Option value="electricalRepairs">Electrical Repairs</Option>
                                    <Option value="beauty">Beauty</Option>
                                    <Option value="others">Others</Option>
                                </Select>
                                <div style={{margin: "20px 10px 0 0"}}><Label>Add Image</Label> <input type="file"
                                                                                                       multiple
                                                                                                       accept="image/png , image/jpeg"
                                                                                                       onChange={(e) => setServicePhotos(e.target.files)}/>
                                </div>
                                <Label>Availability</Label> <Input type="text"
                                                                   onChange={(e) => setServiceAvailability(e.target.value)}/>
                                <Label>Price</Label> <Input type="text"
                                                            onChange={(e) => setServicePrice(e.target.value)}/>
                                <Label>Locations</Label> <Input type="text" value={serviceLocations} disabled={true}/>
                            </Form>
                            <div style={{display: 'flex', padding: '10px'}}>
                                <Button onClick={handleSubmitButtonClick}>Save</Button>
                                <Button onClick={(e) => navigate(`/home/`)}>Cancel</Button>
                            </div>
                        </>)}
                </Wrapper>

            </Main>

        </Container>
    );
};

export default AddService;
