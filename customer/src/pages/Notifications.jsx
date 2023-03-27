import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import {notificationData} from "../data";
import Notification from "../components/Notification";
import NonClickableNotification from "../components/NonClickableNotification";

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
`;

const Contents = styled.div `
  border: 0.01px groove lightgrey;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
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
  max-height: 29vh;
  overflow: hidden;
  overflow-y: scroll;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} Page to view all the customers notifications
 * @constructor
 */
const Notifications = () => {

    const data = notificationData
    const updateServiceRequestNotifications = data.updatesServiceRequest
    const reviewRequestNotifications = data.reviewRequest
    const generalNotifications = data.general

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <NotificationContainer>
                    <Title>Notifications</Title>
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
                    <Contents>
                        <Subtitle>Review Requests</Subtitle>
                        <Hr/>
                        {reviewRequestNotifications.map( item => (
                            <>
                                <Notification key={item.id} item={item} />
                            </>
                        ))}
                    </Contents>
                    <Contents>
                        <Subtitle>General</Subtitle>
                        <Hr/>
                        {generalNotifications.map( item => (
                            <>
                                <NonClickableNotification key={item.id} item={item} />
                            </>
                        ))}
                    </Contents>
                </NotificationContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default Notifications;
