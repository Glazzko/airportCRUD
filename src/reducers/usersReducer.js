import {
    REQUEST,
    SUCCESS,
    FAILURE,
    FETCH_AIRPORT,
    FETCH_AIRPORTS,
    FETCH_COMPANY,
    FETCH_DEPARTURE,
    FETCH_CODE
} from "../constants";

const initialState = {
    message: "",
    error: "",
    users: [],
    airport: [],
    departure: [],
    company: [],
    code: [],

    isFetching: false
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST:
            return {
                ...state
            };
        case SUCCESS:
            return {
                ...state,
                message: action.message,
                isLoaded: true
            };
        case FETCH_AIRPORT:
            return {
                ...state,
                airport: action.airport
            };

        case FETCH_CODE:
            return {
                ...state,
                code: action.code
            };
        case FETCH_DEPARTURE:
            return {
                ...state,
                departure: action.departure
            };
        case FETCH_COMPANY:
            return {
                ...state,
                company: action.company
            };

        case FAILURE:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
export default userReducer;
