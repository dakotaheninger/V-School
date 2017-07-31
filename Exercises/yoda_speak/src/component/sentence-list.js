import React from "react";
import Sentence from "./sentence";


class SentenceList extends React.Component{
    getSentences(){
        return this.props.allSentences.map((item, index)=>{
            return <Sentence item={item} index={index} key={item + index} />
        })
    }
    render() {
        return (
           <div className="col-md-12">
               {this.getSentences()}
           </div>
        );
    }

}

export default SentenceList;