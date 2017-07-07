/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap"

class Navbar extends React.Component {
    render() {
        let links = this.props.links.map((item) => {
            return (
                    <a key={item.name} href={item.link}>
                        {item.name}
                    </a>
            )
        });
        return (
            <div className="nav">
                <div className="col-md-4 col-sm-12">
                    <p className="left-side">{this.props.brand}</p>
                </div>
                <div className="col-md-offset-2 col-md-6 col-sm-12 right-side">
                    <li className="drop" >
                        <DropdownButton id="fixdrop" title="Dropdown">
                            {links}
                        </DropdownButton>
                    </li>
                </div>

            </div>

        )
    }
}

export default Navbar;