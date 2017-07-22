import React from "react";


class Header extends React.Component{
    render() {
        return (
            <div className="row head">
                <h1>{this.props.title}</h1>
                <h2>{this.props.quote}</h2>
            </div>
        );
    }

}

export default Header;