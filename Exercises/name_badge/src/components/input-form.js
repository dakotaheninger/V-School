/**
 * Created by dakotaheninger on 7/11/17.
 */
import React from "react";


class Form extends React.Component{
    render(){
        return(
            <div className="col-md-offset-2 col-md-8 main-input">
                <div className="col-md-5 left-side">
                    <input value={this.props.getValue("firstName")} onChange={(event) => {
                        this.props.handleInput("firstName", event);
                    }}
                           className="input col-md-12" placeholder="First Name"/>
                    <input value={this.props.getValue("email")} onChange={(event) => {
                        this.props.handleInput("email", event);
                    }}
                           className="input col-md-12" placeholder="Email"/>
                    <input maxLength="10" value={this.props.getValue("phone")} onChange={(event) => {
                        this.props.handleInput("phone", event);
                    }}
                           className="input col-md-12" placeholder="Phone"/>
                </div>
                <div className="col-md-offset-2 col-md-5">
                    <input value={this.props.getValue("lastName")} onChange={(event) => {
                        this.props.handleInput("lastName", event);
                    }} className="input col-md-12" placeholder="Last Name"/>
                    <input value={this.props.getValue("birthPlace")} onChange={(event) => {
                        this.props.handleInput("birthPlace", event);
                    }} className="input col-md-12" placeholder="Place of Birth"/>
                    <select onChange={(event)=> this.props.handleInput("backgroundColor", event)} value={this.props.getValue("backgroundColor")} className="input col-md-12">
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <input value={this.props.getValue("about")} onChange={(event) => {
                        this.props.handleInput("about", event);
                    }}
                           className="about col-md-12" placeholder="Tell us About Yourself"/>
                </div>
                <div className="sub-but col-md-offset-3 col-md-6">
                    <a onClick={() => {
                        this.props.click();
                    }} className="submit">Submit</a>
                </div>
            </div>
        )
    }
}


export default Form;