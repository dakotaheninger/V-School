import React from "react";


class Header extends React.Component {
    render() {
        return (
            <div className="row shadow">
                <div className="header col-md-12">
                    <h1>
                        {this.props.title}
                    </h1>
                    <h2>
                        {this.props.instructions}
                    </h2>
                    <h2>
                        {this.props.submit}
                    </h2>
                </div>
            </div>
        );
    }

}


export default Header;