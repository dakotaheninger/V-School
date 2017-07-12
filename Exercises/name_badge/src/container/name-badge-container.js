/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import NameBadgeList from "../components/name-badge-list.js";
import Form from "../components/input-form.js"
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
                about: "",
                backgroundColor: ""
            },


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
        let missingValue = false;
        let missingKey = "";
        let smallKey = "";
        let phoneNumber = true;
        let isEnough = true;
        for (let key in this.state.currentBadge) {
            if (this.state.currentBadge[key].match(/[a-zA-Z0-9]/)) {
                missingValue = false;
            } else {
                missingValue = true;
                missingKey = key;
                break;
            }
            if (this.state.currentBadge[key].length < 3) {
                isEnough = false;
                smallKey = key;
                break;
            } else {
                isEnough = true;
            }
        }
        if (this.state.currentBadge["phone"].match(/[^A-Za-z0-9_]./)) {
            phoneNumber = false;
        } else if (this.state.currentBadge["phone"].match(/[a-zA-Z]/i)) {
            phoneNumber = false;
        } else {
            phoneNumber = true;
        }

        if (missingValue === false && phoneNumber === true && isEnough === true) {
            let newBadge = {...this.state.currentBadge};
            for (let key in newBadge) {
                newBadge[key] = "";
            }
            this.setState({
                ...this.state,
                badges: [...this.state.badges, this.state.currentBadge],
                currentBadge: newBadge,
            });
        } else if (missingValue === true) {
            alert(`Please Enter a Valid Input for ${missingKey}`);
        } else if (phoneNumber === false) {
            alert(`Please Enter only Numbers in Phone Number`);
        } else {
            alert(`Please Enter More Than Two Characters in ${smallKey} `)
        }
    }

    disappear(index) {
        document.querySelector(`.badge${index}`).style.display = "none";
        document.querySelector(`.badgeR${index}`).style.display = "none";
        document.querySelector(`.about${index}`).style.display = "none";
        document.querySelector(`.full${index}`).style.display = "inline";
        document.querySelector(`.compress${index}`).style.display = "none";
        document.querySelector(`.expand${index}`).style.display = "inherit";
    };

    reappear(index) {
        document.querySelector(`.badge${index}`).style.display = "inherit";
        document.querySelector(`.badgeR${index}`).style.display = "inherit";
        document.querySelector(`.about${index}`).style.display = "inherit";
        document.querySelector(`.full${index}`).style.display = "none";
        document.querySelector(`.compress${index}`).style.display = "inherit";
        document.querySelector(`.expand${index}`).style.display = "none";
    }


    render() {

        return (
            <div className="row">
                <Form click={this.click} handleInput={this.handleInput} getValue={this.getValue}/>
                <NameBadgeList handleReappear={this.reappear} handleDisappear={this.disappear}
                               badges={this.state.badges}/>
            </div>
        )
    }
}


export default NameBadgeContainer;