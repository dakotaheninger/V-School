/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";
import TodoList from "../component/todo-list.js";
import autoBind from "react-autobind"

class TodoContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            list: [],
            listItems: ""
        }
    }

    input(event) {
        this.setState({
            ...this.state,
            listItems: event.target.value
        })
    }

    click() {
        if (this.state.listItems.match(/[a-z]/i)) {
            this.setState({
                ...this.state,
                list: [...this.state.list, this.state.listItems],
                listItems: ""
            })
        } else {
            this.setState({
                ...this.state,
                listItems: ""
            })
        }
    }

    remove(index) {
        let oldItem = [...this.state.list];
        oldItem.splice(index, 1);
        this.setState({
            ...this.state,
            list: oldItem
        })
    }

    edit(index) {
        let newEdit = prompt("Please edit the chore!");
        let oldValue = [...this.state.list];
        oldValue.splice(index, 1, newEdit);
        this.setState({
            ...this.state,
            list: oldValue
        })

    }

    render() {
        return (
            <div>
                <input className="input" value={this.state.listItems} onChange={this.input}/>
                <a className="add" onClick={() => {
                    this.click();
                }}>Click to Add Item
                </a>
                <TodoList handleRemove={this.remove} list={this.state.list}
                          handleEdit={this.edit}/>
            </div>
        )
    }

}


export default TodoContainer;