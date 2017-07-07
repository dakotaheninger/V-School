/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div className="col-md-3 content">
                <a className="hover">
                    <h1 className="title" href={this.props.link}>{this.props.title}</h1>
                    <h2 className="description" href={this.props.link}>{this.props.description}</h2>
                </a>
                <h3 className="post">Posted by <a className="company-link" href={this.props.companyLink}>{this.props.company}</a> on {this.props.date}
                </h3>
                <p className="content-underline"></p>
                <button onClick={()=>{
                    this.props.handleDescClick(this.props.description);
                }}>Description</button>
                <button onClick={()=>{
                    this.props.handleFavClick(this.props.title);
                }}>Fav</button>
            </div>
        )
    }
}

export default Content;