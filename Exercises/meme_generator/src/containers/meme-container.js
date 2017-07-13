/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import MemeList from "../components/meme-list";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";



class MemeContainer extends React.Component{
    render() {
        return (
            <MemeList/>
        );
    }

}
const mapStateToProps = (state)=>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actionCreators, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);