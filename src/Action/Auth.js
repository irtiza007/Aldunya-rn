import { Alert } from "react-native"

export function setAuthInfo(info = {}) {
    return {
        type: 'SET_AUTH_INFO',
        payload: info
    }
}

export function resetAuthInfo() {
    return {
        type: 'RE_SET_AUTH_INFO'
    }
}
export function updatePhoneNumber(info) {
    return {
        type: 'SET_PHONE_NUMBER',
        payload: info

    }
}

export function updateBlindColor(info) {
    return {
        type: 'CHANGE_BLIND_MODE',
        payload: info
    }
}