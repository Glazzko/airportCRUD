import {
    REQUEST,
    SUCCESS,
    FAILURE,
    FETCH_DATA,
    FETCH_AIRPORT,
    FETCH_COMPANY,
    FETCH_DEPARTURE,
    FETCH_CODE
} from "../constants";

export const fetchData = state => dispatch => {
    dispatch({
        type: FETCH_DATA,
        payload: state
    });
};

export function sendEvent(values, url) {
    return dispatch => {
        const url = { path: "events", id: "" };
        dispatch(responsePost(values, url));
    };
}

export function getCode() {
    return dispatch => {
        const url = { path: "code", id: "" };
        dispatch(responseGet("", url, fetchCode));
    };
}

export function getAirport() {
    return dispatch => {
        const url = { path: "airport", id: "" };
        dispatch(responseGet("", url, fetchAirport));
    };
}

export function getDeparture() {
    return dispatch => {
        const url = { path: "departure", id: "" };
        dispatch(responseGet("", url, fetchDeparture));
    };
}

export function getCompany() {
    return dispatch => {
        const url = { path: "company", id: "" };
        dispatch(responseGet("", url, fetchCompany));
    };
}
function fetchAirport(airport) {
    return {
        type: FETCH_AIRPORT,
        airport
    };
}

function fetchCode(code) {
    return {
        type: FETCH_CODE,
        code
    };
}

function fetchDeparture(departure) {
    return {
        type: FETCH_DEPARTURE,
        departure
    };
}
function fetchCompany(company) {
    return {
        type: FETCH_COMPANY,
        company
    };
}

function request() {
    return {
        type: REQUEST
    };
}

function success(message) {
    return {
        type: SUCCESS,
        message
    };
}

function failure(message) {
    return {
        type: FAILURE,
        message
    };
}

const urlCreator = (path, id = "") => `http://localhost:3000/api/${path}`;

//gali buti values arba data
function responsePost(data, url) {
    return async dispatch => {
        dispatch(request());
        try {
            const results = await fetch(urlCreator(url.path, url.id), {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            });
            dispatch(success(results.message || ""));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}

function responseGet(data, url, getData) {
    return async dispatch => {
        dispatch(request());
        try {
            const results = await fetch(urlCreator(url.path, url.id), {
                headers: { "X-Requested-With": "XMLHttpRequest" },
                method: "GET"
            });
            const response = await results.json();
            //* console.log(response);*//
            dispatch(getData(response));
        } catch (e) {
            console.error(e);
            dispatch(failure(e));
        }
    };
}
