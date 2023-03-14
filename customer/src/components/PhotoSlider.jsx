import React from 'react';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Photo from "./Photo";

const Container = styled.div `
  
`;
const PhotoSlider = ({photos}) => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <Container>
            <Carousel breakPoints={breakPoints}>
                {photos.map((photo) => (
                    <Photo photo={photo} key={photo.id}/>
                ))}
            </Carousel>
        </Container>
    );
};

export default PhotoSlider;
