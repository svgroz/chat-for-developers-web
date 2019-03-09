import * as types from "./ChannelActionTypes"

export const setUserId = (userId) => {
    return {
        type: types.SET_USER_ID,
        userId: userId
    }
}

export const getChannels = () => (dispatch, getState) => {
    const userId = getState().userId
    return fetch("/api/channel/list?userId=" + userId, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(rawResponse => {
            return rawResponse.json()
        })
        .then(response => {
            console.log(response)
            dispatch({
                type: types.GET_CHANNELS,
                channels: response
            })
        })
}

export const addChannel = (channel) => (dispatch, getState) => {
    const userId = getState().userId
    const request = { "userId": userId, "name": channel, members: [] }
    return fetch("/api/channel/create",
        { 
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(rawResponse => {
            return rawResponse.json;
        })
        .then(response => {
            dispatch({
                type: types.CREATE_CHANNEL,
                channel: channel
            })
        });
}

export const removeChannel = () => {
    return {
        type: types.REMOVE_CHANNEL
    }
}
