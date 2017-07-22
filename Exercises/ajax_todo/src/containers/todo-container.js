import React from "react";
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"
import TodoItem from "../components/todo-item";


class TodoContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            title: "",
            description: "",
            price: ""
        }
    }

    getUpdateValue(key) {
        return this.state[key]
    }

    handleUpdateInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    updateReset(){
        for(let key in this.state){
            this.setState({
                [key]: ""
            })
        }
    };


    handleDisappear(index) {
        document.querySelector(`.data${index}`).style.display = "none";
        document.querySelector(`.update${index}`).style.display = "inline"
    }

    handleReappear(index) {
        document.querySelector(`.data${index}`).style.display = "inline";
        document.querySelector(`.update${index}`).style.display = "none"
    }

    render() {
        return (
            <TodoItem handleUpdateReset={this.updateReset} handleEdit={this.props.updData} reappear={this.handleReappear} disappear={this.handleDisappear}
                      getUpdateValue={this.getUpdateValue} handleUpdateInput={this.handleUpdateInput}
                      delData={this.props.delData} item={this.props.item} index={this.props.index}
                      updateInput={this.state}/>
        );
    }

}


let mapStateToProps = (state) => {
    return state;
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);