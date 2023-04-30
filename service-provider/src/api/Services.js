import axios from "axios";
import { json } from "react-router-dom";

export const addService = async (formdata) => {
    
    try {
       
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/service/add',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data : formdata
        };

        const response = await axios.request(config)
        console.log(response)
        if (response.data.returnCode === "0") {
            return true;
        } else {
            console.log(response.data);
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateService = async (data) => {
    
    try {
        let jsonData = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/service/updateService',
            headers: {
                'Content-Type': 'application/json'
            },
            data : jsonData
        };

        const response = await axios.request(config)
        console.log(response)
        if (response.data.returnCode === "0") {
            return true;
        } else {
            console.log(response.data);
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}