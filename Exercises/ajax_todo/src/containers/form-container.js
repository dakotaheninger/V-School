import React from "react";
import Form from "../components/todo-form";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";


class FormContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
                title: "",
                price: "",
                description: ""

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
    reset(){
        for(let key in this.state){
            this.setState({
            [key]: ""
        })
        }
    };

    render() {
        return (
            <Form handleReset={this.reset} addData={this.props.addData} getValue={this.getValue} handleInput={this.handleInput} input={this.state}/>
        );
    }

}


let mapStateToProps = (state) => {
    return state
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);


