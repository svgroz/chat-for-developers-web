import * as types from '../actions/ChannelActionTypes';

const channels = (state = { channels: [] }, action) => {
    switch(action.type) {
        case types.GET_CHANNELS: {
            return {
                state,
                channels: state.channels
            }
        }
        case types.ADD_CHANNEL: {
            return {
                state,
                channels: state.channels.concat(action.channel)
            }
        }
        case types.REMOVE_CHANNEL: {
            return {
                state,
                channel: state.channels.slice(-1, 1)
            }
        }
        default: {
            return state;
        }
    }
}

export default channels;