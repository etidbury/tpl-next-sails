import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'

class Index extends React.Component {
    static getInitialProps({reduxStore, req,params}) {
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))


        const articleId=req.param('articleId');

        return {articleId}
    }

    componentDidMount() {
        const {dispatch} = this.props
        this.timer = startClock(dispatch)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        return (
            <div>
                blog {this.props.articleId||"not specified"}
                <Examples/>
            </div>
        )
    }
}

export default connect()(Index)
