import React from "react";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as actionCreators from "../actions/";
import SentenceList from "../component/sentence-list";


class SentenceContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            currentSentence: ""
        }
    }

    getValue(key) {
        return this.state[key];
    }

    handleInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }


    render() {
        return (
            <div className="row whole-input">
                <div className="col-md-12 main-input">
                    <div className="col-md-offset-4 col-md-4">
                        <input className="input" value={this.getValue("currentSentence")} onChange={(event) => {
                            this.handleInput("currentSentence", event);
                        }}/>
                    </div>
                </div>
                    <div className="col-md-12 main-button">
                        <div className="col-md-offset-4 col-md-4">
                            <a onClick={() => {
                                this.props.loadData(this.state.currentSentence);
                            }} className="button">Submit</a>
                        </div>
                    </div>
                    <div className="row sentence">
                        <SentenceList allSentences={this.props.allSentences}/>
                    </div>
                </div>
        );
    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SentenceContainer);