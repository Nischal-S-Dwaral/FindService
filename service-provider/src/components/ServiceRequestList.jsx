import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { serviceRequests } from "../data";
import { DataGrid } from "@material-ui/data-grid";
import { EditOutlined, VisibilityOutlined } from "@material-ui/icons";
import AddService from '../pages/AddService';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: ${props => props.height}vh;
  width: 100%;
  margin-bottom: 20px;
`;

const DataGridContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 30px;
`;

const Status = styled.div`
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: ${props => props.color};
  color: black;
  cursor: pointer;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ServiceRequestList = ({ properties }) => {


    const navigate = useNavigate('');
    const getColorCodeForStatus = (status) => {
        switch (status) {
            case "Accepted":
                return "dodgerblue";
            case "Rejected":
                return "#ff0000";
            case "Pending Review":
                return "yellow";
            case "Completed":
                return "forestgreen";
            default:
                return "lightgrey";
        }
    }

    const columns = [
        { field: "id", headerName: "Request ID", width: 150 },
        { field: "serviceName", headerName: "Service Name", width: 200 },

        {
            field: "status", headerName: "Status", width: 250,
            renderCell: (params) => {
                return (
                    <Status color={getColorCodeForStatus(params.row.status)}>
                        {params.row.status}
                    </Status>
                )
            }
        },
        {
            field: "action", headerName: "Action", width: 250,
            renderCell: (params) => {
                return (

                    <>
                        <Link to={'/CustomerRequest/' + params.row.id}>
                            <Icon>

                                <VisibilityOutlined />
                            </Icon>
                        </Link>
                        {/* <Icon>
                            <EditOutlined />
                        </Icon></> */}
                    </>
                );
            },
        },
    ];
    const [serviceRequests, setServiceRequests] = useState([]);
    const user = useSelector((state) => state.user.currentUser);
    const id = user.uid

    useEffect(() => {
        const getServiceRequests = async () => {
            try {
                let requestData = '';
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/serviceRequest/getServiceRequestList?serviceProviderId=' + id,
                    headers: {},
                    data: requestData
                };

                const response = await axios.request(config)

                if (response.data.returnCode === "0") {
                    setServiceRequests(response.data.serviceRequestList)
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getServiceRequests()
    }, [id]);

    return (
        <Container height={properties.height}>
            {
                serviceRequests && (
                    <>
                        <DataGridContainer>
                            <DataGrid
                                rows={serviceRequests}
                                columns={columns}
                                pageSize={properties.pageSize}
                                disableSelectionOnClick

                            />
                        </DataGridContainer>
                    </>
                )}
        </Container>

    );
};

export default ServiceRequestList;
