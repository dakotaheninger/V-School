/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import CounterContainer from "./containers/counter-container.js";

class App extends React.Component {
    render() {
        return (
            <CounterContainer/>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));