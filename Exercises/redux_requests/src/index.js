import React from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import ColorContainer from "./container/color-container";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ColorContainer/>
            </div>
        );
    }

}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
