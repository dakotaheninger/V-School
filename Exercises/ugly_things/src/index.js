import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import UglyContainer from "./containers/ugly-container";
import Header from "./components/header";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header title="Welcome to Ugly Things!"
                        instructions="Enter a Title, Image URL, and Description into the inputs boxes below"
                        submit="Click the submit button to save it!"/>
                <UglyContainer/>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));

