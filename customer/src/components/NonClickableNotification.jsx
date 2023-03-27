import React from 'react';
import styled from "styled-components";
import {NotificationsActiveOutlined} from "@material-ui/icons";

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
 * @returns {JSX.Element} - Notification that doesn't need to be clicked and redirected
 * @constructor
 * //TODO: Should remove this
 */
const NonClickableNotification = ({item}) => {
    return (
        <Container>
            {
                item && (
                    <>
                        <Main>
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

export default NonClickableNotification;
