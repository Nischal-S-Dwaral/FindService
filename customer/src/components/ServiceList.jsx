import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import ServicesMap from "./ServicesMap";
import {servicesListData} from "../data";

const Container = styled.div `
`;

const ErrorMessage = styled.h2 `
`;

const ServiceList = ({filterCategory}) => {

    const servicesList = servicesListData;

    const [services, setServices] = useState([]);
    const [showServices, setShowServices] = useState(true);

    useEffect(() => {
        if (filterCategory) {
            setServices(servicesList.filter(service => service.category === filterCategory))
        } else {
            setServices(servicesList);
        }
    },[filterCategory]);

    useEffect(() => {
        setShowServices(services.length > 0)
    }, [services]);

    return (
        <Container>
            {
                showServices && (
                    <>
                        <ServicesMap services={services}/>
                        {services.map(item => (
                            <ServiceItem item={item} key={item.id}/>
                        ))}
                    </>
                )
            }
            {
                !showServices && (
                    <>
                        <ErrorMessage>
                            No services for these filters!!
                        </ErrorMessage>
                    </>
                )
            }
        </Container>
    );
};

export default ServiceList;
