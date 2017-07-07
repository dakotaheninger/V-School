/**
 * Created by dakotaheninger on 7/3/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import CountriesContainer from "./containers/countries-container.js";
import Navbar from "./components/navbar.js";

class App extends React.Component {
    render() {
        let countries = [
            {
                name: "Peru",
                cname: "peru",
                desc: "Peru is located in the west of South America, and has borders with Ecuador, Colombia, Brazil, Bolivia and Chile. It has sovereignty over 1,285,215 km2 of land and 200 nautical miles of the Pacific Ocean, as well as 60 million hectares of the Antarctic."
            },
            {
                name: "Spain",
                cname: "spain",
                desc: "The word Spain originated from the Roman name \"Hispania\". Spain is the second largest country in Europe, next to France, which is located in an area known as the Iberian Peninsula. This island is surrounded by the Mediterranean Sea in the south to the east, Atlantic Ocean to the west and the Bay of Biscay to the north."
            },
            {
                name: "France",
                cname: "france",
                desc: "France is the largest country in Western Europe, composed of lush plains, rich mountains, and beautiful coasts. ... France borders the Atlantic Ocean (Bay of Biscay) and La Manche (the English Channel), situated between Belgium and Spain, and the Mediterranean Sea"
            },
            {
                name: "New Zealand",
                cname: "zealand",
                desc: "New Zealand is located near the centre of the water hemisphere and is made up of two main islands and a number of smaller islands. The two main islands (the North Island, or Te Ika-a-Māui, and the South Island, or Te Waipounamu) are separated by Cook Strait, 22 kilometres (14 mi) wide at its narrowest point."
            },
            {
                name: "Madagascar",
                cname: "madagascar",
                desc: "Madagascar is a large island in the Indian Ocean off the eastern coast of southern Africa, east of Mozambique. It is the fourth largest island in the world. The highest point is Maromokotro, in the Tsaratanana Massif region in the north of the island, at 2,876 metres (9,436 ft)."
            },
            {
                name: "Japan",
                cname: "japan",
                desc: "The kanji that make up Japan's name mean \"sun origin\". ... Japan is a stratovolcanic archipelago consisting of about 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands"
            },
            {
                name: "Greece",
                cname: "greece",
                desc: "Greece, officially known as The Hellenic Republic, is the southernmost country on the European mainland. ... The largest religious minority is the concentration of Greek Muslims in northeastern Thrace. Some islands in the Ionian and Aegean have a significant number of Catholics."
            },
            {
                name: "Aruba",
                cname: "aruba",
                desc: "Aruba is a popular Caribbean island only 18 miles off the Venezuela coast. It is only 19.6 miles long and 6 miles across at its widest point, approximately 70 square miles. It is one in a group of three islands called the \"ABC\" (Aruba, Bonaire, Curacao) islands. "
            },
            {
                name: "Thailand",
                cname: "thailand",
                desc: "Thailand is in the heart of Southeast Asia. Cambodia and Laos border the country to the east and northeast, and Myanmar lies to the northwest. To the west is the Andaman Sea and the Gulf of Thailand, southeast of Burma. ... Food in Thailand is influenced by Chinese and Indian cultures."
            }
        ];
        return (
            <div className="container-fluid">
                <Navbar title="COUNTRIES I WOULD LIKE TO VISIT"/>
                <CountriesContainer countries={countries}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector("#root"));
