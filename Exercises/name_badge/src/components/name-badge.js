/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import FontAwesome from "react-fontawesome";

class NameBadge extends React.Component {
    render() {
        return (
            <div className="col-md-offset-2 col-md-8 main-badge">
                <div className="badge-head" style={{backgroundColor: this.props.item.backgroundColor}}>
                    <span className="badge-title">Badge<a className={`compress${this.props.index}`} onClick={()=>{
                        this.props.handleDisappear(this.props.index);
                    }}>
                    <FontAwesome
                        name = "compress"
                    />
                    </a><a onClick={()=>{
                        this.props.handleReappear(this.props.index);
                    }} className={`expand expand${this.props.index}`}>
                        <FontAwesome
                            name = "expand"
                        />
                    </a></span>
                </div>
                <div className={`col-md-offset-1 col-md-5 badge-left badge${this.props.index}`}>
                    <div><span className="key">First Name: </span>{this.props.item.firstName}</div>
                    <div><span className="key">Email: </span>{this.props.item.email}</div>
                    <div><span className="key">Phone: </span>{this.props.item.phone}</div>
                </div>
                <div className={`col-md-offset-1 col-md-5 badge-right badgeR${this.props.index}`}>
                    <div><span className="key">Last Name: </span>{this.props.item.lastName}</div>
                    <div><span className="key">Birth Place: </span>{this.props.item.birthPlace}</div>
                </div>
                <div className=" col-md-12 about-badge" style={{backgroundColor: this.props.item.backgroundColor}}>
                    <span className={`about-me about${this.props.index}`}>{this.props.item.about}</span><span className={`full-name full${this.props.index}`}>{`${this.props.item.firstName} ${this.props.item.lastName}`}</span>
                </div>
            </div>
        )
    }
}

export default NameBadge;