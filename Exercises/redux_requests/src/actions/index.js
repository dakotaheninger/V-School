import axios from "axios";




export function loadColor() {
    return (dispatch) => {
        return axios.get(`http://www.colr.org/json/color/random`).then((response) => {
            let fullName = "";
            if (response.data.colors[0].tags.length === 0) {
                fullName = `This Color Has No Name`
            } else {
                for (var i = 0; i < response.data.colors[0].tags.length - 1; i++) {
                    fullName += `${response.data.colors[0].tags[i].name} `
                }
                fullName += `${response.data.colors[0].tags[i].name}`
            }
            dispatch(change(response.data.new_color, fullName));
        });
    }
}

export function change(color, name) {
    return {
        type: "CHANGE",
        color,
        name
    }


}