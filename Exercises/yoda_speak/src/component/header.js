import React from "react";


class Header extends React.Component {
    render() {
        return (
            <div className="row main-header">
                <div className="col-md-offset-3 col-md-6">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.description}</h2>
                    <h3>{this.props.quote}</h3>
                </div>
            </div>
        );
    }

}

export default Header;