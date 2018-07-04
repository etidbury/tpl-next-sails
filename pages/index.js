import React from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req,params }) {
    //const isServer = !!req
    //reduxStore.dispatch(serverRenderClock(isServer))


    return {}
  }

  componentDidMount () {
    //const {dispatch} = this.props
    //this.timer = startClock(dispatch)
  }


  componentWillUnmount () {
    //clearInterval(this.timer)
  }
  
  render () {
    return (
        <div>
            <p className="foo">Hello World!</p>
            <Link href="/login" prefetch><a>Login</a></Link>
        </div>

    )
  }
}

export default connect()(Index)
