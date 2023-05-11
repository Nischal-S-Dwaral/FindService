import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Notification from "../components/Notification";
import axios from "axios";

const Container = styled.div ``;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const NotificationContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
  ${mobile({
    margin: "15px",
  })}
`;

const ContentsContainer = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Contents = styled.div `
  border: 0.01px groove lightgrey;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  ${mobile({
    margin: "0",
  })}
`;

const Title = styled.h1 `
  margin-bottom: 10px;
`;

const Subtitle = styled.h3 `
  font-weight: 700;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const SubNotificationContainer = styled.div `
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  max-height: 40vh;
  overflow-y: scroll;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} Page to view all the customers notifications
 * @constructor
 */
const Notifications = () => {

    const [notifications, setNotifications] = useState()
    const [updateServiceRequestNotifications, setUpdateServiceRequestNotifications] = useState([])
    const [reviewRequestNotifications, setReviewRequestNotifications] = useState([])
    const [generalNotifications, setGeneralNotifications] = useState([])

    useEffect(() => {
        /**
         * Get the notification data
         */
        const getNotificationData = async () => {

            try {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/notification/getByID?customerId=Wr0OtFpBPYMbvFxhvRMaEnjH9ad2',
                    headers: { }
                };

                const response = await axios.request(config)

                if (response.data.returnCode === "0") {
                    setNotifications(response.data)
                    setGeneralNotifications(response.data.general)
                    setReviewRequestNotifications(response.data.reviewRequest)
                    setUpdateServiceRequestNotifications(response.data.updatesServiceRequest)
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getNotificationData()
    }, [])

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                {
                    notifications && (
                        <>
                            <NotificationContainer>
                                <Title>Notifications</Title>
                                <ContentsContainer>
                                    {
                                        updateServiceRequestNotifications.length > 0 && (
                                            <>
                                                <Contents>
                                                    <Subtitle>Updates- Service Request</Subtitle>
                                                    <Hr/>
                                                    <SubNotificationContainer>
                                                        {updateServiceRequestNotifications.map( item => (
                                                            <>
                                                                <Notification key={item.id} item={item} />
                                                            </>
                                                        ))}
                                                    </SubNotificationContainer>
                                                </Contents>
                                            </>
                                        )
                                    }
                                    {
                                        reviewRequestNotifications.length > 0 && (
                                            <>
                                                <Contents>
                                                    <Subtitle>Review Requests</Subtitle>
                                                    <Hr/>
                                                    {reviewRequestNotifications.map( item => (
                                                        <>
                                                            <Notification key={item.id} item={item} />
                                                        </>
                                                    ))}
                                                </Contents>
                                            </>
                                        )
                                    }
                                    {
                                        generalNotifications.length > 0 && (
                                            <>
                                                <Contents>
                                                    <Subtitle>General</Subtitle>
                                                    <Hr/>
                                                    {generalNotifications.map( item => (
                                                        <>
                                                            <Notification key={item.id} item={item} />
                                                        </>
                                                    ))}
                                                </Contents>
                                            </>
                                        )
                                    }
                                </ContentsContainer>
                            </NotificationContainer>
                        </>
                    )
                }
            </Main>
            <Footer/>
        </Container>
    );
};

export default Notifications;
