//@flow
import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Examples from '../components/examples'
import Client from '../lib/Client';




class Blog extends React.Component<*> {

    timer:any

    static async getInitialProps({reduxStore, req, params}) {
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))




        const {clientVersion,serverVersion}=await Client.get("api/v1/versions").then((r)=>r.data);



        if (isServer && req.param) {

            const articleId = req.param('articleId');

            return {articleId,clientVersion,serverVersion}
        }

        return {clientVersion,serverVersion};




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
                blog <div class="article-id">{this.props.articleId || "not specified"}</div>

                <br/>

                Client Version: {this.props.clientVersion||"[n/a]"}
                <Examples/>
            </div>
        )
    }
}

export default connect()(Blog)
