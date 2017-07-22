import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import FormContainer from "./containers/form-container";
import TodoListContainer from "./containers/todo-list-container";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import Header from "./components/header";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header title="Let's Get It Done" quote={`"Do or do not, there is no try" - Yoda`}/>
                <FormContainer/>
                <TodoListContainer/>
            </div>
        );
    }

};


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));