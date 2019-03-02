import React from 'react'

import { connect } from 'react-redux'
import { addChannel, removeChannel } from '../actions/ChannelActions'

const AddChannel =  ({ dispatch }) => {
    let input

    return (
        <div>
            <input ref={node => input = node} />
            <button onClick={e => {
                dispatch(addChannel(input.value))
            } } >
                Add Channel
            </button>
            <button onClick={e => {
                dispatch(removeChannel())
            } } >
                Remove Channel
            </button>
            
    </div>
    )
}

export default connect()(AddChannel)