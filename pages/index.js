import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import InputPanel from '../components/InputPanel';
import Head from 'next/head';



class Index extends React.Component {
  static getInitialProps({ reduxStore, req, params }) {
    //const isServer = !!req
    //reduxStore.dispatch(serverRenderClock(isServer))


    return {}
  }

  componentDidMount() {
    //const {dispatch} = this.props
    //this.timer = startClock(dispatch)

  }


  componentWillUnmount() {
    //clearInterval(this.timer)
  }

  render() {
    return (
      <div>

        <style jsx global>{`

       html,body{
        margin:0;
        padding:0;


       }
            main{
              height:100vh;
            

            }
            header{
              height:100%;
          
            }
          `}</style>

        <main className="flex flex-column">

          <header>


            <div className="word-queue">
              <div>Hello 1</div>
              <div>Hello 2</div>
              <div>Hello 3</div>
              <div>Hello 4</div>
              <div>Hello 5</div>
              <div>Hello 6</div>
            </div>

          </header>



          <InputPanel />



        </main>








      </div>

    )
  }
}

export default connect()(Index)
