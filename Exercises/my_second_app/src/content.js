/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";


class Content extends React.Component {
    render () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Content;