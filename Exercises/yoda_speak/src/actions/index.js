import axios from "axios";

let config = {
    headers: {
        "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
    }
};

export function loadData(str) {
    return (dispatch) => {
        axios.get(`https://yoda.p.mashape.com/yoda?sentence=${str}`, config).then((response) => {
            dispatch(setData(response.data));
        }).catch((error)=>{
            throw error
        });
    }

}

export function setData(items) {
    return {
        type: "SET_DATA",
        items
    }

}