import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="row navbar-countries">
                    <div className="col-md-12 my-navbar">
                        <h1 className="title">{this.props.title}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;