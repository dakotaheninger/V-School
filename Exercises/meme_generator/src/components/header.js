/**
 * Created by dakotaheninger on 7/13/17.
 */
import React from "react";

class Header extends React.Component {
    render() {
        return (
                <div className="row head">
                    <div className="col-md-12">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.imageInstruction}</h2>
                        <h2>{this.props.textInstructions}</h2>
                        <h2>{this.props.saveInstructions}</h2>
                    </div>
                </div>
        )
    }
}

export default Header;