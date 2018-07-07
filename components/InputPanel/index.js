import React from 'react'
import { connect } from 'react-redux'

import ScriptEditor from './ScriptEditor';
import Translator from './Translator';
import { Button, Icon } from 'antd';
import AntStyles from '../../lib/AntStyles';
import {inputPanels} from '../../constants';

const ButtonGroup = Button.Group;

class InputPanel extends React.Component {

    editor = false;

    state={
        activeInputPanel:inputPanels.SCRIPT_EDITOR
    };

    inputPanelOptions=[
        {
            icon:"edit",
            inputPanel:inputPanels.SCRIPT_EDITOR
        },
        {
            icon:"global",
            inputPanel:inputPanels.TRANSLATOR
        }
    ]

    onSelectActive(inputPanel){
        this.setState({activeInputPanel:inputPanel})
    }
    onAnswer({answerText}){

        console.log("onAnswer:",answerText)
    }

    renderPanel(inputPanel){

        switch(inputPanel){
            case inputPanels.TRANSLATOR:

                return <Translator />
                break;
            case inputPanels.SCRIPT_EDITOR:

                return <ScriptEditor onAnswer={({answerText})=>this.onAnswer({answerText})}/>

            break;

            default:

                throw new Error("Invalid input panel specified");

        }
    }
    componentDidMount() {


    }

    render() {

        return (
            <div className="input-panel">

            <AntStyles/>
            <style jsx>{`

                .options{
                    position:fixed;
                    bottom:10px;
                    left:10px;
                    
                    z-index:10001;
                }

            `}</style>
                <div className="options">


                    <ButtonGroup>
                        {this.inputPanelOptions.map((inputPanelOption)=>
                            <Button icon={inputPanelOption.icon} type={this.state.activeInputPanel===inputPanelOption.inputPanel?"primary":""} onClick={()=>this.onSelectActive(inputPanelOption.inputPanel)}/>
                        )}
                    
                    </ButtonGroup>
                </div>



                {this.renderPanel(this.state.activeInputPanel)}
        
            </div>
        );

    }
}



function mapStateToProps(state) {
    return { ...state };
}

export default connect(mapStateToProps)(InputPanel)
