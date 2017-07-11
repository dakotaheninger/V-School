/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";
import TodoItem from "./todo-item.js";
// import Header from "./todo-header.js";


class TodoList extends React.Component {
    genTodoItems() {
        return this.props.list.map((item, index) => {
            return (
                <TodoItem key={item + index} inputOpen={this.props.inputOpen} handleCancel={this.props.handleCancel} placeholder={this.props.placeholder} handleRemove={this.props.handleRemove}
                          handleNewInput={this.props.handleNewInput} handleEditInput={this.props.handleEditInput}
                          handleEditItem={this.props.handleEditItem} value={this.props.value}
                          item={item} index={index}/>);
        });
    }

    render() {
        return (
            <ul className="col-md-12">
                {this.genTodoItems()}
            </ul>
        )
    }
}


export default TodoList;