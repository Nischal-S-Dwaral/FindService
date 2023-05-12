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
        await createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(createdUser => {
                updateProfile(createdUser.user, {
                    displayName: user.username
                }).then(() => {
                    dispatch(processSuccess({
                        uid: createdUser.user.uid,
                        email: createdUser.user.email,
                        username: user.username,
                        status: null,
                        description: user.description
                    }));

                    let data = {
                        "email": user.email,
                        "id": createdUser.user.uid,
                        "address": user.address,
                        "name":user.username,
                        "description": user.description,
                        "position": user.position
                    }

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
                    axios.request(config)
                })
            })
    } catch (error) {
        console.log("This is in the error: ", error);
        dispatch(processFailure(error.code))
    }
}