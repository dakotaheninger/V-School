/**
 * Created by dakotaheninger on 7/10/17.
 */
import React from "react";
import NameBadge from "./name-badge.js";

class NameBadgeList extends React.Component {
    genBadges() {
        return this.props.badges.map((item, index) => {
            return <NameBadge item={item} index={index}/>
        });

    }

    render() {

        return (
            <div className="row">
                {this.genBadges()}
            </div>

        )
    }
}

export default NameBadgeList;