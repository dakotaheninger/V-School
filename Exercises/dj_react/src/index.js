/**
 * Created by dakotaheninger on 7/5/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import DjContainer from "./containers/dj-containers.js";

class App extends React.Component{
    render(){
        return(
            <DjContainer/>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));