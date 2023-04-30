import {processFailure, processStart, processSuccess} from "../redux/userRedux";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import {auth} from "../firebase"

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
            username : user.username
        }));
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