import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import StarRating from "./StarRating";
import {Link} from "react-router-dom";

const Container = styled.div `
  width: 100%;
  height: 50vh;
  margin-bottom: 10px;
`;

const InfoWindowContainer = styled.div `
  width: 250px;
  height: 200px;
`;

const InfoWindowImage = styled.img `
  width: 100%;
  height: 110px;
`;

const InfoWindowTitle = styled.h3 ``;

const InfoWindowMoreDetails = styled.div `
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: center;
`;

const ServicesMap = ({services}) => {

    const [activeMarker, setActiveMarker] = useState(null);
    const mapRef = useRef(null);

    const handleActiveMarker = (marker, item) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    useEffect(() => {
        if (services.length > 0 && mapRef.current) {
            const google = window.google;
            const bounds = new google.maps.LatLngBounds();
            services.forEach(({ position }) => bounds.extend(position));
            mapRef.current.fitBounds(bounds);
        }
    }, [services]);

    const handleOnLoad = (map) => {
        mapRef.current = map;
        const google = window.google
        const bounds = new google.maps.LatLngBounds();
        services.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <Container>
            <GoogleMap
                onLoad={handleOnLoad}
                onClick={() => setActiveMarker(null)}
                mapContainerStyle={{ width: "100%", height: "100%" }}
            >
                {
                    services.map(item => (
                        <Marker
                            key={item.id}
                            position={item.position}
                            onClick={() => handleActiveMarker(item.id, item)}
                        >
                            {activeMarker === item.id ? (
                                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                    <InfoWindowContainer>
                                        <InfoWindowImage src={item.photos[0]} />
                                        <InfoWindowTitle>{item.name}</InfoWindowTitle>
                                        <StarRating properties={
                                            {
                                                rating: item.totalRating
                                            }
                                        }/>
                                        <Link to={`/service/${item.id}`}>
                                            <InfoWindowMoreDetails>
                                                More Details
                                            </InfoWindowMoreDetails>
                                        </Link>
                                    </InfoWindowContainer>
                                </InfoWindow>
                            ) : null}
                        </Marker>
                    ))
                }
            </GoogleMap>
        </Container>
    );
};

export default ServicesMap;


