/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";
import FontAwesome from "react-fontawesome";
class List extends React.Component {
    createList() {
        this.items = this.props.list.map((item, index) => {
            return (
                <li className="ind-items" key={item + index}>
                    {(index + 1) + ". " + item}
                    <a className="edit" onClick={()=>{
                        this.props.handleEdit(index);
                    }}>
                        <FontAwesome
                            name="pencil-square-o"
                        />
                    </a>
                    <a className="remove" onClick={() => {
                        this.props.handleRemove(index);
                    }}><FontAwesome
                        name="times"
                    /></a>

                </li>
            )
        })
    }

    render() {
        this.createList();
        return (
            <div className="col-md-offset-3 col-md-6 main">
                <h1 className="title">{this.props.title}</h1>
                <p className="instruction">{this.props.instruction}</p>
                <p className="instruction">{this.props.delete}</p>
                <p className="instruction">{this.props.edit}</p>
                <input className="input" value={this.props.value} onChange={this.props.handleInput}/>
                <a className="add" onClick={() => {
                    this.props.handleClick();
                }}>Click to Add Item
                </a>
                <ul className="col-md-12">
                    {this.items}
                </ul>
            </div>
        )
    }
}


export default List;
