import axios from "axios";

export const getMoreDetailsSPRequest = async (serviceRequestId) => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/commentServiceRequest/getByID?serviceRequestId='+serviceRequestId,
            headers: { }
        };

        const response = await axios.request(config)

        if (response.data.returnCode === "0") {
            return response.data.commentList
        } else {
            console.log(response.data);
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const addMoreDetailsSPRequest = async (data) => {

    try {
        let jsonData = JSON.stringify(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/commentServiceRequest/add',
            headers: {
                'Content-Type': 'application/json'
            },
            data : jsonData
        };

        const response = await axios.request(config)

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