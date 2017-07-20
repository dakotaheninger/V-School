import React from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import ColorContainer from "./container/color-container";


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ColorContainer/>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector("#root"));
