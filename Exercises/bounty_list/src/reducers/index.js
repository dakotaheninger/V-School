let defaultState = {
    allPeople: []
};

let mainReducer = (state = defaultState, action) =>{
    if(action.type === "SET_DATA"){
        return {
            ...state,
            allPeople: action.item
        }

    } else {
        return {
            ...state
        }
    }
};


export default mainReducer;