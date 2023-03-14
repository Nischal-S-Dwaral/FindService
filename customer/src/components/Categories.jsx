import React from 'react';
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {categories} from "../data";

const Container = styled.div `
`;

const Wrapper = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1 `
  font-weight: 800;
  padding: 0 30px;
`;

const Hr = styled.hr `
  border: none;
  width: 95%;
  height: 0.5px;
  color: black;
  background-color: black;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            <Wrapper>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Wrapper>
            <Hr/>
        </Container>
    );
};

export default Categories;
