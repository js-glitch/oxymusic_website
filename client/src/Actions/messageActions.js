import axios from 'axios';
import { SEND_MESSAGE ,GET_MESSAGES ,DELETE_MESSAGE ,MESSAGES_LOADING} from './types'

export const getMessages = () => dispatch => {
    dispatch(setMessagesLoading());
    axios.
    get('/api/contact_message')
    .then(res => 
        dispatch({type:GET_MESSAGES , payload: res.data})
        );
  
};

export const deleteMessage = (id) =>dispatch => {
 axios.delete(`/api/contact_message/${id}`).then(res => 
    dispatch({
        type:DELETE_MESSAGE,
        payload:id})
        );
};

export const setMessagesLoading = () => {
    return{
       type:MESSAGES_LOADING
    };
};


export const sendMessage = message => dispatch => {
   axios
   .post('/api/contact_message' , message)
   .then(res => 
    dispatch({
        type : SEND_MESSAGE,
         payload:res.data
    })
    )
};