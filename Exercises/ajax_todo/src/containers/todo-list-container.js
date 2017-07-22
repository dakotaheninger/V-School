import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import TodoList from "../components/todo-list";


class TodoListContainer extends React.Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <TodoList allItems={this.props.allItems}/>
        );
    }

}



let mapStateToProps = (state) => {
    return state;
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);