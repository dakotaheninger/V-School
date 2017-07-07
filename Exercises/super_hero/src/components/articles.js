/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";


class Articles extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className={this.props.cname}>
                    <h1 className="name" onClick={()=>{
                        this.props.handleSpeak(this.props.speak)}}>{this.props.name}</h1>

                </div>
            </div>

        )
    }
}

export default Articles;