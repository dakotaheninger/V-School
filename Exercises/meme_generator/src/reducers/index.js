/**
 * Created by dakotaheninger on 7/12/17.
 */
let defaultState = {
    memes: [],
};

let mainReducer = (state = defaultState, action) => {
    if (action.type === "SAVE") {
        return {
            ...state,
            memes: [...state.memes, action.meme]
        }
    } else {
        return {
            ...state
        }
    }

};

export default mainReducer;
