import React from 'react';
import styled from "styled-components";
import {NotificationsActiveOutlined} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Container = styled.div ``;

const Main = styled.div `
  display: flex;
  padding: 10px;
  background-color: #f3efef;
  border: 0.5px solid black;
  border-radius: 15px;
  margin-bottom: 3px;
`;

const Details = styled.div `
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const NotificationText = styled.p ``;

const NotificationTimestamp = styled.p `
  font-size: 12px;
  color: #645d5d;
`;

/**
 * @author Nischal S D
 * @param item
 * @returns {JSX.Element} - A notification component
 */
const Notification = ({item}) => {

    const navigate = useNavigate();

    const handleClick = async (item) => {
        if (item.type === "review") {
            navigate(item.redirectUrl, { replace: true });
        }
    };

    return (
        <Container>
            {
                item && (
                    <>
                        <Main onClick={() => handleClick(item)}>
                            <Details>
                                <NotificationsActiveOutlined/>
                            </Details>
                            <Details>
                                <NotificationText>{item.notificationText}</NotificationText>
                                <NotificationTimestamp>{item.notificationTimeStamp}</NotificationTimestamp>
                            </Details>
                        </Main>
                    </>
                )
            }
        </Container>
    );
};

export default Notification;
