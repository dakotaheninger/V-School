import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import HomeContainer from "./containers/home-container";
import ContactContainer from "./containers/contact-container";


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/contact" component={ContactContainer}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}


ReactDOM.render(<App/>, document.querySelector("#root"));
