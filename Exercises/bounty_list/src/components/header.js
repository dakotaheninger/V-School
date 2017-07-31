import React from "react";


class Header extends React.Component {
    render() {
        return (
            <div className="row header">
                <div className="col-md-offset-2 col-md-8">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.description}</h2>
                </div>
            </div>
        );
    }

}

export default Header;