import React from "react";


class Form extends React.Component {
    render() {
        return (
            <div className="row all-inputs">
                <div className="col-md-offset-3 col-md-6">
                    <div className="col-md-4">
                        <input value={this.props.getValue("title")} onChange={(event)=>{
                            this.props.handleInput("title", event);
                        }} className="input" placeholder="Name" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <input value={this.props.getValue("description")} onChange={(event)=>{
                            this.props.handleInput("description", event);
                        }} className="input" placeholder="Description" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <input value={this.props.getValue("price")} onChange={(event)=>{
                            this.props.handleInput("price", event);
                        }} className="input" placeholder="Price" type="number"/>
                    </div>
                </div>
                <div className="col-md-12 submit">
                    <a onClick={()=>{
                        this.props.addData(this.props.input);
                        this.props.handleReset();
                    }}>Submit</a>
                </div>
            </div>
        );
    }

}

export default Form;