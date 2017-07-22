import React from "react";


class TodoItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className={`col-md-offset-3 col-md-6 data data${this.props.index}`}>
                    <h1 className="name">{this.props.item.title}</h1>
                    <h2 className="description">{this.props.item.description}</h2>
                    <h2 className="price">{this.props.item.price}</h2>
                    <a className="delete" onClick={() => {
                        this.props.delData(this.props.item._id)
                    }}>Delete</a>
                    <a className="edit" onClick={() => {
                        this.props.disappear(this.props.index)
                    }}>Edit</a>
                </div>
                <div className={`col-md-offset-3 col-md-6 update update${this.props.index}`}>
                    <div className="col-md-4">
                        <input value={this.props.getUpdateValue("title")} onChange={(event) => {
                            this.props.handleUpdateInput("title", event)
                        }} placeholder={this.props.item.title}/>
                    </div>
                    <div className="col-md-4">
                        <input value={this.props.getUpdateValue("description")} onChange={(event) => {
                            this.props.handleUpdateInput("description", event)
                        }} placeholder={this.props.item.description}/>
                    </div>
                    <div className="col-md-4">
                        <input value={this.props.getUpdateValue("price")} onChange={(event) => {
                            this.props.handleUpdateInput("price", event)
                        }} placeholder={this.props.item.price}/>
                    </div>
                    <div className="col-md-12">
                        <a className="update-button" onClick={() => {
                            this.props.reappear(this.props.index);
                            this.props.handleEdit(this.props.updateInput, this.props.item._id);
                            this.props.handleUpdateReset();
                        }}>Update</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default TodoItem;