import * as types from '../actions/ChannelActionTypes';

const channels = (state, action) => {
    switch(action.type) {
        case types.SET_USER_ID: {
            return {
                ...state,
                userId: action.userId
            }
        }
        case types.GET_CHANNELS: {
            return {
                ...state,
                channels: state.channels
            }
        }
        case types.CREATE_CHANNEL: {
            return {
                ...state,
                channels: state.channels.concat(action.channel)
            }
        }
        case types.REMOVE_CHANNEL: {
            return {
                ...state,
                channels: state.channels.length === 0? [] : state.channels.slice(-1, 1)
            }
        }
        default: {
            return state;
        }
    }
}

export default channels;