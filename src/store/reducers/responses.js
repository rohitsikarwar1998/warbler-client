import { GET_RESPONSES,POST_RESPONSE,DELETE_RESPONSE } from '../actionTypes';


const DEFAULT_STATE={
    responseCount:-1, //hopefully true when user login
    responses:[],   //user information when user log in
}
const responses = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_RESPONSES:
            return {
                responseCount:action.responseCount,
                responses:action.responses,
            };
        case DELETE_RESPONSE:
            return {
                responseCount:state.responses.length-1,
                responses:state.responses.filter(res=>res.id!==action.id),
            };
        case POST_RESPONSE:
            return {
                responseCount:state.responses.length+1,
                responses:[action.response,...state.responses],
            };
        default:
            return state;
    }
};

export default responses;