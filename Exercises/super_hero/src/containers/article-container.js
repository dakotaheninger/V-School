/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import Articles from "../components/articles.js";


class ArticleContainer extends React.Component {
    alertSpeak(speak){
        alert(`${speak}`);
    }
    render() {
        let articles = this.props.articles.map((item) => {
            return <Articles handleSpeak ={this.alertSpeak} speak={item.speak} name={item.name} action={item.action} cname={item.cname}/>
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    {articles}
                </div>
            </div>

        )
    }
}

export default ArticleContainer;