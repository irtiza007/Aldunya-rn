
const INITIAL_STATE = {
    username: '',
    userUrl: '',
    location: {},
    country: {},
    login: false,
    phoneNumber: null
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_AUTH_INFO':
            return { ...state, ...action.payload };
        case 'SET_PHONE_NUMBER':
            return { ...state, phoneNumber: action.payload };
        case 'RE_SET_AUTH_INFO':
            return INITIAL_STATE;
        default:
            return state;
    }
}