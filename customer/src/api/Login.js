import {processFailure, processStart, processSuccess} from "../redux/userRedux";
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {auth, googleProvider} from "../firebase"

/**
 * Call firebase login user and does redux actions
 * @param dispatch
 * @param user
 * @returns {Promise<void>}
 */
export const login = async (dispatch, user) => {
    dispatch(processStart());
    try {
        const response = await signInWithEmailAndPassword(auth, user.email, user.password)
        dispatch(processSuccess({
            uid: response.user.uid,
            email: response.user.email,
            username: response.user.displayName
        }));
    } catch (error) {
        dispatch(processFailure(error.code))
    }
}

export const googleLogin = (dispatch) => {
    dispatch(processStart());
    try {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log("We are inside the sign in process")
                dispatch(processSuccess({
                    uid: result.user.uid,
                    email: result.user.email,
                    username: result.user.displayName
                }));
            }).catch((error) => {
            dispatch(processFailure(error.code))
        });
    } catch (error) {
        dispatch(processFailure(error.code))
    }
}