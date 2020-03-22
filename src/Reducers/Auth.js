import { Alert } from "react-native";

const INITIAL_STATE = {
    name: '',
    lastName: '',
    userId: null,
    contactMethod: '',
    email: '',
    phoneNumber: null,
    weight: '',
    imageUrl: '',
    color: '#004368',
    blindMode: true,
    login: false
};

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_AUTH_INFO':
            return { ...state, ...action.payload };

        case 'RE_SET_AUTH_INFO':
            return INITIAL_STATE;
        case 'CHANGE_BLIND_MODE':
            return {
                ...state, color: action.payload.color,
                blindMode: action.payload.blindMode
            };
        default:
            return state;
    }
}