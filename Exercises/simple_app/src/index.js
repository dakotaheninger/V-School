/**
 * Created by dakotaheninger on 6/28/17.
 */
import React from "react";

import ReactDom from "react-dom";
import Navbar from "./navbar.js";
import Content from "./content.js";
import Footer from "./footer.js";
import "./index.css";
import ArticleList from "./articles";


class App extends React.Component {
    render() {
        let myArticles = [
            {
                title: "Man must explore, and this is exploration at its greatest",
                description: "Problems look mighty small from 150 miles up",
                company: "Start Bootstrap",
                date: "September 24, 2014",
                link: "",
                companyLink: ""
            }
            ,
            {
                title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
                description: "",
                company: "Start Bootstrap",
                date: "September 18, 2014",
                link: "",
                companyLink: ""
            }
            ,
            {
                title: "Science has not yet mastered prophecy",
                description: "We predict too much for the next year and yet far too little for the next ten.",
                company: "Start Bootstrap",
                date: "August 24, 2014",
                link: "",
                companyLink: ""
            }
            ,
            {
                title: "Failure is not an option",
                description: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
                company: "Start Bootstrap",
                date: "July 8, 2014",
                link: "",
                companyLink: ""
            },
        ];
        return (
            <div>
                <div>
                    <Navbar webName="Start Bootstrap" links={[
                        {
                            text: "Home",
                            link: "#"
                        },
                        {
                            text: "About",
                            link: "#1"
                        },
                        {
                            text: "Sample Post",
                            link: "#2"
                        },
                        {
                            text: "Contact",
                            link: "#3"
                        }
                    ]}/>
                </div>
                <div>
                    <ArticleList articles={myArticles}/>

                </div>
                <div>
                    <Footer button="OLDER POSTS" buttonLink="" socialOne="facebook" backgroundOne="circle" linkOne=""
                            socialTwo="twitter"
                            backgroundTwo="circle" linkTwo="" socialThree="github" backgroundThree="circle"
                            linkThree=""/>
                </div>
            </div>

        )
    }
}


ReactDom.render(<App />, document.querySelector(("#root")));
