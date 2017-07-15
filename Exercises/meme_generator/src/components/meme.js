/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";

class Meme extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="row whole">
                <div style={{backgroundImage: `url(${this.props.item.backgroundImage})`}}
                     className="col-md-offset-3 col-md-6 col-sm-12">
                    <p className="current-top">{this.props.item.top}</p>
                    <p className="current-bottom">{this.props.item.bottom}</p>
                </div>
            </div>
        );
    }

}


export default Meme;