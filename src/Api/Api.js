
import axios from 'axios';
// import apiConfig from './apiConfig';

const routes = {
    LOGIN_ROUTE: 'getClient/PASSCODE',
    ADD_BUSY_DAY: 'addBusyDay',
    GET_BUSY_DAYS: 'getBusyDay',
    GET_ASSIGN_EXERCISE: 'getAllAssignExcercise',
    CLIENT: 'client/mobile'
}



const signIn = async (body) => {
    try {
        const res = await axios.post(routes.LOGIN_ROUTE, body);
        return res;
    } catch (err) {
        throw err.response;
    }
};

const addBusyDay = async (body) => {
    try {
        const res = await axios.post(routes.ADD_BUSY_DAY, body);
        return res;
    } catch (err) {
        throw err.response;
    }
};

const getBusyDays = async (id) => {
    try {
        const res = await axios.get(`${routes.GET_BUSY_DAYS}/${id}`);
        return res;
    } catch (err) {
        throw err.response;
    }
};

const getAssignExcercise = async (id, body) => {
    try {
        const res = await axios.post(`${routes.GET_ASSIGN_EXERCISE}/${id}`, body);
        return res;
    } catch (err) {
        throw err.response;
    }
};

const getClientForFacebook = async (params) => {
    try {
        const res = await axios.post(`${routes.CLIENT}`, params);
        return res;
    } catch (err) {
        throw err.response;
    }
};




export {
    signIn,
    addBusyDay,
    getBusyDays,
    getAssignExcercise,
    getClientForFacebook

}