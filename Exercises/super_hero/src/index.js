/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import ArticleContainer from "./containers/article-container.js";

class App extends React.Component {
    render() {
        let myArticles = [
            {
                name: "Thor",
                action: "Speak",
                cname: "thor",
                speak: "I have a bad movie"
            },
            {
                name: "Hulk",
                action: "Speak",
                cname: "hulk",
                speak: "Hulk Smash"
            },
            {
                name: "Flex-Box",
                action: "Speak",
                cname: "flexbox",
                speak: "I'm better than both these goons"
            }
        ];
        return (

            <div>
                <ArticleContainer articles={myArticles}/>
            </div>
        )
    }
}


ReactDom.render(<App />, document.querySelector("#root"));