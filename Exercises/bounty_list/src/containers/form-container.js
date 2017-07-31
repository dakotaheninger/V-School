import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";
import Form from "../components/form";


class FormContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            name: "",
            location: "",
            price: "",
            deadOrAlive: ""
        }

    }

    handleInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    getValue(key) {
        return this.state[key];
    }

    reset(){
        for(let key in this.state){
            this.setState({
                [key]: ""
            });
        }
    };


    render() {
        return (
            <Form reset={this.reset} addData={this.props.addData} state={this.state} handleInput={this.handleInput} getValue={this.getValue}/>
        );
    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);