let defaultState = {
    allSentences: []
};


let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            allSentences: [...state.allSentences, action.items]
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;