import React from 'react';
import styled from "styled-components";
import './CarouselStyle.css';

const Container = styled.div `
  width: 25vw;
  height: 200px;
  overflow: hidden;
  border: 0.5px solid black;
  margin: 10px;
  border-radius: 10px;
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Photo = ({photo}) => {
    return (
        <Container>
            <Image src={photo.img} />
        </Container>
    );
};

export default Photo;
