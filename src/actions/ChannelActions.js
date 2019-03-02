import * as types from "./ChannelActionTypes"

export const getChannels = () => {
    return {
        type: types.GET_CHANNELS
    }
}

export const addChannel = (channel) => {
    return {
        type: types.ADD_CHANNEL,
        channel
    }
}

export const removeChannel = () => {
    return {
        type: types.REMOVE_CHANNEL
    }
}