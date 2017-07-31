import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import "./index.css";
import PersonContainer from "./containers/person-container";
import FormContainer from "./containers/form-container";
import Header from "./components/header";


const STORE = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header title="Bounty List" description="Fill out the form and press submit to add the person to the Bounty List"/>
                <FormContainer/>
                <PersonContainer/>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={STORE}><App/></Provider>, document.querySelector("#root"));
