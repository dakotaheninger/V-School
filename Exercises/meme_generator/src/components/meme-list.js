/**
 * Created by dakotaheninger on 7/12/17.
 */
import React from "react";
import Meme from "./meme";

class MemeList extends React.Component{
	genMemes(){
		return this.props.memes.map((item, index) => {
			return <Meme item={item} index={index} key={item + index}/>
		})
	}
    render() {
    	return (
    	   <div>
			   {this.genMemes()}
		   </div>
    	);
    }


}



export default MemeList;