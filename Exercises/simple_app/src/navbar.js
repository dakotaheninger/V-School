/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";
import Header from "./header.js";

class Navbar extends React.Component {
    render() {
        let links = this.props.links.map((item) => {
            return (
                <a className="top-link" key={item.text} href={item.link}>
                    {item.text}
                </a>
            )

        });
        return (
            <div className="container-fluid background">
                <div className="row skinny">
                    <div className="col-md-6 web-name">
                        <a>{this.props.webName}</a>
                    </div>
                    <div className="col-md-offset-3 col-md-3 links">
                        {links}
                    </div>
                </div>
                <div className="row clean">
                    <div className="col-md-12">
                        <Header main="Clean Blog" sentance="A Clean Blog Theme by Start Bootstrap" />

                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar;