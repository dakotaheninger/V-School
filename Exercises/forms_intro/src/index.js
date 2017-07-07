/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import FormContainer from "./containers/form-container.js";


class App extends React.Component {
    render() {
        return (
            <FormContainer/>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));