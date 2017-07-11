/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";
import FontAwesome from "react-fontawesome";


class TodoItem extends React.Component {
    render() {
        let keyPress = (event) => {
            if (event.key == "Enter") {
                this.props.handleEditItem(this.props.index);
            }
        };
        let style = {
            display: "none",
            color: "black",
            fontSize: "25px",
            margin: "1vmin"
        };
        return (
            <li className="ind-items" key={this.props.item + this.props.index}>
                <span className={`item${this.props.index}`}> {(this.props.index + 1) + ". " + this.props.item}</span>
                <span className={`edit${this.props.index}`} style={style}><input onKeyPress={keyPress}
                    placeholder={this.props.placeholder[this.props.index]} value={this.props.value}
                    onChange={this.props.handleEditInput}/><a className="edit-item" onClick={() => {
                    this.props.handleEditItem(this.props.index);
                }}>Click to Change</a></span>
                <a className="edit" onClick={() => {
                    this.props.handleNewInput(this.props.index);
                }}>
                    <FontAwesome
                        name="pencil-square-o"
                    />
                </a>
                <a className="remove" onClick={() => {
                    if (this.props.inputOpen == true) {
                        this.props.handleCancel(this.props.index);
                    } else {
                        this.props.handleRemove(this.props.index);
                    }
                }}><FontAwesome
                    name="times"
                /></a>

            </li>
        )
    }
}


export default TodoItem;