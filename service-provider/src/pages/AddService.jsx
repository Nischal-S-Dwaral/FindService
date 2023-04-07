import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {AddIcon} from "@material-ui/icons";

import {serviceDetails} from "../data";



const Main = styled.div `
  display: flex;
`;


const CreateServiceRequestButton = styled.button `
  color: white;
  background-color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
`;

const SubTitle = styled.h2 `
  font-weight: 700;
`;

const ReviewGrid = styled.div `
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat({$props.columns}, 1fr);
`;
const Container = styled.div `
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div `
  padding: 20px;
  width: 60%;
  background-color: #f5f1f1;
  flex: 4;
  margin: 30px;
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
  margin: 5px 10px 0 0;
  padding: 10px;
`;
const Textarea = styled.textarea `
  flex: 1;
  margin: 5px 10px 0 0;
  padding: 10px;
  min-height: 75px
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
const Select = styled.select `
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option `
`;

const Label = styled.label `
  margin: 20px 10px 0 0;
`;
/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service details page
 */
const AddService = () => {
   
    return (
        <Container>
           <Navbar/>
            <Main>
            <Sidebar/>
          <Wrapper>
          <Title>Fill up the details to create new service</Title>
            <Form>
            <Label>Service Title </Label>            <Input type="text" />
            <Label>Service Description</Label>            <Textarea type="text"/>
            <Label>Category</Label>          
            <Select>
                <Option disabled selected>Service Category</Option>
                <Option value="cleaning">Cleaning</Option>
                <Option value="babySitting">Baby Sitting</Option>
                <Option value="pestControl">Pest Control</Option>
                <Option value="plumbing">Plumbing</Option>
                <Option value="electricalRepairs">Electrical Repairs</Option>
                <Option value="beauty">Beauty</Option>
                <Option value="others">Others</Option>
            </Select>
            <div style={{margin: "20px 10px 0 0"}}><Label>Add Image</Label> <input type="file" multiple /></div>
            <Label>Timings</Label> <Input type="text"/>
            <Label>Price</Label> <Input type="text"/>
            <Label>Areas/Cities of service</Label> <Input type="text"/>
            </Form>
            </Wrapper>
            </Main>
          
        </Container>
    );
};

export default AddService;
