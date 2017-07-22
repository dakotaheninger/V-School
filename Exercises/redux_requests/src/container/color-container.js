import React from "react";
import Color from "../component/color";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"


class ColorContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <Color name={this.props.colorName} click={this.props.loadColor} color={this.props.backgroundColor} lastColor={this.props.lastColor}
                       thirdColor={this.props.thirdColor} fourthColor={this.props.fourthColor}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return state;
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);