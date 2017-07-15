/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import MemeList from "../components/meme-list";
import Form from "../components/form";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";


class MemeContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            currentMeme: {
                top: "",
                backgroundImage: "",
                bottom: ""
            }
        }

    }

    handleInput(key, event) {
        let newMeme = {...this.state.currentMeme};
        newMeme[key] = event.target.value;
        this.setState({
            ...this.state,
            currentMeme: newMeme
        });
    };

    getValue(key) {
        return this.state.currentMeme[key];
    }

    render() {
        return (
            <div>
                <Form handleSave={this.props.save} handleInput={this.handleInput} getValue={this.getValue} currentTop={this.state.currentMeme.top}
                      currentImage={this.state.currentMeme.backgroundImage}
                      currentBottom={this.state.currentMeme.bottom} currentMeme={this.state.currentMeme}/>
                <MemeList memes={this.props.memes}/>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);