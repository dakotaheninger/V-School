import axios from "axios";

export function delData(id) {
    return (dispatch) =>{
        axios.delete(`http://localhost:8080/${id}`).then((response)=>{
            dispatch(loadData())
        }).catch((error)=>{
            throw error
        })
    }

}

export function upData(id, item){
    return (dispatch) =>{
        axios.put(`http://localhost:8080/${id}`, item).then((response) =>{
            dispatch(loadData());
        }).catch((error) =>{
            throw error
        })

    }
}

export function loadData() {
    return (dispatch) =>{
        axios.get("http://localhost:8080/").then((response) =>{
            console.log(response.data.data);
            dispatch(setData(response.data.data));
        }).catch((error) =>{
            throw error
            }
        )
    }
}

export function addData(item){
    return (dispatch) =>{
        axios.post("http://localhost:8080/", item).then((response) =>{
            dispatch(loadData());
        }).catch((error) =>{
            throw error
        })
    }
};

export function setData(item){
    return {
        type: "SET_DATA",
        item
    }
}