import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req,params }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))


    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    this.timer = startClock(dispatch)
  }


  componentWillUnmount () {
    clearInterval(this.timer)
  }


  render () {
    return (
        <div>
            <p className="foo">Hello World!</p>
            <Examples />
        </div>

    )
  }
}

export default connect()(Index)
