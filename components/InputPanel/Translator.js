import React from 'react'
import { connect } from 'react-redux'

import ScriptEditor from './ScriptEditor';
import { Button, Icon } from 'antd';
import AntStyles from '../../lib/AntStyles';
import {inputPanels} from '../../constants';

const ButtonGroup = Button.Group;

class Translator extends React.Component {

    
    componentDidMount() {


    }

    render() {

        return (
            <div className="translator">

            <AntStyles/>
            <style jsx>{`

             

            `}</style>
               Translator
            </div>
        );

    }
}



function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(Translator)
