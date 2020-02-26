
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