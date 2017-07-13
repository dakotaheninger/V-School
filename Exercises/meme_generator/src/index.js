/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import ReactDOM from 'react-dom';
import MemeContainer from "./containers/meme-container";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

const store = createStore(reducers);


class App extends React.Component{
    render(){
        return(
           <MemeContainer/>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
