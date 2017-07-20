/**
 * Created by dakotaheninger on 7/17/17.
 */
import React from "react";
import Name from "./name";


class NameList extends React.Component{
    getName(){
       return <Name text={this.props.text}/>
    }
    render() {
        return (
            <div>
                {this.getName()}
            </div>
        );
    }

}

export default NameList;