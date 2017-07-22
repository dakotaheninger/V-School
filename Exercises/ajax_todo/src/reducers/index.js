let defaultState = {
    allItems: []
};

let mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
        allItems: action.items
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;