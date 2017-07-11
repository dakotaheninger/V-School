/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import TodoContainer from "./container/todo-container.js";
import Header from "./component/todo-header";

class App extends React.Component {
    render() {
        return (
            <div className="col-md-offset-3 col-md-6 main">
                <Header title="Welcome to the To-Do List!"
                        instruction="Type in the chore that needs doing and click the Add button or press enter to add it to the list!"
                        delete="Click the X to remove an item!" edit="Click the Edit button to edit an item!" cancelEdit="If you want to cancel and Edit, click the X to cancel!"/>
                <TodoContainer/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));