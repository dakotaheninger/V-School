import axios from "axios";



export function setData(items) {
    return {
        type: "SET_DATA",
        items
    }

};