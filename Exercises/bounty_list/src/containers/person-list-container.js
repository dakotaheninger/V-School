import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions";
import autoBind from "react-autobind";
import Person from "../components/person";


class PersonListContainer extends React.Component{
    constructor(props){
        super(props);
        autoBind(this);
        this.state = {
            ...this.props.allPeople
        }

    }
    handleInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    };

    getValue(key) {
        return this.state[key]
    }

    reset(){
        for(let key in this.state){
            this.setState({
                [key]: ""
            })
        }
    }
    hidePerson(index){
        document.querySelector(`.ind${index}`).style.display = "none";
        document.querySelector(`.edit-input${index}`).style.display = "inline-block";

    }
    unHidePerson(index){
        document.querySelector(`.ind${index}`).style.display = "inline";
        document.querySelector(`.edit-input${index}`).style.display = "none";
    }
    render() {
        return (
           <Person delData={this.props.delData} reset={this.reset} state={this.state} upData={this.props.upData} handleInput={this.handleInput} getValue={this.getValue} hidePerson={this.hidePerson} unHidePerson={this.unHidePerson} item={this.props.item} index={this.props.index} key={this.props.key}/>
        );
    }


}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(PersonListContainer);