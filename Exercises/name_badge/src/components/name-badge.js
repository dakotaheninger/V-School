/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";

class NameBadge extends React.Component {
    render() {
        return (
                <div className="col-md-12">
                    <div className="col-md-offset-1 col-md-5 left-side">
                        <div>{this.props.item.firstName}</div>
                        <div>{this.props.item.email}</div>
                        <div>{this.props.item.phone}</div>
                    </div>
                    <div className="col-md-offset-2 col-md-5">
                        <div>{this.props.item.lastName}</div>
                        <div>{this.props.item.birthPlace}</div>
                        <div>{this.props.item.favoriteFood}</div>
                    </div>
                    <div>{this.props.item.about}</div>
            </div>
        )
    }
}

export default NameBadge;