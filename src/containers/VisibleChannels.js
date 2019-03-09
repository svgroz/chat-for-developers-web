import React from 'react'

import { connect } from 'react-redux'

const ChannelsList = props => (
    <ul>
        
    </ul>
)

const mapStateToProps = state => {
    return {
        channels: state.channels
    }
}

export default connect(mapStateToProps)(ChannelsList)