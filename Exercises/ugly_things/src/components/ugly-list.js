import React from "react";
import Ugly from "./ugly";


class UglyList extends React.Component {
    getPics() {
        return this.props.allPics.map((item, index) => {
            return <Ugly editedPics={this.props.editedPics} handleEditDisappear={this.props.handleEditDisappear} editPic={this.props.editPic}
                         handleEditSubmit={this.props.handleEditSubmit} getEditValue={this.props.getEditValue}
                         handleEdit={this.props.handleEdit}
                         handleEditAppear={this.props.handleEditAppear} handleRemove={this.props.handleRemove}
                         item={item} index={index} key={item + index}/>
        })
    }

    render() {
        return (
            <div className="row all-pics">{this.getPics()}</div>
        );
    }

}


export default UglyList;