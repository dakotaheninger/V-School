/**
 * Created by dakotaheninger on 7/7/17.
 */
import React from "react";


class Header extends React.Component {
    render() {
        return (
            <div className="col-md-offset-3 col-md-6 head">
                <h1 className="title">{this.props.title}</h1>
                <p className="instruction">{this.props.instruction}</p>
                <p className="instruction">{this.props.delete}</p>
                <p className="instruction">{this.props.edit}</p>
            </div>
        )
    }
}


export default Header;
