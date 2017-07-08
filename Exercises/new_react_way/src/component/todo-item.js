/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";
import FontAwesome from "react-fontawesome";


class TodoItem extends React.Component {
    render() {
        return (
            <li className="ind-items" key={this.props.item + this.props.index}>
                {(this.props.index + 1) + ". " + this.props.item}
                <a className="edit" onClick={() => {
                    this.props.handleEdit(this.props.index);
                }}>
                    <FontAwesome
                        name="pencil-square-o"
                    />
                </a>
                <a className="remove" onClick={() => {
                    this.props.handleRemove(this.props.index);
                }}><FontAwesome
                    name="times"
                /></a>

            </li>
        )
    }
}


export default TodoItem;