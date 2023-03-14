import React from 'react';
import styled from "styled-components";

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
    background-color: #e9f5f5;
    transform: scale(1.1);
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

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Info>
                <Image src={item.img}/>
            </Info>
            <Title>{item.title}</Title>
        </Container>
    );
};

export default CategoryItem;
