import {processFailure, processStart, processSuccess} from "../redux/userRedux";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import {auth} from "../firebase"
import axios from "axios";
/**
 * Call firebase create user and does redux actions
 * @param dispatch
 * @param user
 * @returns {Promise<void>}
 */
export const register = async (dispatch, user) => {
    dispatch(processStart());
    try {
        const response = await createUserWithEmailAndPassword(auth, user.email, user.password)
        dispatch(processSuccess({
            uid : response.user.uid,
            email : response.user.email,
            username : user.username,
            status: null
        }));
       
         console.log(response.user.uid)
        const apiResponse = await createServiceProvider({
            "email": user.email,
            "id": response.user.uid,
            "address": user.address,
            "name":user.username,
            "description": user.description,
            "position": user.position
          })
          if (apiResponse != null) {
            console.log("Serviceprovider created!")
          } else {
            console.log("Error while creating Serviceprovider")
          }
        
    } catch (error) {
        console.log("This is in the error: ", error);
        dispatch(processFailure(error.code))
    }
}

export const updatingProfile = async (user) => {
    await updateProfile(auth.currentUser, {
        displayName: user.username
    })
}
export const createServiceProvider = async (data) => {
    try {
        let jsonData = JSON.stringify(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/serviceProvider/create',
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