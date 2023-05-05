import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import axios from "axios";
import {useSelector} from "react-redux";

const Container = styled.div `
`;

const ErrorMessage = styled.h2 `
    margin: 30px;
    text-align: center;
`;

const ServiceList = () => {

    const [services, setServices] = useState([]);
    const [showServices, setShowServices] = useState(true);
  const user = useSelector((state) => state.user.currentUser);
    
    //deps means this effect will run only if there is a change in the mentioned properties
    useEffect(() => {
        const getServices = async () => {
            try {
                let data = '';
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/service/getServiceListByServiceProvider?serviceProviderId='+user.uid,
                    headers: { },
                    data : data
                  };
                  
                 const response =  await axios.request(config)
            
                  
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
    });

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
                            You have not created any Services.<><br></br></>
                            Get started by adding new services. Click on Add Service from Menu.
                        </ErrorMessage>
                    </>
                )
            }
        </Container>
    );
};

export default ServiceList;
