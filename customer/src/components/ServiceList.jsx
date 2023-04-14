import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import axios from "axios";

const Container = styled.div `
`;

const ErrorMessage = styled.h2 `
`;

const ServiceList = ({filterCategory, filterLocation}) => {

    const [services, setServices] = useState([]);
    const [showServices, setShowServices] = useState(true);

    //deps means this effect will run only if there is a change in the mentioned properties
    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await axios.get(
                    filterCategory ? `http://localhost:8080/api/service/getServiceList?category=${filterCategory}`
                        : `http://localhost:8080/api/service/getServiceList`
                );
                if (response.data.returnCode === "0") {
                    setServices(response.data.serviceList);
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getServices();
    },[filterCategory]);

    useEffect(() => {
        setShowServices(services.length > 0)
    }, [services]);

    return (
        <Container>
            {
                showServices && (
                    <>
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
