import { SEND_MESSAGE ,GET_MESSAGES ,DELETE_MESSAGE , MESSAGES_LOADING} from '../Actions/types'


const initialState = {
    messages : [] ,
    loading :false
}

export default function( state = initialState ,action) {
    switch(action.type){
        case GET_MESSAGES: {
            return{
                ...state ,
                messages : action.payload,
                loading:false
            }
        }

        case MESSAGES_LOADING: {
            return{
                ...state ,
                loading:true
            }
        }

        case DELETE_MESSAGE: {
            return{
                ...state,
                messages:state.messages.filter(message => message._id !== action.payload)
            }
        }

        case SEND_MESSAGE:
            return{
                ...state,
                message : [action.payload , ...state.messages]
            };

        default:
                return state;
    }
}