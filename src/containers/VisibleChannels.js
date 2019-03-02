import { connect } from 'react-redux'
import ChannelsList from '../components/ChannelsList'

const mapStateToProps = (state, ownProps) => ({
    channels: state.channels
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    y: ["1", "2"]
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList)