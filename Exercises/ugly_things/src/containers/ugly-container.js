import React from "react"
import autoBind from "react-autobind";
import UglyList from "../components/ugly-list";
import UglyForm from "../components/ugly-form";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";


class UglyContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            currentPic: {
                title: "",
                backgroundImage: "",
                description: ""
            }

        }
    }

    getValue(key) {
        return this.state.currentPic[key];
    }

    getEditValue(key, index) {
        return this.props.allPics[index][key];
    }

    handleInput(key, event) {
        let newPic = {...this.state.currentPic};
        newPic[key] = event.target.value;
        this.setState({
            ...this.state,
            currentPic: newPic,
        })
    }

    handleEditAppear(index) {
        document.querySelector(`.one-pic${index}`).style.display = "none";
        document.querySelector(`.edit-item${index}`).style.display = "inline";
    }

    handleEditDisappear(index) {
        document.querySelector(`.one-pic${index}`).style.display = "inherit";
        document.querySelector(`.edit-item${index}`).style.display = "none";
    }

    handleEdit(key, event, index) {
        let currentEditPic = {...this.props.allPics[index]};
        currentEditPic[key] = event.target.value;
        console.log(currentEditPic);
    }

    render() {
        return (
            <div>
                <UglyForm currentPic={this.state.currentPic} handleSubmit={this.props.submit}
                          handleInput={this.handleInput} getValue={this.getValue}/>
                <UglyList editedPics={this.state.editedPics} currentEditPic={this.han} handleEditSubmit={this.props.editSubmit}
                          getEditValue={this.getEditValue}
                          handleEdit={this.handleEdit} handleEditAppear={this.handleEditAppear}
                          handleEditDisappear={this.handleEditDisappear}
                          handleRemove={this.props.remove} allPics={this.props.allPics}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(UglyContainer);