/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="col-md-12 head">
                <h1>{this.props.welcome}</h1>
                <h2>{this.props.describe}</h2>
            </div>
        )
    }
}

export default Header;