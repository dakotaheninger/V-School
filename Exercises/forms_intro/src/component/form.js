/**
 * Created by dakotaheninger on 7/6/17.
 */
import React from "react";


class Form extends React.Component {
    genNames() {
        this.nameListItems = this.props.names.map((item, index) => {
            return (
                <li onClick={()=>{
                    this.props.handleRemove(index);
                }} style={this.props.listStyle} key={item + index}>
                    {item}
                </li>
            );
        });
    }

    render() {
        this.genNames();
        return (
            <div style={this.props.style} className="col-md-12">
                <p>People against {this.props.title}!</p>
                <input style={this.props.buttonStyle} value={this.props.nameValue} className="input" onChange={this.props.handleInput}/>
                <button style={this.props.buttonStyle} onClick={() => {
                    this.props.handleClick();
                }}>Click to Add Name
                </button>
                <div>Click on a Name to Remove it!</div>
                <div>
                    <ul>
                        {this.nameListItems}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Form;