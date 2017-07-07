/**
 * Created by dakotaheninger on 6/28/17.
 */

import React from "react";

import ReactDOM from "react-dom";
import Navbar from "./navbar.js";
import Footer from "./footer";
import Content from "./content";

import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand="CatBabies" links={[
                    {
                        name: "Upper Right",
                        link: "http://google.com"
                    },
                    {
                        name: "Blog",
                        link: "http://yahoo.com"
                    },
                    {
                        name: "Cat Babies",
                        link: "http://atom.io"
                    },
                    {
                        name: "Hello",
                        link: "#"
                    }
                ]}/>
                <p className="hello">Hello there</p>
                <Content>
                    <p>
                        Migas shoreditch tumeric, hashtag woke man bun brooklyn mlkshk etsy pinterest everyday carry.
                        Chillwave whatever pickled cornhole, vexillologist VHS gluten-free tousled disrupt waistcoat tacos
                        next level. Viral mumblecore synth, authentic YOLO quinoa hot chicken glossier palo santo raclette
                        jianbing swag selvage. Pitchfork kale chips tote bag, occupy lomo vegan vinyl etsy roof party tbh
                        glossier mixtape man braid fixie. Activated charcoal organic tbh flannel bitters slow-carb, retro
                        hoodie wayfarers twee prism health goth. Etsy marfa pitchfork vice. Venmo distillery cronut blue
                        bottle aesthetic cray jean shorts cornhole kinfolk echo park. Vaporware flannel literally pinterest
                        keffiyeh enamel pin, art party sriracha seitan woke yuccie try-hard narwhal mumblecore. Salvia fixie
                        keffiyeh gastropub affogato sartorial pok pok blog roof party. Umami microdosing green juice,
                        try-hard small batch whatever marfa beard asymmetrical man braid sartorial shabby chic DIY literally
                        quinoa. Copper mug pour-over heirloom blog chartreuse pitchfork. Venmo PBR&B cardigan vexillologist
                        salvia, pork belly kitsch food truck.
                    </p>
                </Content>
                <Footer facebook="" twitter="" email="" phone=""/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
