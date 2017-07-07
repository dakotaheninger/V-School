/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";
import autoBind from "react-autobind";

import Form from "../component/form.js";

class FormContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            names: [],
            nameValue: "",
            style: {
                backgroundColor: "cadetblue",
                color: "yellow",
                textAlign: "center",
                fontSize: "30px",
                paddingTop: "20vh",
                paddingBottom: "20vh",

            },
            buttonStyle: {
                color: "cadetblue"
            },
            listStyle: {
                listStyle: "none",
                padding: "10px"
            }
        }
    }

    input(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        })
    }

    click() {
        if (this.state.nameValue.match(/[a-z]/i)) {
            this.setState({
                ...this.state,
                names: [...this.state.names, this.state.nameValue],
                nameValue: ""
            })
        } else {
            this.setState({
                ...this.state,
                nameValue: ""
            })
        }
    }

    remove(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            ...this.state,
            names: oldNames
        })

    }



    render() {
        return (
            <Form handleRemove={this.remove} handleClick={this.click} nameValue={this.state.nameValue} listStyle={this.state.listStyle}
                  buttonStyle={this.state.buttonStyle} handleInput={this.input} title="Atom"
                  names={this.state.names} style={this.state.style}/>
        )
    }
}

export default FormContainer;