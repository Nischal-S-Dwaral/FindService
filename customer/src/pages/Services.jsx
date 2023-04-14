import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import ServiceList from "../components/ServiceList";

const Container = styled.div `
`;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const ServiceContainer = styled.div `
  flex: 4;
  margin: 30px;
  ${mobile({
    padding: "0px",
    marginTop: "10px"
  })}
`;

const Title = styled.h1 `
  font-weight: 800;
`;

const FilterContainer = styled.div `
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div `
  margin-bottom: 20px;
  margin-top: 20px;
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;

const FilterText = styled.span `
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
  ${mobile({
    marginBottom: "10px"
  })}
`;

const Select = styled.select `
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    marginBottom: "10px"
  })}
`;

const Option = styled.option `
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - returns the service list page
 */
const Services = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filterCategory, setFilterCategory] = useState(category);
    const [filterLocation, setFilterLocation] = useState("");

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ServiceContainer>
                    <Title>
                        Services
                    </Title>
                    <FilterContainer>
                        <Filter>
                            <FilterText>
                                Filter Services:
                            </FilterText>
                            <Select onChange={(e)=> setFilterCategory(e.target.value)}>
                                <Option disabled selected>Service Category</Option>
                                <Option value="cleaning">Cleaning</Option>
                                <Option value="babySitting">Baby Sitting</Option>
                                <Option value="pestControl">Pest Control</Option>
                                <Option value="plumbing">Plumbing</Option>
                                <Option value="electricalRepairs">Electrical Repairs</Option>
                                <Option value="beauty">Beauty</Option>
                                <Option value="others">Others</Option>
                            </Select>
                            <Select onChange={(e)=> setFilterLocation(e.target.value)}>
                                <Option disabled selected>Location</Option>
                                <Option value="london">London</Option>
                                <Option value="manchester">Manchester</Option>
                                <Option value="southampton">Southampton</Option>
                                <Option value="leeds">Leeds</Option>
                                <Option value="nottingham">Nottingham</Option>
                                <Option value="glasgow">Glasgow</Option>
                                <Option value="bristol">Bristol</Option>
                                <Option value="edinburgh">Edinburgh</Option>
                                <Option value="others">Others</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <ServiceList filterCategory={filterCategory} filterLocation={filterLocation}/>
                </ServiceContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Services;
