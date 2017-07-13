/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.js";
import ButtonContainer from "./containers/button-container.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/"

const store = createStore(reducers);


class App extends React.Component{
    render(){
        return(
            <ButtonContainer/>
        )
    }
}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));









