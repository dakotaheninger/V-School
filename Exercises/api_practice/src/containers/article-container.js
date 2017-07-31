import React from "react"
import autoBind from "react-autobind";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";
import ArticleList from "../components/articles-list";


class ArticleContainer extends React.Component{
    render() {
    	return (
    	    <ArticleList allArticles={this.props.allArticles} />
    	);
    }

}


const mapStateToProps = (state)=>{
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);