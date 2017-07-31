import React from "react";
import PersonListContainer from "../containers/person-list-container";


class PersonList extends React.Component{
    getPeople(){
        return this.props.allPeople.map((item, index)=>{
            return <PersonListContainer item={item} index={index} key={item + index}/>
        })
    }
    render() {
        return (
            <div>
                {this.getPeople()}
            </div>
        );
    }

}


export default PersonList;