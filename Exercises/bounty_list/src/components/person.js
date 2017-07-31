import React from "react";
import FontAwesome from "react-fontawesome";


class Person extends React.Component {
    render() {
        let style = {
            display: "none",
            marginTop: "7vmin"
        };
        return (
            <div>
                <div className="whole-person">
                    <h1 className={`ind${this.props.index}`}>
                        {`${this.props.item.name} - ${this.props.item.location} - $${this.props.item.price} - Wanted: ${this.props.item.deadOrAlive}`}
                    </h1>
                    <div className={`edit-input edit-input${this.props.index}`} style={style}>
                        <input value={this.props.state.name} onChange={(event) => {
                            this.props.handleInput("name", event);
                        }} placeholder={`${this.props.item.name}`}/>
                        <input value={this.props.state.location} onChange={(event) => {
                            this.props.handleInput("location", event);
                        }} placeholder={`${this.props.item.location}`}/>
                        <input value={this.props.state.price} onChange={(event) => {
                            this.props.handleInput("price", event);
                        }} placeholder={`${this.props.item.price}`}/>
                        <input value={this.props.state.deadOrAlive} onChange={(event) => {
                            this.props.handleInput("deadOrAlive", event);
                        }} placeholder={`${this.props.item.deadOrAlive}`}/>
                        <a onClick={() => {
                            this.props.upData(this.props.item.id, this.props.state);
                            this.props.unHidePerson(this.props.index);
                        }}>Submit</a>
                    </div>
                    <div className="icons">
                        <div onClick={() => {
                            this.props.hidePerson(this.props.index);
                        }}>
                            <FontAwesome
                                name="pencil-square-o"
                            />
                        </div>
                        <div onClick={() => {
                            this.props.delData(this.props.item.id)
                        }}>
                            <FontAwesome
                                name="trash"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Person;