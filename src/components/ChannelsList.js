import React from 'react'
import Channel from './Channel'


const ChannelsList = ({ channels, y }) => (
    <ui>
        { channels.map(channel => <Channel text={channel} />) }
    </ui>
)

export default ChannelsList
