/**
 * Created by dakotaheninger on 7/17/17.
 */
import React from "react";
import NameList from "../components/name-list";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import Form from "../components/form";


class NameContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            names: [],
            name1: "",
            name2: "",
            name3: ""
        }
    }

    getValue(key) {
        return this.state[key];
    }

    handleInput(key, event) {
        this.setState({
            ...this.state,
            [key]: event.target.value
        });
    }

    submit() {
        let newNameArr = [];
        newNameArr.push(this.state.name1, this.state.name2, this.state.name3);
        this.setState({
            ...this.state,
            names: newNameArr,
            name1: "",
            name2: "",
            name3: ""
        });
        this.props.pickRandom(newNameArr);
    }


    render() {
        return (
            <div>
                <Form submit={this.submit} handleInput={this.handleInput} getValue={this.getValue}/>
                <NameList text={this.props.currentName}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);
