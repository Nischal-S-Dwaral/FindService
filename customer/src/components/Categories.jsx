import React from 'react';
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {categories} from "../data";
import {mobile} from "../responsive";

const Container = styled.div `
`;

const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1 `
  font-weight: 800;
  margin-top: 10px;
  ${mobile({
    marginTop: "10px"
  })}
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} Component with Categories Header and List of Category Item Components for the Home Page
 */
const Categories = () => {
    return (
        <Container>
            <Title>Categories</Title>
            <Wrapper>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>
    );
};

export default Categories;
