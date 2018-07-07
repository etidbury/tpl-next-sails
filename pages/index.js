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


          </header>



          <InputPanel />



        </main>








      </div>

    )
  }
}

export default connect()(Index)
