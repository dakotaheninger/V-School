/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import NameBadgeContainer from "./container/name-badge-container.js";
import Header from "./components/header.js";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid main">
                <Header welcome="Welcome to the Name Badge Generator!"
                        describe="Fill out the information and click submit to generate your name badge!"/>
                <NameBadgeContainer/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));