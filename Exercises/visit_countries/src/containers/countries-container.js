/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import Countries from "../components/countries.js";

class CountriesContainer extends React.Component{
    alertDesc(desc){
        alert(`${desc}`);
    }
    render(){
        let countries = this.props.countries.map((item)=>{
          return  <Countries handleDesc={this.alertDesc} desc={item.desc} name={item.name} cname={item.cname} button={item.button}/>
        });
        return(
            <div className="row">
                {countries}
            </div>

        )
    }
}

export default CountriesContainer;