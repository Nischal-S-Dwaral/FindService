import React, {useState} from 'react';
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {categoryValueToText, serviceRequestData} from "../data";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {getColorCodeForStatus} from "../utils";
import MoreDetailsCommentSection from "../components/MoreDetailsCommentSection";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const Container = styled.div ``;

const Main = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
})}
`;

const Contents = styled.div `
  border: ${props => (props.border === "black" ? "3px solid black": "0.01px groove lightgrey")};
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: ${props => (props.background ? props.background : "none")};
`;

const ServiceRequestContainer = styled.div `
  flex: 4;
  height: 100%;
  overflow: hidden;
  margin: 30px;
`;

const TopContainer = styled.div `
`;

const TopTitleContainer = styled.div `
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;

const TopContainerText = styled.p `
  margin: 5px 0;
`;

const Title = styled.h1 `
  font-weight: 800;
`;

const SubTitle = styled.h3 `
  font-weight: 700;
  margin-right: 10px;
`;

const Hr = styled.hr `
  border: none;
  width: 100%;
  height: 0.05px;
  color: lightgrey;
  background-color: lightgrey;
  margin: 10px 0;
`;

const DeleteButton = styled.button `
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 15px;
`;

/**
 * @author Nischal S D
 * @returns {JSX.Element} - Page for the customer's service request
 * @constructor
 */
const ServiceRequest = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const serviceRequest = serviceRequestData[id];
    const serviceCategoryText = categoryValueToText.get(serviceRequest.serviceCategory);
    const [demoModal, setDemoModal] = useState(false);
    const [deleteButtonDialog, setDeleteButtonDialog] = useState(false)

    const handleDeleteButtonDialogOpen = () => {
        setDeleteButtonDialog(true);
    };

    const handleDemoDialogClose = (event) => {
        event.preventDefault();
        setDemoModal(false);
    };

    const handleDeleteButtonYesDialogClose = () => {
        setDemoModal(true);
    };

    const handleDeleteButtonDialogClose = () => {
        setDeleteButtonDialog(false);
    };

    return (
        <Container>
            <Navbar/>
            <Main>
                <Sidebar/>
                <ServiceRequestContainer>
                    {
                        serviceRequest && (
                            <>
                                <Contents>
                                    <TopContainer>
                                        <TopTitleContainer>
                                            <Title>Request ID: {id}</Title>
                                            <DeleteButton onClick={handleDeleteButtonDialogOpen}>DELETE</DeleteButton>
                                        </TopTitleContainer>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Service</SubTitle>
                                        <TopContainerText>Name: {serviceRequest.serviceName}</TopContainerText>
                                        <TopContainerText>Category: {serviceCategoryText}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Timings</SubTitle>
                                        <TopContainerText>Date: {serviceRequest.date}</TopContainerText>
                                        <TopContainerText>Time: {serviceRequest.time}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Address</SubTitle>
                                        <TopContainerText>{serviceRequest.address}</TopContainerText>
                                        <Hr/>
                                    </TopContainer>
                                    <TopContainer>
                                        <SubTitle>Description</SubTitle>
                                        <TopContainerText>{serviceRequest.description}</TopContainerText>
                                    </TopContainer>
                                </Contents>
                                <Contents background={getColorCodeForStatus(serviceRequest.status)} border="black">
                                    <SubTitle>Status: {serviceRequest.status}</SubTitle>
                                </Contents>
                                <Contents>
                                    <SubTitle>Extra Details</SubTitle>
                                    <MoreDetailsCommentSection properties={
                                        {
                                            customerId: serviceRequest.customerId,
                                            customerName: serviceRequest.customerName,
                                            serviceRequestId: id
                                        }
                                    }/>
                                </Contents>
                                {
                                    deleteButtonDialog &&
                                    <Dialog
                                        open={deleteButtonDialog}
                                        onClose={handleDeleteButtonDialogClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Are you sure??"}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                {"Are you sure you want to delete this service request?"}
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleDeleteButtonYesDialogClose} autoFocus>
                                                YES
                                            </Button>
                                            <Button onClick={handleDeleteButtonDialogClose} autoFocus>
                                                NO
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                }
                                {
                                    demoModal &&
                                    <Dialog
                                        open={demoModal}
                                        onClose={handleDemoDialogClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            ALERT
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                This is just a demo!! Functionality disabled..
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                }
                            </>
                        )
                    }
                </ServiceRequestContainer>
            </Main>
            <Footer/>
        </Container>
    );
};

export default ServiceRequest;
