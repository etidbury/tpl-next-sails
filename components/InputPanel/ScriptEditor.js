import React from 'react'
import { connect } from 'react-redux'

import MyScriptJS from 'myscript/dist/myscript.min.js';



class ScriptEditor extends React.Component {

  editor = false;

  componentDidMount() {

    if (!this.editor) {
      this.editor = MyScriptJS.register(this.refs.editor, {
        recognitionParams: {
          type: 'TEXT',
          protocol: 'WEBSOCKET',
          apiVersion: 'V4',
          server: {
            scheme: 'https',
            host: 'webdemoapi.myscript.com',
            applicationKey: '5cd036d2-d33e-4a23-ae3e-87b85cf7d027',
            hmacKey: '91828ee0-b7ac-474a-8936-0a209abd83b0'
          },
        },
        v4: {
          text: {
            guides: {
              enable: false
            },
            smartGuide: false,
            smartGuideFadeOut: {
              enable: false,
              duration: 10000
            }
          },
        }
      }
      );

      //this.refs.editor.setTheme({'.greenThickPen' : { "font-family": 'Open Sans', color: '#00FF00FF', '-myscript-pen-width': 1.5 }});
      //this.refs.editor.setPenStyleClasses("greenThickPen");

      this.refs.editor.addEventListener('changed', function (event) {

        console.log("changed", event);

      });

      this.refs.editor.addEventListener('exported', (evt) => {
        var exports = evt.detail.exports;
        if (exports && exports['text/plain']) {

          this.props.onAnswer({ answerText: exports['text/plain'] })
          // convertElement.disabled = false;
          // resultElement.innerHTML = '<span>' + exports['text/plain'] + '</span>';
        } else {
          //convertElement.disabled = true;
          //resultElement.innerHTML = '';
        }
      });
    }


    window.addEventListener("resize", () => { this.editor.resize() });
  }

  render() {

    return (
      <div>
      <style jsx global>{`
      
      .smartguide{
        display:none!important;
      }
      
      `}</style>
        <div class="script-editor" ref="editor"></div>
      </div>
    );

  }
}



function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(ScriptEditor)
