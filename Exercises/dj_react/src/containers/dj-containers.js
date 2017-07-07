/**
 * Created by dakotaheninger on 7/5/17.
 */
import React from "react";
import Dj from "../components/dj.js";
import autoBind from "react-autobind";
import ReactAudioPlayer from "react-audio-player";

class DjContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            style: {
                height: "1000px",
                width: "700px",
                backgroundColor: "cadetblue",
                margin: "0 auto",
                marginTop: " 100px",
                transition: "all .3s ease-in-out",
                display: "inline-block",
                margin: "20px"

            }
        }

    }

    componentDidMount() {
        window.addEventListener("scroll", this.scroll);
        window.addEventListener("keyup", this.keyUp);
        window.addEventListener("keydown", this.keyDown);
    }

    hover() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "yellow",
                borderRadius: "50%"
            }
        });
    }


    offHover() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "cadetblue",
                borderRadius: "0px",
                border: "20px solid yellow",
                height: "100vh",
                width: "700px"
            }
        });
    }

    mouseDown() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "limegreen",
                borderRadius: "10vh"
            }
        });
    }

    mouseUp() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "orange",
                height: "700px",
                width: '1500px'
            }
        });
    }

    scroll() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "purple",
                width: "700px",
                height: "100vh"

            }
        });
    }

    keyDown() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "black"

            }
        });
    }

    keyUp() {
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "white"
            }
        });
    }

    render() {
        return (
            <div>
                <ReactAudioPlayer
                src="Music/Vexento%20-%20Return%20Of%20The%20Heroes.mp3"
                autoPlay
                />
                <Dj style={this.state.style} handleHov={this.hover} handleOffHov={this.offHover}
                    handleMouseDown={this.mouseDown} handleMouseUp={this.mouseUp} handleScroll={this.scroll}
                    handleKeyDown={this.keyDown} handleKeyUp={this.keyUp}/>
            </div>
        )
    }
}

export default DjContainer;