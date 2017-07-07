/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";

class Countries extends React.Component {
    render() {
        return (
            <div className="col-md-12 countries">
                <div className={this.props.cname}>
                    <div className="left">
                        <a onClick={() => {
                            this.props.handleDesc(this.props.desc)
                        }} className="name">{this.props.name}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries;