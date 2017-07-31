import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import SentenceContainer from "./container/sentence-container"
import "./index.css"
import Header from "./component/header";

const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header title="Come to Yoda Speak You Have" description="Type in any sentence into the input box and hit submit to Yodify it!" quote={`"When nine hundred years old you reach, look as good you will not." - Yoda`}/>
                <SentenceContainer/>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));