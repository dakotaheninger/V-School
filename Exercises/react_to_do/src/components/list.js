/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";

class List extends React.Component {
    createList() {
        this.items = this.props.list.map((item, index) => {
            return (
                <li className="ind-items" onClick={()=>{
                    this.props.handleRemove(index);
                }} key={item + index}>
                    {index + ". " + item}
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
                <input className="input" value={this.props.value} onChange={this.props.handleInput}/>
                <a className="add" onClick={() => {
                    this.props.handleClick();
                }}>Click to Add Item
                </a>
                <ul>
                    {this.items}
                </ul>
            </div>
        )
    }
}


export default List;
