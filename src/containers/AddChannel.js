import React from 'react'

import { connect } from 'react-redux'
import { addChannel, removeChannel, fetchChannels, setUserId, getChannels } from '../actions/ChannelActions'

const AddChannel =  ({ dispatch }) => {
    let channelToAdd
    let userId

    return (
        <div>
            <input onChange={event => userId = event.target.value}/>
            <button onClick={e => {
                dispatch(setUserId(userId))
            } } >
                Set User Id
            </button>

            <input onChange={event => channelToAdd = event.target.value}/>
            <button onClick={e => {
                dispatch(addChannel(channelToAdd))
            } } >
                Add Channel
            </button>

            <button onClick={e => {
                dispatch(getChannels())
            }}>
                Get channels
            </button>
        </div>
    )
}

export default connect()(AddChannel)