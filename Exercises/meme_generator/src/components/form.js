/**
 * Created by dakotaheninger on 7/13/17.
 */
import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div className="entire">
                {/*<div className="all-input">*/}
                    <div className="row all-input">
                        <div className="col-md-12">
                            <input className="input" placeholder="Top Text" value={this.props.getValue("top")}
                                   onChange={(event) => {
                                       this.props.handleInput("top", event);
                                   }}/>
                            <input className="input" placeholder="Image URL"
                                   value={this.props.getValue("backgroundImage")}
                                   onChange={(event) => {
                                       this.props.handleInput("backgroundImage", event);
                                   }}/>
                            <input className="input" placeholder="Bottom Text" value={this.props.getValue("bottom")}
                                   onChange={(event) => {
                                       this.props.handleInput("bottom", event);
                                   }}/>
                            <a className="submit" onClick={() => {
                                this.props.handleSave(this.props.currentMeme)
                            }}>Save</a>
                        </div>
                    {/*</div>*/}
                </div>
                {/*<div className="whole">*/}
                    <div className="row whole">
                        <div className="col-md-offset-3 col-md-6"
                             style={{backgroundImage: `url(${this.props.currentImage})`}}>
                            <p className="current-top">{this.props.currentTop}</p>
                            <p className="current-bottom">{this.props.currentBottom}</p>
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Form;