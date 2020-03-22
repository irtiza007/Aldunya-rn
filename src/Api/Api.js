
import axios from 'axios';
// import apiConfig from './apiConfig';

const routes = { LOGIN_ROUTE: 'getClient/PASSCODE' }

const signIn = async (body) => {
    try {
        const res = await axios.post(routes.LOGIN_ROUTE, body);
        return res;
    } catch (err) {
        throw err.response;
    }
};
export {
    signIn
}