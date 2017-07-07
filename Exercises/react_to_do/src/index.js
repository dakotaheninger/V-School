/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";
import ReactDom from "react-dom";
import ListContainer from "./containers/list-container.js";
import "./index.css";

class App extends React.Component{
    render(){
        return(
            <ListContainer/>
        )
    }
}


ReactDom.render(<App/>, document.querySelector("#root"));
