/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import NameBadgeList from "../components/name-badge-list.js";
import autoBind from "react-autobind";

class NameBadgeContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            badges: [],
            currentBadge: {
                firstName: "",
                email: "",
                phone: "",
                lastName: "",
                birthPlace: "",
                favoriteFood: "",
                about: ""
            }


        }

    }


    handleInput(key, event) {
        let newBadge = {...this.state.currentBadge};
        newBadge[key] = event.target.value;
        this.setState({
            ...this.state,
            currentBadge: newBadge
        });
    }

    getValue(key) {
        return this.state.currentBadge[key];
    }

    click() {
        this.setState({
            ...this.state,
            badges: [...this.state.badges, this.state.currentBadge]
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 main-input">
                    <div className="col-md-5 left-side">
                        <input value={this.getValue("firstName")} onChange={(event) => {
                            this.handleInput("firstName", event);
                        }}
                               className="input col-md-12" placeholder="First Name"/>
                        <input value={this.getValue("email")} onChange={(event) => {
                            this.handleInput("email", event);
                        }}
                               className="input col-md-12" placeholder="Email"/>
                        <input value={this.getValue("phone")} onChange={(event) => {
                            this.handleInput("phone", event);
                        }}
                               className="input col-md-12" placeholder="Phone"/>
                    </div>
                    <div className="col-md-offset-2 col-md-5">
                        <input value={this.getValue("lastName")} onChange={(event) => {
                            this.handleInput("lastName", event);
                        }} className="input col-md-12" placeholder="Last Name"/>
                        <input value={this.getValue("birthPlace")} onChange={(event) => {
                            this.handleInput("birthPlace", event);
                        }} className="input col-md-12" placeholder="Place of Birth"/>
                        <input value={this.getValue("favoriteFood")} onChange={(event) => {
                            this.handleInput("favoriteFood", event);
                        }}
                               className="input col-md-12" placeholder="Favorite Food"/>
                    </div>
                    <div className=" col-md-12">
                        <input value={this.getValue("about")} onChange={(event) => {
                            this.handleInput("about", event);
                        }}
                               className="about col-md-12" placeholder="Tell us About Yourself"/>
                    </div>
                    <div className="sub-but col-md-offset-3 col-md-6">
                        <a onClick={() => {
                            this.click();
                        }} className="submit">Submit</a>
                    </div>
                </div>
                <NameBadgeList badges={this.state.badges}/>
            </div>
        )
    }
}

export default NameBadgeContainer;