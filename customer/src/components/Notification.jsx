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
            if (!item.seen) {
                navigate(item.redirectUrl, { replace: true });
            }
        } else {
            if (item.seen) {
                navigate(item.redirectUrl, { replace: true });
            } else {
                let data = JSON.stringify({
                    "notificationId": item.id,
                    "seen": true
                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/notification/updateStatus',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data : data
                };

                await axios.request(config)
                    .then((response) => {
                        if (response.data.returnCode === "0") {
                            navigate(item.redirectUrl, { replace: true });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
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
                                <NotificationText>{item.message}</NotificationText>
                                <NotificationTimestamp>{item.timestamp}</NotificationTimestamp>
                            </Details>
                        </Main>
                    </>
                )
            }
        </Container>
    );
};

export default Notification;
