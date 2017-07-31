import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions";
import PersonList from "../components/person-list";


class PersonContainer extends React.Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-8 people-list">
                    <PersonList allPeople={this.props.allPeople}/>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);