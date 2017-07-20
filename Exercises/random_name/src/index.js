/**
 * Created by dakotaheninger on 7/17/17.
 */
import React from "react";
import ReactDOM from 'react-dom';
import NameContainer from "./containers/name-container";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/"


const store = createStore(reducers);


class App extends React.Component{
    render() {
        return (
          <NameContainer/>
        );
    }

}


ReactDOM.render(<Provider store={store} ><App/></Provider>, document.querySelector("#root"));