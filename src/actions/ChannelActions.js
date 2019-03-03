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

export function fetchChannels() {
    return function(dispatch) {
      return fetch('/aaassss')
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(addChannel(json))
        )
    }
  }
  
  