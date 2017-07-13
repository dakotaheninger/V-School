/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import Button from "../components/button.js";
import { connect } from "react-redux";
import { bindActionCreators }  from "redux";
import * as actionCreators from "../actions/";


class ButtonContainer extends React.Component{
    render() {
        return (
            <Button handleAdd={this.props.add} handleSub={this.props.sub} counter={this.props.counter}/>
        );
    }

}

const mapStateToProps = (state) =>{
    return state;
};
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);