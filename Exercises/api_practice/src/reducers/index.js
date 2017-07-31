let defaultState = {
    allArticles: []
};

let mainReducer = (state = defaultState, action) =>{
    if(action.type === "SET_DATA"){
        return {
            ...state,
            allArticles: action.items
        }

    } else {
        return{
            ...state
        }
    }
};


export default mainReducer;