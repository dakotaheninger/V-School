import React from "react";
import TodoContainer from "../containers/todo-container";



class TodoList extends React.Component{
    genItems(){
        return this.props.allItems.map((item, index)=>{
            return <TodoContainer item={item} index={index} key={item + index}/>
        })
    }
    render() {
        return (
           <div>
               {this.genItems()}
           </div>
        );
    }

}


export default TodoList;