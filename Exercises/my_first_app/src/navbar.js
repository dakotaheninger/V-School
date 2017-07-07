import React from "react";

class Navbar extends React.Component {
    render() {
        return (
           <div className="navbar">
               <span className="brand">Kill Atom</span>
               <span><a href="#">Why atom sucks</a></span>
               <span><a href="#">Why jordan is stealing Webstorm</a></span>
               <span><a href="#">Why Dakota can shut up</a></span>
           </div>
        )
    }
}


export default Navbar;