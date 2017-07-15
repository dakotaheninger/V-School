/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import ReactDOM from 'react-dom';
import MemeContainer from "./containers/meme-container";
import "./index.css";
import Header from "./components/header";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers/";

const store = createStore(reducers);


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/*<div className="row">*/}
                    <Header title="Welcome to the Meme Generator!"
                            imageInstruction="Add a pathway to an image in the center box!"
                            textInstructions="Add the top row of text in the Top Text box and the bottom row of text in the Bottom Text box!"
                            saveInstructions="Click Save to save your meme!"/>
                {/*</div>*/}
                <MemeContainer/>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));