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
            listEdit: "",
            listItems: "",
            inputOpen: false
        }
    }

    input(event) {
        this.setState({
            ...this.state,
            listItems: event.target.value
        })
    }

    editInput(event) {
        this.setState({
            ...this.state,
            listEdit: event.target.value

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

    keyPress(event) {
        if (event.key == "Enter") {
            this.click();
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


    newInput(index) {
        if (this.state.inputOpen == true) {
            alert(`Please Finish Editing This Item First`);
        } else {
            document.querySelector(`.item${index}`).style.display = "none";
            document.querySelector(`.edit${index}`).style.display = "inline";
            this.setState({
                ...this.state,
                inputOpen: true
            })
        }
    }
    cancel(index){
        document.querySelector(`.item${index}`).style.display = "inline";
        document.querySelector(`.edit${index}`).style.display = "none";
        this.setState({
            ...this.state,
            inputOpen: false
        })
    }

    editItem(index) {
        if (this.state.listEdit.match(/[a-z]/i)) {
            let editState = [...this.state.list];
            editState.splice(index, 1, this.state.listEdit);
            this.setState({
                ...this.state,
                list: editState,
                listEdit: "",
                inputOpen: false

            })
        } else {
            this.setState({
                ...this.state,
                listEdit: ""
            })
        }
    }


    render() {
        return (
            <div>
                <input onKeyPress={this.keyPress} className="input" value={this.state.listItems} onChange={this.input}/>
                <a className="add" onClick={() => {
                    this.click();
                }}>Click to Add Item
                </a>
                <TodoList handleCancel={this.cancel} inputOpen={this.state.inputOpen} placeholder={this.state.list} handleEditInput={this.editInput} handleEditItem={this.editItem}
                          value={this.state.listEdit} handleRemove={this.remove} list={this.state.list}
                          handleNewInput={this.newInput}/>
            </div>
        )
    }

}


export default TodoContainer;