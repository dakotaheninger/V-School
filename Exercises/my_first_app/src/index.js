import React from "react";
import ReactDOM from "react-dom";


import Navbar from "./navbar.js";

import "./index.css";


class App extends React.Component {
    render() {
        return (
            <div classname="whole">
                <Navbar/>
                <h1>Hello</h1>
                <h2>It's Me</h2>
                <p>Hello its me your looking for</p>
                <div className="box"></div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
