import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div `
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 149px;
  background-color: black;
  position: relative;
  transition: all 0.5s ease;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    color: inherit;
    background-color: #e9f5f5;
    transform: scale(1.01);
    border: 0.5px solid black;
  }
`;

const Info = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Title = styled.h2 `
  color: white;
  height: 100%;
`;

const Image = styled.img `
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

/**
 * @author Nischal S D
 * @param item - Information about the category. It contains the name of the category and the image of the icon for the category.
 * @returns A category card.
 */
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={"/services/" + item.value} style={{ textDecoration: 'none',color: "black" }}>
                <Info>
                    <Image src={item.img}/>
                </Info>
                <Title>{item.title}</Title>
            </Link>
        </Container>
    );
};

export default CategoryItem;
