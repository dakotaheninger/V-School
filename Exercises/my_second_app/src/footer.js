/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="footer col-md-offset-3 col-md-6">
                    <a className="facebook click">{this.props.facebook}</a>
                    <a className="twitter click">{this.props.twitter}</a>
                    <a className="email click">{this.props.email}</a>
                    <a className="phone click">{this.props.phone}</a>

                </div>
            </div>
        )

    }
}

export default Footer;



//index.js tag
//<Footer facebook="" twitter="" email="" phone=""/>

