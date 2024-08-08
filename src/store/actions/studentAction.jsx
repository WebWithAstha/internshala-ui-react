import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { load } from "../reducers/studentSlice";

export const asyncLoad = (navigate) => (async (dispatch, getState) => {
    try {

        const { data } = await axios.get('/student')
        dispatch(load(data))

    } catch (error) {
        if(error.response.data.message == 'jwt expired' || 'Please login to proceed further.'){
            navigate('/')
            alert('Please Login')
        }

        console.log(error.response.data.message)

    }
})