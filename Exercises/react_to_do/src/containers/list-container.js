/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";
import List from "../components/list.js";
import autoBind from "react-autobind";

class ListContainer extends React.Component {
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

    render() {
        return (
            <List title="Welcome to the To-Do List!"
                  instruction="Type in the chore that needs doing and click the Add button to add it to the list!"
                  delete="Click on the chore to delete it from the list!" handleRemove={this.remove}
                  value={this.state.listItems} handleClick={this.click} handleInput={this.input}
                  list={this.state.list}/>
        )
    }
}


export default ListContainer;