/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";





class Header extends React.Component {
    render() {
        return (
            <div className="head">
                <p className="main-head">{this.props.main}</p>
                <p className="underline"></p>
                <p className="sentance">{this.props.sentance}</p>
            </div>
        )
    }
}

export default Header;