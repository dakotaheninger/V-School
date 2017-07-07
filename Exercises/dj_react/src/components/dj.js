/**
 * Created by dakotaheninger on 7/5/17.
 */
import React from "react";
import EventListener from "react-event-listener";

class Dj extends React.Component {
    render() {
        return (
            <div>
            <div onMouseOver={() => {
                this.props.handleHov();
            }} onMouseLeave={() => {
                this.props.handleOffHov();
            }} onMouseDown={() => {
                this.props.handleMouseDown();
            }} onMouseUp={() => {
                this.props.handleMouseUp();
            }} onKeyDown={() => {
                this.props.handleKeyDown();
            }} style={this.props.style}>
            </div>
                <div onMouseOver={() => {
                    this.props.handleHov();
                }} onMouseLeave={() => {
                    this.props.handleOffHov();
                }} onMouseDown={() => {
                    this.props.handleMouseDown();
                }} onMouseUp={() => {
                    this.props.handleMouseUp();
                }} onKeyDown={() => {
                    this.props.handleKeyDown();
                }} style={this.props.style}>

                </div>
            </div>


        )
    }
}

export default Dj;