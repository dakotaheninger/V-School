import React from "react";
import FontAwesome from "react-fontawesome";


class Ugly extends React.Component {
    render() {
        return (
            <div>
                <div className={`col-md-4 edit-item edit-item${this.props.index}`}>
                    <div className="col-md-12 input">
                        <input onChange={(event) => {
                            this.props.handleEdit("title", event, this.props.index);
                        }} placeholder={this.props.item.title}/>
                    </div>
                    <div className="col-md-12 input">
                        <input onChange={(event) => {
                            this.props.handleEdit("backgroundImage", event, this.props.index);
                        }} placeholder={this.props.item.backgroundImage}/>
                    </div>
                    <div className="col-md-12 input">
                        <input onChange={(event) => {
                            this.props.handleEdit("description", event, this.props.index);
                        }} placeholder={this.props.item.description}/>
                    </div>
                    <div className="col-md-12 input">
                        <a onClick={() => {
                            this.props.handleEditSubmit(this.props.index, this.props.editedPics[this.props.index]);
                            this.props.handleEditDisappear(this.props.index);
                        }}>Submit</a>
                    </div>
                </div>
                <div className={`col-md-4 one-pic one-pic${this.props.index}`}>
                    <h1>{this.props.item.title}</h1>
                    <div style={{backgroundImage: `url(${this.props.item.backgroundImage})`}} className="pic"></div>
                    <h2>{this.props.item.description}</h2>
                    <a className="delete" onClick={() => {
                        this.props.handleEditAppear(this.props.index);
                    }}>
                        <FontAwesome
                            name="pencil-square-o"
                        />
                    </a>
                    <a className="delete"  onClick={() => {

                        this.props.handleRemove(this.props.index)
                    }}><FontAwesome
                        name="trash"
                    />
                    </a>
                </div>
            </div>
        );
    }
}

export default Ugly;


