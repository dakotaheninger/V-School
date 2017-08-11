/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="whole-footer">
                <div className="footer">
                    <div className="col-md-offset-3 col-md-6 older-link">
                        <button className="older" href={this.props.buttonLink}>{this.props.button}
                            <FontAwesome
                                name="long-arrow-right"
                                style={{marginLeft: "1vw"}}
                            />
                        </button>
                    </div>
                    <div className="col-md-12">
                        <p className="full-underline"></p>
                    </div>
                    <div className="col-md-offset-5 col-md-2 social">
                        <a href={this.props.linkOne} className="fa-stack fa-lg social-tag">
                            <FontAwesome
                                name={this.props.backgroundOne}
                                stack="2x"
                            />
                            <FontAwesome
                                name={this.props.socialOne}
                                stack="1x"
                                inverse
                            />
                        </a>
                        <a href={this.props.linkTwo} className="fa-stack fa-lg social-tag">
                            <FontAwesome
                                name={this.props.backgroundTwo}
                                stack="2x"
                            />
                            <FontAwesome
                                name={this.props.socialTwo}
                                stack="1x"
                                inverse
                            />
                        </a>
                        <a href={this.props.linkThree} className="fa-stack fa-lg social-tag">
                            <FontAwesome
                                name={this.props.backgroundThree}
                                stack="2x"
                            />
                            <FontAwesome
                                name={this.props.socialThree}
                                stack="1x"
                                inverse
                            />
                        </a>
                    </div>
                    <div className="col-md-offset-5 col-md-2 copyright">
                        <p>Copyright
                            <FontAwesome
                                name="copyright"
                                style={{marginLeft: ".2vw", marginRight: ".2vw"}}
                            />
                            Your Website 2016
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;