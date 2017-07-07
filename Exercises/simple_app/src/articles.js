/**
 * Created by dakotaheninger on 6/29/17.
 */
import React from "react";
import Content from "./content.js";

class ArticleList extends React.Component {
    alertDesc(desc) {
        alert(`This article is about ${desc}`);
    }

    alertFav(name) {
        alert(`You favorited: ${name}`);
    }


    render() {
        let articles = this.props.articles.map((item) => {
            return <Content handleFavClick={this.alertFav} handleDescClick={this.alertDesc} link={item.link}
                            companyLink={item.companyLink} company={item.company} title={item.title}
                            description={item.description} date={item.date}/>
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


export default ArticleList;